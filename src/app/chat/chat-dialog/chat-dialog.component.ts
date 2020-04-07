import {Component, OnInit} from '@angular/core';
import {ChatService, Message} from '../chat.service';
import {Observable} from 'rxjs';
import {scan} from 'rxjs/operators';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  messages: Observable<Message[]>;
  formValue: string;
  res: any;

  constructor(public chat: ChatService) {
  }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)));
  }

  sendMessage() {
    console.log('hello');
    this.chat.converse(this.formValue);
    const topPos = document.querySelector('#card-body').scrollHeight;
    console.log(topPos);
    this.formValue = '';
    document.getElementById('card-body').scrollTop = topPos;

  }

}
