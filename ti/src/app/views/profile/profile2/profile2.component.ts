import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-profile1',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.scss']
})
export class Profile2Component implements OnInit {

  auth = JSON.parse(localStorage.getItem('user') || '{}');
  role = JSON.parse(localStorage.getItem('role') || '{}');
  q = JSON.parse(localStorage.getItem('qualification') || '{}');


  showStudent: boolean;
  showTutor: boolean;
  showCoordinator: boolean;
  showAdded: boolean = false;


  form: FormGroup;

  constructor(private http: HttpClient,
    private router: Router) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      package: new FormControl(null, Validators.required)
    });



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


  upgradePackage() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    this.http.post(`http://localhost:8000/api/auth/updatePackage`, this.form.value, { headers })
      .subscribe((resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        localStorage.setItem('package', 'JSON.stringify(resp.package)');
        this.router.navigate(['dashboards/v1']);
      });
  }

}
