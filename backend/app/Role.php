<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public function users(){
        return $this->hasOne('App\User','role_user');
    }
    public function qualifications(){
        return $this->hasMany('App\Qualification','qualification_user');
    }
    
}
