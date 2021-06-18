import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { IUser } from '../../../../interfaces/chat';

@Component({
  selector: 'app-tutor-filter',
  templateUrl: './tutor-filter.component.html',
  styleUrls: ['./tutor-filter.component.scss']
})
export class TutorFilterComponent implements OnInit {

  constructor(private http: HttpClient) { }
  TutorList: any;
  form: FormGroup;

  q = JSON.parse(localStorage.getItem('qualification') || '{}');


  filterTutor() {


    this.http.post(`http://localhost:8000/api/filter/filter`, { qualification: 6 }).subscribe(
      data => {
        console.log
        this.TutorList = data;
        var i;
        console.log(data)
        var div = document.getElementById("tutor");
        if (div !== null) {
          div.innerHTML = ''
          div.innerHTML += `<div> <p class="alert alert-success" >Selected Tutors</p>`

          console.log('check')
          for (i = 0; i < this.TutorList['tutors'].length; i++) {
            const tempTutor = this.TutorList['tutors'][i]
            console.log(tempTutor)
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
            </style>
            <div class="filterContainer">
            <div id="tutorName">${tempTutor['name']}</div>
            <div class="row">
            <div class="col-6">
            <div class="row float-right">
            <div class="tutorFilters  ">
                <div class="row">
                    <div class="col-6 qualification"><span class="badge badge-secondary"><i class="fas fa-divide">${tempTutor['qualifications'][1]['name']}</i></span></div>
                    <div class="col-6 qualification"><span class="badge badge-primary"><i class="fas fa-cogs">${tempTutor['qualifications'][0]['name']}</i></span></div>
                </div>
            </div>
        </div>
            </div>
  
  
            <div class="col-6">
            
            <div class="row float-right">
            <div class="tutorFilters ">
                <div class="row">
                    <div class="col-1"><span class="badge badge-light"><i class="fal fa-school"></i></span></div>
                    <div class="col-1"><span class="badge badge-light"><i class="far fa-tachometer-fastest"></i>></span>
                    </div>
  
                </div>
            </div>
        </div>
            
            </div>
            
            
            </div>
            
            
  
  
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
  ngOnInit(): void {

    this.form = new FormGroup({
      qulification_id: new FormControl(null, Validators.required),
    });
    this.http.get(`http://localhost:8000/api/filter/getAll`).subscribe(
      data => {
        this.TutorList = data;
        console.log(this.TutorList['tutors'])
        var i;
        var div = document.getElementById("tutor");

        if (div !== null) {
          div.innerHTML = ''
          for (i = 0; i < this.TutorList['tutors'].length; i++) {
            const tempTutor = this.TutorList['tutors'][i]


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
            </style>
            <div class="filterContainer">
            <div id="tutorName">${tempTutor['name']}</div>
            <div class="row">
            <div class="col-6">
            <div class="row float-right">
            <div class="tutorFilters  ">
                <div class="row">
                    <div class="col-6 qualification"><span class="badge badge-secondary"><i class="fas fa-divide">${tempTutor['qualifications'][1]['name']}</i></span></div>
                    <div class="col-6 qualification"><span class="badge badge-primary"><i class="fas fa-cogs">${tempTutor['qualifications'][0]['name']}</i></span></div>
                </div>
            </div>
        </div>
            </div>


            <div class="col-6">

            <div class="row float-right">
            <div class="tutorFilters ">
                <div class="row">
                    <div class="col-1"><span class="badge badge-light"><i class="fal fa-school"></i></span></div>
                    <div class="col-1"><span class="badge badge-light"><i class="far fa-tachometer-fastest"></i>></span>
                    </div>

                </div>
            </div>
        </div>

            </div>


            </div>




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

