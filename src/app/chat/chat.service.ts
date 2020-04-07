import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';
import {delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class Message {
  constructor(public content: string, public sentBy: string) {
  }
}

export class ChatService {
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
          console.log('hello');
          speech = speech.split(',');
        }
        const botMessage = new Message(speech, 'bot');
        console.log(botMessage);
        this.update(botMessage);
      });
  }

}
