import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {

  constructor(private http: HttpClient) { }

  

  sendUpgrade(data) {
    const url = `${ environment.urlBase }/api/auth/login`;
    return this.http.post(url, data);
  }
}
