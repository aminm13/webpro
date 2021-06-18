import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-student',
  templateUrl: './assign-student.component.html',
  styleUrls: ['./assign-student.component.scss']
})
export class AssignStudentComponent implements OnInit {
  showStudent: boolean;
  showTutor: boolean;
  showCoordinator: boolean;

  constructor(private http: HttpClient) { }
  TutorList: any;
  TutorsList: any;
  showAdmin = false;
  form: FormGroup;
  isVisible: Boolean = false;
  student_id: number;
  role = JSON.parse(localStorage.getItem('role') || '{}');
  q = JSON.parse(localStorage.getItem('qualification') || '{}');


  assign() {
    this.http.post(`http://localhost:8000/api/filter/assign`, { student: 2, tutor: 4 }).subscribe(
      data => {
        console.log(data)
      })
  }
  ngOnInit(): void {
    if (this.role[0].role_id == 1) {
      this.showStudent = true
    }
    else {
      if (this.role[0].role_id == 2) {
        this.showTutor = true
      }
      else {
        if (this.role[0].role_id == 3) {
          this.showCoordinator = true
        }
        else {
          if (this.role[0].role_id == 5) {
            this.showAdmin = true
          }
        }
      }

    }

    this.form = new FormGroup({
      qulification_id: new FormControl(null, Validators.required),
    });

    this.http.get(`http://localhost:8000/api/filter/getAll`).subscribe(
      data => {
        this.TutorsList = data;
        console.log(this.TutorsList)

      })

    this.http.get(`http://localhost:8000/api/filter/getAllStudents`).subscribe(
      data => {
        this.TutorList = data;
        console.log(this.TutorList['student'][0])
        var i;
        var div = document.getElementById("student");


        if (div !== null) {
          div.innerHTML = ''
          div.innerHTML += `<style>
          .filterContainer{
            margin-top:0;
            width100%;
            height:15hv;
            border-bottom:dotted 1px 	#A9A9A9;
            margin-bottom:1rem;
          }
            .qualification{
              margin-right:0.2rem;
              text-transform: uppercase;
            }
            #tutorName{
              font-size: 18px;
              width: 12rem;
              padding: 0;
              margin-right:0 ;
              margin-left:0 ;
              padding-bottom: 1rem;
          }
          .tutorFilters {
            display: inline-block;
            margin-top: -1rem;
        }
          </style>`
          for (i = 0; i < this.TutorList['student'].length; i++) {
            const tempTutor = this.TutorList['student'][i]
            this.student_id = this.TutorList['student'][i]['id']
            div.innerHTML += ` 
            <div class="filterContainer">
            <div id="tutorName"><strong>${tempTutor['name']}</strong></div>
            <div class="row">
            <div class="col-6">
            <div class="tutorFilters ">
                <div class="row">
                <p>${tempTutor['levelOfEdu']} </p>
              </div>
           `
          }

          div.innerHTML += `</div>`
        }


      },
      err => {
        console.log(err);
      });
  }


}
