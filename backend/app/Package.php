<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    //
    public function user(){
        return $this->belongsToMany('App\User','package_user');
    }
}
