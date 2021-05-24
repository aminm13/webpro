<?php

use Illuminate\Database\Seeder;
use App\Role;
use App\Qualification;


class QualificationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Qualification::truncate();

        $physicsSubject = Qualification::create(['name' => 'physics']);
        $mathSubject= Qualification::create(['name' => 'math']);
        $algebraSubject = Qualification::create(['name' => 'algebra']);
        $chemistrySubject = Qualification::create(['name' => 'chemistry']);
        $bilogySubject = Qualification::create(['name' => 'biology']);
        $aPhysicsSubject = Qualification::create(['name' => 'advanced physics']);
        $calculusSubject = Qualification::create(['name' => 'calculus']);
        $aAlgebraSubject = Qualification::create(['name' => 'advanced algebra']);
        $thermodynamicsSubject = Qualification::create(['name' => 'thermodynamics']);
        
    }
}
