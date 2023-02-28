import { Component } from '@angular/core';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  newMessage = ''
  messageList: string[] = []

  constructor (private messagingService: MessagingService) {}

  ngOnInit(){
    this.messagingService.getNewMessage().subscribe((message:string)=>{
      this.messageList.push(message)
    })
  }

  sendMessage() {
    this.messagingService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
