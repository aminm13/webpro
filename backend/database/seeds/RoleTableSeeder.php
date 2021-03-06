<?php

use Illuminate\Database\Seeder;
use App\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::truncate();
        Role::create(['name' => 'student']);
        Role::create(['name' => 'tutor']);
        Role::create(['name' => 'coordinator']);
        Role::create(['name' => 'parent']);
        Role::create(['name' => 'salesman']);
    }
}
