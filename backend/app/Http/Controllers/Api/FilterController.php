<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Events\FilterTutorEvent;
use Illuminate\Http\Request;
use App\Http\Requests\AssignRequest;
use App\Http\Requests\ReviewRequest;

use App\Role;
use App\User;
use App\Qualification;


use DB;

class FilterController extends Controller
{
    public  function assign (AssignRequest $request)
    {

        $user_id = $request->only(['student'][0])['student'];
        $tutor_id = $request->only(['tutor'][0])['tutor'];

         DB::insert('insert into course_tutor_studnet (tutor, student) values (?, ?)', [$user_id, $tutor_id]);
        return response()->json([

            'ok' => true,
            'user' => $user_id,
            'tutor' => $tutor_id
        ]);
    }

    public  function writeReview (ReviewRequest $request)
    {

        $user_id = $request->only(['student'][0])['student'];
        $tutor_id = $request->only(['tutor'][0])['tutor'];
        $text = $request->only(['reviewbyStudent'][0])['reviewbyStudent'];
        $starGiven = $request->only(['starGiven'][0])['starGiven'];
        
         DB::insert('insert into course_tutor_studnet (tutor, student,reviewbyStudent,starGiven) values (?, ?,?,?)', [1, 4 , $text,$starGiven]);
        return response()->json([

            'ok' => true,
            'user' => $user_id,
            'tutor' => $tutor_id,
            'review' => $text,
            'star' => $starGiven
        ]);
    }
    
    public function getAll() {
        
        return response()->json([
            'tutors' => User::with(['role','qualifications'])->whereHas('role', function ($query) {
                $query->where('role_id', 2);
            })
            ->get()
        ]);
    }

    public function getAllStudents() {
        
        return response()->json([
            'student' => User::with(['role'])->whereHas('role', function ($query) {
                $query->where('role_id', 1);
            })
            ->get()
        ]);
    }

    public function getAllReviewsS(){
        
        $tutor  = DB::table('course_tutor_studnet')->select('tutor')->distinct()
        ->where('student',1)->get();

        $courses  = DB::table('qualification_user')->select('qualification_id')->distinct()
        ->where('user_id',4)->get();

        return response()->json([

            'ok' => true,
            'tutor' => $tutor,
            'courses' => $courses,
        ]);   
    }

    public function getAllReviewsT(){
        
        $tReviews  = DB::table('course_tutor_studnet')->select('reviewbyStudent')
        ->where('student',1)->get();
        $tAuthors  = DB::table('course_tutor_studnet')->select('student')
        ->where('tutor',4)->get();

        return response()->json([

            'ok' => true,
            'reviews' => $tReviews,
            'authors' => $tAuthors,
        ]);   
    }


    public function filter(Request $request) {
        $data = $request->only(['qualification']);
        $resp = $request->only(['qualification'][0])['qualification'];
        $TutorIds = DB::table('qualification_user')
        ->select('user_id')
        ->where(['qualification_id' => (int) $resp])
        ->get();
        $idList= array();
        $TutorList= array();

        $decoded = json_decode($TutorIds, true);

        $tempUser;
        foreach($decoded as $d) {
            foreach($d as $k=>$v) {
                array_push($idList,$v);
        }
        $length = count($idList);
        for ($i = 0; $i < $length; $i++) {
          $tempUser = User::with(['role','qualifications'])->where('id', $idList[$i])->first();
        }
        array_push($TutorList,$tempUser);

    }
        
        return response()->json([

            'tutors' => $TutorList
        ]);
    }


    
}


