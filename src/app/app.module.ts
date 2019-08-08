import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AllMessageComponent} from './component/all-message/all-message.component';
import {LogInComponent} from './component/log-in/log-in.component';
import {HeaderComponent} from './component/header/header.component';
import {UserListComponent} from './component/user-list/user-list.component';
import {NewMessageComponent} from './component/new-message/new-message.component';
import {GroupviewComponent} from './component/groupview/groupview.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {UserComponent} from './component/user/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllMessageComponent,
    NewMessageComponent,
    LogInComponent,
    UserListComponent,
    HeaderComponent,
    GroupviewComponent,
    SignUpComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
