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
            'user' => 'required|string|unique:users,user',
            'name' => 'required|string|between:2,100',
            'phone' => 'required|string|between:2,100',
            'address' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:8|confirmed|regex:/^(?=.*\d)(?=.*[A-Z]).+$/',
        ],[
            'user.required'=>'Se requiere un usuario',
            'name.required'=>'Se requiere un nombre',
            'phone.required'=>'Se requiere un teléfono',
            'address.required'=>'Se requiere una dirección',
            'user.unique'=>'El usuario ya existe',
            'email.unique'=>'El email ya existe',
            'password.min'=>'La contraseña debe tener minimo 8 caracteres',
            'password.regex' => 'La contraseña debe tener al menos una letra mayuscula y un número.'
            
            
        ]);
        if ($validator->fails()){
            return response()->json(['error'=>$validator->errors()->first()]);
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
