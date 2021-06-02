import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  


  isCollapsed :boolean = false;

  toggle(){
    this.isCollapsed = !this.isCollapsed
    if(this.isCollapsed){
      document.getElementById('btnCollapse').innerHTML = '<i class="fal fa-times"></i>'
      document.getElementById('btnCollapse').className = 'btn btn-outline-danger btnCollapsed '
    }
    else{
      document.getElementById('btnCollapse').innerHTML = 'Add New Subject'
      document.getElementById('btnCollapse').className = 'btn btn-outline-success btnCollapsed'


    }
  } 
  constructor() { }

  ngOnInit(): void {
    
  }

}
