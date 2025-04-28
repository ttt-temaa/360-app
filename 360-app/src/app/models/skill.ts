export interface SkillModel {
  id: number;
  name: string;
  description: string;
}

export interface SkillRequestDTO {
  name: string;
  description: string;
}

export interface SkillResponseDTO {
  skill: SkillModel;
}

export interface SkillsResponseDTO {
  skills: SkillModel[];
}

export interface SkillsTestModel {
  skillId: number; // ID навыка
  value: number; // Значение оценки
}

export interface SkillsResultModel {
  skillName: string; // Название навыка
  averageEvaluation: number; // Средняя оценка
  thisEvaluation: number; // Личная оценка
  commandEvaluation: number; // Оценка команды
  expertEvaluation: number; // Оценка эксперта
  comments: string[]; // Комментарии
}
