import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }

  messageList: IMessage[] = [
    {
      content: 'Good morning!',
      username: 'admin',
      name: 'Chalize Theron',
      // tslint:disable-next-line:max-line-length
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Charlize_Theron_Cannes_2015_2.jpg/300px-Charlize_Theron_Cannes_2015_2.jpg',
      createdTime: ''
    },
    {
      content: 'Good morning!', username: 'admin1', name: 'Julia Robert',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Julia_Roberts_2011_Shankbone_3.JPG', createdTime: ''
    },
    // tslint:disable-next-line:max-line-length
    {
      content: 'Have a good day!', username: 'admin2', name: 'Brad Pitt',
      image: 'https://www.thesun.co.uk/wp-content/uploads/2019/08/NINTCHDBPICT000000761773-1.jpg', createdTime: ''
    },
    // tslint:disable-next-line:max-line-length
    {
      content: 'Damn... it\'s a beautiful day!',
      username: 'admin3',
      name: 'Chris Hemsworth',
      // tslint:disable-next-line:max-line-length
      image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg',
      createdTime: ''
    },
    {
      content: 'Long time no cast a film :( !',
      username: 'admin4',
      name: 'Elizabeth Olsen',
      // tslint:disable-next-line:max-line-length
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Elizabeth_Olsen1_%28cropped%29.jpg/170px-Elizabeth_Olsen1_%28cropped%29.jpg',
      createdTime: ''
    },
    {
      content: 'Hope to see ya soon, Eliza <3 !!',
      username: 'admin5',
      name: 'Channing Tatum',
      // tslint:disable-next-line:max-line-length
      image: 'https://m.media-amazon.com/images/M/MV5BMTc4OTI3Mzg2Nl5BMl5BanBnXkFtZTcwMDAxNTU3OA@@._V1_UX214_CR0,0,214,317_AL_.jpg',
      createdTime: ''
    }
  ];

  addMessage(message: IMessage) {
    this.messageList.push(message);
  }

  // clearContent() {
  //   this.m.content = '';
  // }

  scrollAllMessage() {
    $(document).ready(() => {
      const scrollHeight = document.getElementById('all-message').scrollHeight;
      $('#all-message').scrollTop(scrollHeight);
    });
  }

  // timeGenerate() {
  //   const time = new Date();
  //   const hour = time.getHours();
  //   const min = time.getMinutes();
  //   const sec = time.getSeconds();
  //   const date = time.getDate();
  // }
}
