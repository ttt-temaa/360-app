import { SkillRequestDTO } from './skill';
import { QuestionModel } from './question';
import { RespondentModel } from './respondent';

export interface SurveyModel {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  questions: QuestionModel[];
  respondents: RespondentModel[];
}

export interface SurveyRequestDTO {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  questionIds: number[];
  respondentIds: number[];
}

export interface SurveyResponseDTO {
  survey: SurveyModel;
}

export interface SurveysResponseDTO {
  surveys: SurveyModel[];
}
