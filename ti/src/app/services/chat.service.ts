import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Echo from 'laravel-echo';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {
  }

  getSockets(): Echo {

    // this.echo = new Echo({
    //   broadcaster: "pusher",
    //   key: `1234ASD`,
    //   forceTLS: true,
    //   authEndpoint: `http://localhost:8000/api/broadcasting/auth`,
    //   auth: {
    //     headers: {
    //       "X-CSRF-Token": `IsRFQc1WjJ6WEmEQxR2QyVaMqR3C64eGh40jeOxy`,
    //       Authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    //   },
    //   wsPort: 6001,

    // });

    // this.echo.private.bind

    // console.log(this.echo.socketId())
    // return this.echo
    return new Echo({
      broadcaster: 'pusher',
      key: `1234ASD`,
      wsHost: `localhost:8000`,
      cluster: `mt1`,
      forceTLS: true,
      csrfToken: `IsRFQc1WjJ6WEmEQxR2QyVaMqR3C64eGh40jeOxy`,
      authEndpoint: `http://localhost:8000/api/broadcasting/auth`,
      auth: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "X-CSRF-Token": `IsRFQc1WjJ6WEmEQxR2QyVaMqR3C64eGh40jeOxy`,

        }
      },
      wsPort: 6001,
      disableStats: false,
      enabledTransports: ['ws'],
      namespace: 'App.Events'
    });
  }

  sendMessage(message: string, socketsID) {
    const url = `${environment.urlBase}/api/message/send`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'X-Socket-ID': socketsID
    });
    const data = {
      message
    };


    return this.http.post(url, data, { headers });
  }

  sendDirectMessage(message: string, to: number, socketsID) {

    const url = `${environment.urlBase}/api/message/sendDM`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'X-Socket-ID': socketsID
    });
    const data = {
      message,
      to
    };

    return this.http.post(url, data, { headers });
  }


}
