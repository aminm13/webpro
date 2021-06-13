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
        $advancedPhysicsSubject = Qualification::where('name','advanced physics')->first();
        $bilogySubject= Qualification::where('name','biology')->first();


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
        $tutor1User =  User::create([
            'name' => 'Elahe',
            'email' => 'tutor1@gmail.com',
            'password' => bcrypt('pass'),
            'levelOfEdu' => 'University',
            'dob' => '1996-08-28',
        ]);
        $tutor2User =  User::create([
            'name' => 'Elahe2',
            'email' => 'tutor2@gmail.com',
            'password' => bcrypt('pass'),
            'levelOfEdu' => 'University',
            'dob' => '1996-08-28',
        ]);
        $tutor3User =  User::create([
            'name' => 'Elahe3',
            'email' => 'tutor3@gmail.com',
            'password' => bcrypt('pass'),
            'levelOfEdu' => 'University',
            'dob' => '1996-08-28',
        ]);

        $tutor4User =  User::create([
            'name' => 'Elahe4',
            'email' => 'tutor4@gmail.com',
            'password' => bcrypt('pass'),
            'levelOfEdu' => 'University',
            'dob' => '1996-08-28',
        ]);
        $tutor5User =  User::create([
            'name' => 'Elahe5',
            'email' => 'tutor5@gmail.com',
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

        $tutor1User->role()->attach($tutorRole);
        $tutor2User->role()->attach($tutorRole);
        $tutor3User->role()->attach($tutorRole);
        $tutor4User->role()->attach($tutorRole);
        $tutor5User->role()->attach($tutorRole);

        $coordinatorUser->role()->attach($coordinatorRole);

        $tutor1User->qualifications()->attach($physicsSubject);
        $tutor1User->qualifications()->attach($mathSubject);

        $tutor2User->qualifications()->attach($physicsSubject);
        $tutor2User->qualifications()->attach($advancedPhysicsSubject);


        $tutor3User->qualifications()->attach($advancedPhysicsSubject);
        $tutor3User->qualifications()->attach($bilogySubject);

        $tutor4User->qualifications()->attach($advancedPhysicsSubject);
        $tutor4User->qualifications()->attach($bilogySubject);

        $tutor5User->qualifications()->attach($advancedPhysicsSubject);
        $tutor5User->qualifications()->attach($bilogySubject);


        $student1User->packages()->attach($student1Pack);
        $student2User->packages()->attach($student2Pack);
    }
}
