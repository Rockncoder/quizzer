import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent}       from './about.component';
import {LoginComponent}       from './login.component';
import {QuizComponent}       from './quiz.component';
import {PlayerComponent}       from './player.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'player/:id', component: PlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
