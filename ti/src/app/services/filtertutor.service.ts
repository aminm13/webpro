import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiltertutorService {
  constructor(private http: HttpClient) { }


  getAll(url) {
    return this.http.get(url);
  }

  filter(url, qualification: number) {

    const data = {
      qualification,
    };
    return this.http.post(url, data);
  }
}
