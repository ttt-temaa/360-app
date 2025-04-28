import { AnswerTestModel } from './answer';
import { SkillsTestModel, SkillsResultModel } from './skill';

export interface Evaluation {
}

export interface ResultRequestDTO {
  evaluatedId: number; // ID оцениваемого
  evaluatorId: number; // ID оценивающего
  startTimeStamp: number; // Время начала теста
  endTimeStamp: number; // Время окончания теста
  answers: AnswerTestModel[]; // Ответы на вопросы
  skills: SkillsTestModel[]; // Оценки навыков
}

export interface ResultResponseDTO {
  title: string; // Название теста
  averageResult: number; // Средний результат
  thisResult: number; // Личный результат
  commandResult: number; // Результат команды
  expertResult: number; // Результат экспертов
  results: SkillsResultModel[]; // Результаты по навыкам
  resultComment: string; // Финальный комментарий
}

export interface CommentEditRequestDTO {
  newComment: string; // Новый комментарий
}
