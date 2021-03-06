import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  auth = JSON.parse(localStorage.getItem('user') || '{}');
  role = JSON.parse(localStorage.getItem('role') || '{}');
  q = JSON.parse(localStorage.getItem('qualification') || '{}');


  showStudent: boolean;
  showTutor: boolean;
  showCoordinator: boolean;
  showAdmin: boolean;

  showAdded: boolean = false;

  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type: string = 'bar';
  public chart2Type: string = 'pie';
  public chart3Type: string = 'line';
  public chart4Type: string = 'radar';
  public chart5Type: string = 'doughnut';


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    { data: [50, 40, 60, 51, 56, 55, 40], label: '#1' },
    { data: [28, 80, 40, 69, 36, 37, 110], label: '#2' },
    { data: [38, 58, 30, 90, 45, 65, 30], label: '#3' }
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors: Array<any> = [

  ];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#5b5f62',
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }]
    }
  };

  constructor() {

  }

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
        else {
          if (this.role[0].role_id == 5) {
            this.showAdmin = true
          }
        }
      }

    }

  }



}
