import { RespondentModel } from './respondent';

export interface TestViewResponseDTO {
  title: string;
  type: 'SELF' | 'COMMAND' | 'FULL';
  status: 'CREATED' | 'STARTED' | 'ARCHIVED';
  createTimeStamp: number;
  startTimeStamp: number;
  endTimeStamp: number;
  respondents: RespondentModel[];
  questions: QuestionModel[];
  minRespondents: number;
  maxRespondents: number;
  minHighRoleRespondents: number;
  minOtherCourseRespondents: number;
}

export interface QuestionsResponseDTO {
  questions: QuestionModel[];
}

export interface QuestionModel {
  id: string;
  questionText: string;
  skillsIds: number[];
}

export interface TestTitleModel {
  testId: string;
  title: string;
  startTimeStamp: number;
  endTimeStamp: number;
}

export interface TestsResponseDTO {
  nameGroup: string;
  tests: TestTitleModel[];
}

export interface TestMenuResponseDTO {
  title: string;
  isGetRespondents: boolean;
  isSelectRespondents: boolean;
  isCompleteEvaluation: boolean;
  isCompleteEvaluated: boolean;
  isCompeteEvaluator: boolean;
  evaluatedRespondents: TestRespondentTitleModel[];
  evaluatorRespondents: TestRespondentTitleModel[];
  isActiveResult: boolean;
}

export interface TestRespondentTitleModel {
  respondentId: number;
  fullName: string;
  isComplete: boolean;
} 