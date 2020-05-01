import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ChatService, Message} from '../chat/chat.service';
import {scan} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadComponent = false;
  isCollapsed :boolean = true;
  messages: Observable<Message[]>;

  constructor(private router: Router, public chat: ChatService, private sanitizer: DomSanitizer) { }

  openChatBot() {
     this.loadComponent = true;
    // this.router.navigate(['/chat'])
    //   .then(success => console.log('navigation success?' , success))
    //   .catch(console.error);
  }
  ngOnInit() {
    this.messages = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)));
    console.log('messages', this.messages);
  }

  sanitizeVideo(value) {
    console.log('value', value);
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
  toggle(){
    this.isCollapsed = !this.isCollapsed
    console.log(this.isCollapsed)
  } 
}
