import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.scss']
})
export class StudentCourseComponent implements OnInit {
  tutor_id: any;

  constructor(private http: HttpClient) { }
  CourseList: any;

  form: FormGroup;

  writeNewReview() {
    this.http.post(`http://localhost:8000/api/filter/writeReview`, { student: 2, tutor: 3, text: "check check check" }).subscribe(
      data => {
        console.log(data)
      })
  }
  ngOnInit(): void {


    // this.http.get(`http://localhost:8000/api/filter/getAllReviewsS`).subscribe(
    //   data => {
    //     this.CourseList = data;
    //     console.log(this.CourseList)
    //     var i;
    //     var div = document.getElementById("tutor");
    //     if (div !== null) {
    //       div.innerHTML = ''
    //       div.innerHTML += `<style>
    //       .filterContainer{
    //         margin-top:0;
    //         width100%;
    //         height:15hv;
    //         border-bottom:dotted 1px 	#A9A9A9;
    //         margin-bottom:1rem;
    //       }
    //         .qualification{
    //           margin-right:0.2rem;
    //           text-transform: uppercase;
    //         }
    //         #tutorName{
    //           font-size: 18px;
    //           width: 12rem;
    //           padding: 0;
    //           margin-right:0 ;
    //           margin-left:0 ;
    //           padding-bottom: 1rem;
    //       }
    //       .tutorFilters {
    //         display: inline-block;
    //         margin-top: -1rem;
    //     }
    //       </style>`
    //       for (i = 0; i < this.CourseList['courses'].length; i++) {
    //         // const tempTutor = this.CourseList['courses'][i]
    //         // this.tutor_id = this.CourseList['reviews'][i]['id']
    //         div.innerHTML += ` 
    //         <div class="filterContainer">

    //         <div id="tutorName"></div>
    //         <div class="row">
    //         <div class="col-6">
    //         <div class="tutorFilters ">
    //        `
    //       }

    //       div.innerHTML += `</div>`
    //     }


    //   },
    //   err => {
    //     console.log(err);
    //   });


  }

}
