<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Task;
use App\Models\Item;
use JWTAuth;
use Exception;
class TaskController extends Controller
{
    // TODO
    // try {
    // } catch (Exception $e) { 
    //  return response()->json(['error' => $e->getMessage()], 500);
    // }
    
    public function getTasks () {
        try {
            $tasks = Task::get();
            return response()->json($tasks);
        } catch (Exception $e) { 
            return response()->json(['error' => $e->getMessage()], 500);
        }   
    }
        
    public function createTask (Request $request) {
        try {
            $task = new Task();
            $task->name = $request->name;
            $task->date_start = $request->date_start;
            $task->date_end = $request->date_end;
            $task->status = $request->status;
            $task->save();
            
            return response()->json(true);
        } catch (Exception $e) { 
            return response()->json(['error' => $e->getMessage()], 500);
        }    
    }
    public function updateTask (Request $request) {
        try {
            $task = Task::where('id_task','=',$request->id)->first();
            $task->name = $request->name;
            $task->date_start = $request->date_start;
            $task->date_end = $request->date_end;
            $task->status = $request->status;
            $task->save();
            return response()->json(true);
        } catch (Exception $e) { 
            return response()->json(['error' => $e->getMessage()], 500);
        } 
    }
    public function getStatistics () {
        try {
            $completadas=Task::where('status','COMPLETADA')->count();
            $proceso=Task::where('status','EN PROCESO')->count();
            $cancelada=Task::where('status','CANCELADA')->count();
            $iniciada=Task::where('status','INICIADA')->count();
            $total = Task::All()->count();
            return response()->json([
                'completadas' => $completadas,
                'proceso' => $proceso,
                'cancelada' => $cancelada,
                'iniciada' => $iniciada,
                'total' => $total, 
             ]);
        } catch (Exception $e) { 
            return response()->json(['error' => $e->getMessage()], 500);
        } 
    }
    
}
