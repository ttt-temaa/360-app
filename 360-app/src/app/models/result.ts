export interface ResultRequestDTO {
  evaluatedId: number;
  evaluatorId: number;
  startTimeStamp: number;
  endTimeStamp: number;
  answers: AnswerTestModel[];
  skills: SkillsTestModel[];
}

export interface ResultResponseDTO {
  title: string;
  averageResult: number;
  thisResult: number;
  commandResult: number;
  expertResult: number;
  results: SkillsResultModel[];
  resultComment: string;
}

export interface AnswerTestModel {
  value: number;
  comment: string;
}

export interface SkillsTestModel {
  skillId: number;
  value: number;
}

export interface SkillsResultModel {
  skillName: string;
  averageEvaluation: number;
  thisEvaluation: number;
  commandEvaluation: number;
  expertEvaluation: number;
  comments: string[];
} 