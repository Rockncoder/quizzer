import {IQuiz} from './IQuiz';

export interface IQuizList {
  title: string;
  tagLine: string;
  added: string;
  rating: number;
  _id: number;
  tags: string[];
  quiz: IQuiz;
}
