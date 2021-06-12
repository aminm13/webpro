
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FiltertutorService } from '../../../services/filtertutor.service';
import { environment } from 'src/environments/environment';
import { stringify } from '@angular/compiler/src/util';
import { IUser } from 'src/app/insterfaces/chat';

@Component({
  selector: 'app-tutor-filter',
  templateUrl: './tutor-filter.component.html',
  styleUrls: ['./tutor-filter.component.css']
})
export class TutorFilterComponent implements OnInit {
  constructor(private filterService: FiltertutorService) { }

  TutorList: IUser[];

  form: FormGroup;
  q = JSON.parse(localStorage.getItem('qualification'));


  filterTutor() {
    const url = `${environment.urlBase}/api/filter/filter`;


    console.log(url)
    this.filterService.filter(url, 6).subscribe(
      data => {
        var i;

        var div = document.getElementById("tutor");
        div.innerHTML = ''
        div.innerHTML += `<div> <p class="alert alert-success" >Selected Tutors</p>`

        console.log('check')
        for (i = 0; i < data['tutors'].length; i++) {
          const tempTutor = data['tutors'][i]
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

      },
      err => {
        console.log(err);
      });
  }

  ngOnInit(): void {


    const allTutorsUrl = `${environment.urlBase}/api/filter/getAll`;
    this.form = new FormGroup({
      qulification_id: new FormControl(null, Validators.required),
    });

    this.filterService.getAll(allTutorsUrl).subscribe(
      data => {
        var i;

        var div = document.getElementById("tutor");

        div.innerHTML = ''
        div.innerHTML += `<div> <p class="alert alert-success" >Selected Tutors</p>`

        for (i = 0; i < data['tutors'].length; i++) {
          const tempTutor = data['tutors'][i]


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

      },
      err => {
        console.log(err);
      });
  }

}
