import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

export class Message {
  constructor(public payload: string, public sender: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  readonly token = environment.dialogflow.pubKey;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {}

  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
               .then(res => {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
               });
  }

  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }
}
