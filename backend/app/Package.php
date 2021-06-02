<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    //
    public function qualification(){
        return $this->belongsToMany('App\User');
    }
}
