import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';
import {DomSanitizer} from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})

export class Message {
  constructor(public content: string, public sentBy: string) {
  }
}

export class ChatService {
  public sanitizer: DomSanitizer;
  readonly token = environment.dialogflow.knowledgeBot;
  readonly client = new ApiAiClient({accessToken: this.token});
  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {
  }

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    return this.client.textRequest(msg)
      .then(res => {
        let speech = res.result.fulfillment.speech;
        const links = res.result.fulfillment;
        if (speech.includes('https')) {
          speech = speech.split('^');
          // speech = res.result.fulfillment.messages;
          // for (let i = 0; i < 12; i++) {
          //   const val = speech[i];
          //   if (speech[i].includes('youtube')) {
          //     speech[i] = this.sanitizeVideo(val);
          //   }
          // }
        }
        const botMessage = new Message(speech, 'bot');
        console.log(botMessage);
        this.update(botMessage);
      });
  }

  sanitizeVideo(val) {
    console.log(val);
    // return this.sanitizer.bypassSecurityTrustResourceUrl(val);
  }
}
