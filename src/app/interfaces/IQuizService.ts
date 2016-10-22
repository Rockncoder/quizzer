import {IQuizList} from './IQuizList';

export interface IQuizService {
  getQuizzes(): Promise<IQuizList[]>;
  getQuiz(id: number): Promise<IQuizList>;
}
