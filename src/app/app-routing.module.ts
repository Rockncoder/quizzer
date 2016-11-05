import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent}       from './about.component';
import {EntryComponent}       from './entry/entry.component';
import {LoginComponent}       from './login.component';
import {QuizComponent}       from './quiz.component';
import {PlayerComponent}       from './player.component';
import { UserComponent } from './user/user.component';
import { ModelComponent } from './model/model.component';


const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'entry', component: EntryComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'player/:id', component: PlayerComponent},
  {path: 'user', component: UserComponent},
  {path: 'model', component: ModelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
