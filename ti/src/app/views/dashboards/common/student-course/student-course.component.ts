import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.scss']
})
export class StudentCourseComponent implements OnInit {
  tutor_id: any;

  TutorList: any;
  TutorsList: any;
  constructor(private http: HttpClient) { }
  CourseList: any;

  form: FormGroup;

  writeNewReview() {
    this.http.post(`http://localhost:8000/api/filter/writeReview`, this.form.value).subscribe(
      data => {
        console.log(data)
      })
  }



  ngOnInit(): void {

    this.form = new FormGroup({
      student: new FormControl(null, Validators.required),
      tutor: new FormControl(null, Validators.required),
      reviewbyStudent: new FormControl(null, Validators.required),
      starGiven: new FormControl(null, Validators.required),

    });

    const teachersList = [
      'Elahe', 'Elahe2', 'Elahe3', 'Elahe4', 'Elahe5', 'Elahe6'
    ]
    const coursesList = [
      'Physic', 'math', 'algebra', 'chemistry', 'biology', 'advanced physics', 'thermodynamics'
    ]

    this.http.get(`http://localhost:8000/api/filter/getAllReviewsS`).subscribe(
      data => {
        this.CourseList = data;
        // console.log(this.CourseList)
        var i;

        for (i = 0; i < this.CourseList['tutor'].length; i++) {

          const tempTutor = this.CourseList['tutor'][i]
          const tempCourse = this.CourseList['courses']

          console.log()
          console.log(tempCourse[i]['qualification_id'])
          // console.log("br")

          var div = document.getElementById("courses");

          if (div !== null) {
            div.innerHTML += `
            <div class="col-6" 

            <div class="card text-body bg-info mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"><p><small>Tutor: </small> <strong>${teachersList[tempTutor['tutor']]}</strong</p> </h5>
    <h6 class="card-subtitle mb-2 text-muted">
    ${coursesList[tempCourse[i]['qualification_id']]}
    </h6>
    <p class="card-text">
    <div class="progress">
    <div class="progress-bar bg blue darken-2" role="progressbar" style="width: 25%" aria-valuenow="${i * 10}"
        aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p >${19 + i * 5} Days remaining</p>
    </p>

  </div>
</div>
            </div>
            `
          }


        }

      },
      err => {
        console.log(err);
      });


  }

}
