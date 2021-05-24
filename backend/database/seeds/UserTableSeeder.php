<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;
use App\Qualification;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        
        $studentRole = Role::where('name','student')->first();
        $tutorRole = Role::where('name','tutor')->first();
        $coordinatorRole = Role::where('name','coordinator')->first();
        $parettRole = Role::where('name','parent')->first();
        $salesmanRole = Role::where('name','salesman')->first();

        $physicsSubject = Qualification::where('name','physics')->first();
        $mathSubject= Qualification::where('name','math')->first();


       $studentUser = User::create([
        'name' => 'Amin',
        'email' => 'student1@gmail.com',
        'password' => bcrypt('pass'),
        'levelOfEdu' => 'University',
        'dob' => '1996-08-28',
        ]);
        $tutortUser =  User::create([
            'name' => 'Elahe',
            'email' => 'tutor1@gmail.com',
            'password' => bcrypt('pass'),
            'levelOfEdu' => 'University',
            'dob' => '1996-08-28',
        ]);
        $coordinatorUser = User::create([
            'name' => 'John',
            'email' => 'coordinator1@gmail.com',
            'password' => bcrypt('pass'),
            'levelOfEdu' => 'University',
            'dob' => '1996-08-28',
        ]);

        $studentUser->role()->attach($studentRole);
        $tutortUser->role()->attach($tutorRole);
        $coordinatorUser->role()->attach($coordinatorRole);

        $tutortUser->qualifications()->attach($physicsSubject);
        $tutortUser->qualifications()->attach($mathSubject);
    }
}
