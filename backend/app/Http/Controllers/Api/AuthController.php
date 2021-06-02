<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequestUser;
use App\Http\Requests\RegisterRequestUser;
use App\User;
use App\Role;
use App\Qualification;
use App\Package;
use DB;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegisterRequestUser $request) {
        $user = new User([
            'email'     => $request->email,
            'name'      => $request->name,
            'password'  => bcrypt($request->password),
        ]);

        $user->save();


        $token = $user->createToken('authToken')->accessToken;

        return response()->json([
            'ok'    => true,
            'user'  => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequestUser $request) {

        $data = $request->only('email', 'password');

        if (!Auth::attempt($data)) {
            return response()->json([
                'ok'    => false,
                'user'  => 'Invalid credentials',
            ]);
        }

        $role=  DB::table('role_user')
        ->select('role_id')
        ->where(['user_id' => Auth::id()])
        ->get();
        

        $package = DB::table('package_user')
        ->select('package_id')
        ->where(['user_id' => Auth::id()])
        ->get();

        $qualification = DB::table('qualification_user')
        ->select('qualification_id')
        ->where(['user_id' => Auth::id()])
        ->get();


        $token = Auth::user()->createToken('authToken')->accessToken;


       
        if($role && $package){
            return response()->json([
                'ok'    => true,
                'user'  => Auth::user(),
                'token' => $token,
                'role'=>$role,
                'package'=>$package,
                'qualification' =>$qualification
            ]);
        }else{
            return response()->json([
                'ok'    => true,
                'user'  => Auth::user(),
                'token' => $token
            ]);
        }

    }

    public function me() {
        return response()->json([
            'ok'    => true,
            'user'  => Auth::user(),
        ]);
    }
}
