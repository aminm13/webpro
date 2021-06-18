import { Component, OnInit } from '@angular/core';
import { IUser, IMessage } from '../../insterfaces/chat';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  auth = JSON.parse(localStorage.getItem('user'));
  role = JSON.parse(localStorage.getItem('role'));
  q = JSON.parse(localStorage.getItem('qualification'));

  showStudent: boolean;
  showTutor: boolean;
  showCoordinator: boolean;
  showAdded: boolean = false;



  addStudent() {
    this.showAdded = true;
  }

  addQualification() {

  }

  constructor() { }

  ngOnInit() {

    console.log(this.role[0].role_id)



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
      }

    }

  }



}
