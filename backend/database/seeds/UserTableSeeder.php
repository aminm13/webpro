<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;
use App\Qualification;
use App\Package;


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


        $student1Pack = Package::where('name','rehersaal')->first();
        $student2Pack = Package::where('name','basic')->first();

       $student1User = User::create([
        'name' => 'Amin',
        'email' => 'student1@gmail.com',
        'password' => bcrypt('pass'),
        'levelOfEdu' => 'University',
        'dob' => '1996-08-28',
        ]);
        $student2User = User::create([
            'name' => 'Matt',
            'email' => 'student2@gmail.com',
            'password' => bcrypt('pass'),
            'levelOfEdu' => 'Primary',
            'dob' => '2005-08-28',
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

        $student1User->role()->attach($studentRole);
        $student2User->role()->attach($studentRole);

        $tutortUser->role()->attach($tutorRole);
        $coordinatorUser->role()->attach($coordinatorRole);

        $tutortUser->qualifications()->attach($physicsSubject);
        $tutortUser->qualifications()->attach($mathSubject);


        $student1User->packages()->attach($student1Pack);
        $student2User->packages()->attach($student2Pack);
    }
}
