import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }


  login() {

    this.http.post(`http://localhost:8000/api/auth/login`, this.form.value)
      .subscribe((resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        localStorage.setItem('role', JSON.stringify(resp.role));

        localStorage.setItem('qualification', JSON.stringify(resp.qualification));

        localStorage.setItem('package', JSON.stringify(resp.package));
        this.router.navigate(['dashboards/v1']);
      });
  }
}
