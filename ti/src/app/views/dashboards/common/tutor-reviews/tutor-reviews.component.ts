import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tutor-reviews',
  templateUrl: './tutor-reviews.component.html',
  styleUrls: ['./tutor-reviews.component.scss']
})
export class TutorReviewsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ReviewList: any;

  form: FormGroup;
  isVisible: Boolean = false;
  student_id: number;

  ngOnInit(): void {

    this.form = new FormGroup({
      qulification_id: new FormControl(null, Validators.required),
    });


    this.http.get(`http://localhost:8000/api/filter/getAllReviewsT`).subscribe(
      data => {
        this.ReviewList = data;
        console.log(this.ReviewList['authors'])
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
          for (i = 0; i < this.ReviewList['authors'].length; i++) {
            const tempTutor = this.ReviewList['reviews'][i]
            this.student_id = this.ReviewList['authors'][i]['student']
            div.innerHTML += ` 
            <div class="filterContainer">

            <div id="tutorName"><p>From - Amin${this.student_id}  </p></div>
            <div class="row">
            <div class="col-6">
            <div class="tutorFilters ">
            Summary:
            <p>${tempTutor['reviewbyStudent']}
            </p>
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


