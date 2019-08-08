import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList: IMessage[] = [
    {content: 'Good morning!', username: 'admin', name: 'Chalize Theron', image: '', createdTime: ''},
    {content: 'Good morning!', username: 'admin1', name: 'Julia Robert', image: '', createdTime: ''},
    {content: 'Have a good day!', username: 'admin2', name: 'Brad Pitt', image: '', createdTime: ''},
    {content: 'Damn... it\'s a beautiful day!', username: 'admin3', name: 'Chris Hemsworth', image: '', createdTime: ''},
    {content: 'Long time no cast a film :( !', username: 'admin4', name: 'Elizabeth Olsen', image: '', createdTime: ''},
    {content: 'Hope to see ya soon, Eliza <3 !!', username: 'admin5', name: 'Channing Tatum', image: '', createdTime: ''}
  ];

  addMessage(message: IMessage) {
    this.messageList.push(message);
  }

  scrollAllMessage() {
    $(document).ready(() => {
      const scrollHeight = document.getElementById('all-message').scrollHeight;
      $('#all-message').scrollTop(scrollHeight);
      console.log(scrollHeight);
    });
  }

  constructor() {
  }
}
