<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Qualification extends Model
{
    public function role(){
        return $this->hasOne('App\Role','qualification_user');
    }
    public function qualification(){
        return $this->belongsToMany('App\User','qualification_user');
    }
}
