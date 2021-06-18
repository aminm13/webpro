// import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  // sendLogin(data) {
  //   const url = `http://localhost:8000/api/auth/login`;
  //   return this.http.post(url, data);
  // }

}
