import { Component, OnInit } from '@angular/core';
import { SpeechService, Message } from '../speech.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {
  messageDate: Date[] = [];
  messages: Observable<Message[]>;
  formValue: string;
  constructor(public chat: SpeechService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable().pipe(
      scan((acc, val) =>  acc.concat(val)));
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.messageDate.push(new Date());
    const t = new Date();
    t.setSeconds(t.getSeconds() + Math.random() * 10);
    this.messageDate.push(t);
    this.formValue = '';
  }
}
