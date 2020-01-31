<?php

namespace App\Http\Controllers;

use App\Exam;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class ExamController extends Controller
{
    public function store(Request $request)
    {
        $exam = new Exam;
        $exam->user_id = $request->user_id;
        $exam->listening_ans = $request->listening_ans;
        $exam->listening_score = $request->listening_score;
        $exam->structure_ans = $request->structure_ans;
        $exam->structure_score = $request->structure_score;
        $exam->reading_ans = $request->reading_ans;
        $exam->reading_score = $request->reading_score;

        $l_converted = 31 + round(($request->listening_score / 50) * 37);
        $s_converted = 31 + round(($request->structure_score / 40) * 37);
        $r_converted = 31 + round(($request->reading_score / 50) * 36);

        $total_score = round(($l_converted + $s_converted + $r_converted) / 3 * 10);

        $exam->total_score = $total_score;

        $exam->save();

        return response()->json(['status' => 'success'], 200);
    }

    public function getScore(Request $request)
    {
        $user = JWTAuth::user();
        $result = Assignment::select('listening_ans','listening_score', 'structure_ans','structure_score', 'reading_ans','reading_score')->where('user_id', $user->id)->orderBy('id', 'desc')->get();

        return $result;
    }
}
