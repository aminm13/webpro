import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {


  isCollapsed: boolean = false;

  toggle() {
    this.isCollapsed = !this.isCollapsed

  }
  constructor() { }

  ngOnInit(): void {
  }

}
