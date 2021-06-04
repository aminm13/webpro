<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Events\FilterTutorEvent;
use Illuminate\Http\Request;
use App\Role;
use App\User;
use App\Qualification;

use DB;

class FilterController extends Controller
{
    
    
    public function getAll() {
        
        return response()->json([
            'tutors' => User::with(['role','qualifications'])->whereHas('role', function ($query) {
                $query->where('role_id', 2);
            })
            ->get()
        ]);
    }


    public function filter(Request $request) {
        $data = $request->only(['qualification']);
        // event(new FilterTutorEvent($data));


        $resp = $request->only(['qualification'][0])['qualification'];


        // $this->$role_id = $data['qualification'][0];
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
                // $tempUser = User::find((int)$idList[0])->first();
                // array_push($TutorList,$tempUser);

        }


        // $tutor4Id = $idList[1];
        // foreach ($idList as $id) {
        //     $tempUser = User::find($id)->first();
        //     array_push($TutorList,$tempUser);
        // }

        $length = count($idList);
        for ($i = 0; $i < $length; $i++) {
          $tempUser = User::with(['role','qualifications'])->where('id', $idList[$i])->first();
        }
        array_push($TutorList,$tempUser);

        // $tutor4 = User::find($tutor4Id)->first(); 
    }


        
        // @foreach($locations['country'] as $location)
        // {{ $location->country }}
        // @endforeach
        // // foreach()
        // // $TutorList =

        
        return response()->json([

            'tutors' => $TutorList
        ]);
    }

}


