import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import Echo from 'laravel-echo';
import { IUser, IMessage } from '../insterfaces/chat';
import { ChatService } from '../services/chat.service';
import { scrollTo } from 'scroll-js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  echo: Echo

  inputMessage: string;

  messages: IMessage[] = [];

  userList: IUser[] = [];

  auth: IUser = JSON.parse(localStorage.getItem('user'));

  constructor(
    private chatService: ChatService,
    private http: HttpClient
  ) {

    this.echo = chatService.getSockets();
  }

  ngOnInit(): void {




    console.log(this.echo.socketId())
    this.echo.join('channel-chat')
      .here((users) => {
        this.userList = users;
        console.log("user list" + this.userList)
      })
      .joining((user) => {
        this.userList.push(user);
      })
      .leaving((user) => {
        this.userList = this.userList.filter((userL) => {
          return user.id !== userL.id;
        });
      });

    this.echo.private("channel-chat")
      .listen('ChatEvent', (resp) => {
        const message: IMessage = {
          message: resp.message,
          me: false,
          from: resp.from
        };
        this.messages.push(message);
        console.log('listening')
      });



  }



  sendMessage() {
    const sockets = '900579440.177411632';

    this.chatService.sendMessage(this.inputMessage, sockets)
      .subscribe((resp: any) => {
        const message: IMessage = {
          message: this.inputMessage,
          me: true,
          from: this.auth.name
        };
        console.log(message)

        console.log(resp)
        this.inputMessage = '';
        this.messages.push(message);
        console.log(this.userList)
        console.log(this.messages)
        this.scrollBottom();
      });

  }

  scrollBottom() {
    const containerScroll = window.document.getElementById('scrollContainer');
    const newTop = containerScroll.scrollHeight;
    scrollTo(containerScroll, { top: newTop });
  }

}
