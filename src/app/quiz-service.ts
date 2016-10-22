import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {IQuizList} from './interfaces/IQuizList';
import {IQuizService} from './interfaces/IQuizService';

// const baseUrl = "api/";
// const quizzesEndPoint = "quizzes";
// const quizEndPoint = `quiz/`;

@Injectable()
export class QuizService implements IQuizService {
  private heroesUrl = 'app/quiz';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getQuizzes(): Promise<IQuizList[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as IQuizList[])
      .catch(this.handleError);
  }

  getQuiz(id: number): Promise<IQuizList> {
    return this.getQuizzes()
      .then(quizzes => quizzes.find(quiz => quiz._id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  // getQuizzes():Promise<IQuizList[]> {
  //   return this.http.get(`${baseUrl}${quizzesEndPoint}`)
  //     .toPromise()
  //     .then(this.extractData)
  //     .catch(this.handleError);
  // }

  // getQuiz(id:number): Promise<IQuizList> {
  //   return this.http.get(`${baseUrl}${quizEndPoint}${id}`)
  //     .toPromise()
  //     .then(this.extractData)
  //     .catch(this.handleError);
  // }


  // private extractData(res:Response) {
  //   if (res.status < 200 || res.status >= 300) {
  //     throw new Error('Bad response status: ' + res.status);
  //   }
  //   return res.json() || {};
  // }

  // private handleError(error:any) {
  //   let errMsg = error.message || 'Server error';
  //   console.error(errMsg);
  //   throw new Error(errMsg);
  // }
}
