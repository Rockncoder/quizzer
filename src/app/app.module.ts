import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent} from './app.component';

import {AboutComponent}        from './about.component';
import {LoginComponent}  from './login.component';
import {QuizComponent}  from './quiz.component';
import {PlayerComponent}  from './player.component';
import {QuizService}         from './quiz-service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    QuizComponent,
    PlayerComponent
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
