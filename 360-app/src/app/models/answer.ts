export interface AnswerModel {
  id: number;
  questionId: number;
  respondentId: number;
  answer: string;
}

export interface AnswerRequestDTO {
  questionId: number;
  answer: string;
}

export interface AnswerResponseDTO {
  answer: AnswerModel;
}

export interface AnswersResponseDTO {
  answers: AnswerModel[];
}
