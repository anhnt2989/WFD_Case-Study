import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LogInComponent} from './component/log-in/log-in.component';
import {GroupviewComponent} from './component/groupview/groupview.component';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {AuthGuard} from './service/auth.guard';


const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'chat', component: GroupviewComponent, canActivate: [AuthGuard]},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
