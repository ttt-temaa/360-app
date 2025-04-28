export interface QuestionTestModel {
  questionText: string; // Текст вопроса
  skillsIds: number[]; // ID связанных навыков
}

export interface QuestionModel {
  id: number;
  text: string;
  type: 'TEXT' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
  options: string[];
  required: boolean;
}

export interface QuestionsResponseDTO {
  questions: QuestionModel[]; // Список вопросов
}

export interface QuestionRequestDTO {
  text: string;
  type: 'TEXT' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
  options: string[];
  required: boolean;
}

export interface QuestionResponseDTO {
  question: QuestionModel;
}
