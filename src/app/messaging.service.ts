import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root',
})
export class MessagingService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('http://localhost:3000');

  public sendMessage(message: any) {
    console.log('sendMessage: ', message)
    this.socket.emit('sendMessage', message);
  }

  public getNewMessage = () => {
    this.socket.on('recieveMessage', (message) =>{
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };
}