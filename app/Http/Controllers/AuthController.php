<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|confirmed',
        ]);
        if ($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' =>bcrypt($request->password)]
        ));
    }
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        if (! $token = JWTAuth::attempt($validator->validated())) {
            return response()->json(['error' => 'unauthorized'],401);
        }
        return $this->createNewToken($token);
    }
    public function getUser(Request $request){
        return response()->json($request->user());
    }
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }
    protected function createNewToken($token) {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => auth()->user(),
        ]);
    }

    
}
