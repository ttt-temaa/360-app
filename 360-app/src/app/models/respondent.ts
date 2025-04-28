export interface RespondentModel {
  id: number;
  fullName: string;
  email: string;
  role: string;
  course: string;
}

export interface RespondentRequestDTO {
  fullName: string;
  email: string;
  role: string;
  course: string;
}

export interface RespondentResponseDTO {
  respondent: RespondentModel;
}

export interface RespondentsResponseDTO {
  respondents: RespondentModel[];
}

export interface TestRespondentTitleModel {
  respondentId: number;
  fullName: string;
  isComplete: boolean;
}
