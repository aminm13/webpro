<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Qualification extends Model
{
    public function role(){
        return $this->hasOne('App\Role');
    }
    public function qualification(){
        return $this->belongsToMany('App\User');
    }
}
