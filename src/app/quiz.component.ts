import {Component, OnInit} from '@angular/core';
import {QuizService} from './quiz-service';
import {Router} from '@angular/router';
import {IQuizList} from './interfaces/IQuizList';


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
})

export class QuizComponent implements OnInit {
  quizList:IQuizList[] = [];

  constructor(private _quizService:QuizService) {
  }

  ngOnInit():any {
    this.getQuiz();
  }

  getQuiz() {
    this._quizService.getQuizzes().then(
      (quiz) => this.quizList = quiz,
      (error) => console.log(error)
    )
  }
}
