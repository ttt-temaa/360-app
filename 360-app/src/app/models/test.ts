import { QuestionModel } from './question';
import { RespondentModel } from './respondent';

export interface TestModel {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  questions: QuestionModel[];
  respondents: RespondentModel[];
}

export interface TestRequestDTO {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  questionIds: number[];
  respondentIds: number[];
}

export interface TestResponseDTO {
  test: TestModel;
}

export interface TestsResponseDTO {
  tests: TestModel[];
} 