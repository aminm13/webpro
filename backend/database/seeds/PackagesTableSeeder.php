<?php

use Illuminate\Database\Seeder;
use App\Package;

class PackagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Package::truncate();
        
    
        Package::create(['name'=>'basic','price'=>7800,'nrOfSubjects'=>1,'levelOfEdu'=>'Primary','nextStartingDate'=>'2021-06-2','validity'=>28,'expired'=>false]);
        Package::create(['name'=>'ideal','price'=>9900,'nrOfSubjects'=>2,'levelOfEdu'=>'Primary','nextStartingDate'=>'2021-06-2','validity'=>35,'expired'=>false]);
        Package::create(['name'=>'dynamic','price'=>7800,'nrOfSubjects'=>3,'levelOfEdu'=>'Primary','nextStartingDate'=>'2021-06-2','validity'=>42,'expired'=>false]);
    
        Package::create(['name'=>'group','price'=>2400,'nrOfSubjects'=>1,'levelOfEdu'=>'Preu','nextStartingDate'=>'2021-06-2','validity'=>28,'expired'=>false]);
        Package::create(['name'=>'indivdual','price'=>7990,'nrOfSubjects'=>2,'levelOfEdu'=>'Preu','nextStartingDate'=>'2021-06-2','validity'=>35,'expired'=>false]);
        Package::create(['name'=>'premium','price'=>12900,'nrOfSubjects'=>3,'levelOfEdu'=>'Preu','nextStartingDate'=>'2021-06-2','validity'=>42,'expired'=>false]);

        Package::create(['name'=>'rehersaal','price'=>3500,'nrOfSubjects'=>1,'levelOfEdu'=>'University','nextStartingDate'=>'2021-06-2','validity'=>25,'expired'=>false]);
        Package::create(['name'=>'support','price'=>4999,'nrOfSubjects'=>2,'levelOfEdu'=>'University','nextStartingDate'=>'2021-06-2','validity'=>30,'expired'=>false]);
        Package::create(['name'=>'thesis','price'=>12999,'nrOfSubjects'=>3,'levelOfEdu'=>'University','nextStartingDate'=>'2021-06-2','validity'=>35,'expired'=>false]);
    
    
    }
}
