<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseTutorStudentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_tutor_studnet', function (Blueprint $table) {
            $table->id();
            $table->integer('tutor')->unasigned();
            $table->integer('student')->unasigned();
            $table->string('reviewbyStudent')->nullable();

            $table->timestamps();
        }); 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_tutor_studnet');
    }
}
