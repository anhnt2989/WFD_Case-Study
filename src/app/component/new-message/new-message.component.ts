import {Component, OnInit} from '@angular/core';
import {IMessage} from '../../model/message';
import {MessageService} from '../../service/message.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  private message: IMessage = {
    username: '',
    content: '',
    name: '',
    image: '',
    createdTime: ''
  };

  onSubmit(messageText: string) {
    this.message.name = this.userService.loginUser.name;
    this.message.image = this.userService.loginUser.userImg;
    // this.message.createdTime = this.messageService.timeGenerate();
    this.message.content = messageText;
    this.messageService.addMessage(this.message);
    this.messageService.scrollAllMessage();
    // this.messageService.clearContent();
  }

  constructor(private messageService: MessageService, private userService: UserService) {

  }

  ngOnInit() {
  }

}
