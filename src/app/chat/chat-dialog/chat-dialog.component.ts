import {Component, OnInit} from '@angular/core';
import {ChatService, Message} from '../chat.service';
import {Observable} from 'rxjs';
import {scan} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  messages: Observable<Message[]>;
  formValue: string;
  res: any;
  showVideos = false;
  showLinks = false;

  constructor(public chat: ChatService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)));
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    const topPos = document.querySelector('#card-body').scrollHeight;
    this.formValue = '';
    document.getElementById('card-body').scrollTop = topPos;
  }

  sanitizeVideo(val) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(val);
  }

  showVideo() {
    this.showVideos = true;
  }

  showLink() {
    this.showLinks = true;
  }

}
