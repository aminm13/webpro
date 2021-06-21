import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor() { }
  role = JSON.parse(localStorage.getItem('role') || '{}');
  showStudent: boolean;
  showTutor: boolean;
  showCoordinator: boolean;
  showAdmin = false;

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

  }
}