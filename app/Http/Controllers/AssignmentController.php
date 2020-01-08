<?php

namespace App\Http\Controllers;

use App\Assignment;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AssignmentController extends Controller
{
    public function store(Request $request)
    {
        $assignment = new Assignment;
        $assignment->user_id = $request->user_id;
        $assignment->user_answer = $request->user_answer;
        $assignment->score = $request->score;
        $assignment->type = $request->type;
        $assignment->save();

        return response()->json(['status' => 'success'], 200);
    }

    public function getScore(Request $request)
    {
        $user = JWTAuth::user();
        $result = Assignment::select('type','user_answer', 'score')->where('user_id', $user->id)->orderBy('id', 'desc')->get();

        return $result;
    }
}
