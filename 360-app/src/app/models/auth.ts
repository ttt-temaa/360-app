export interface RegisterRequestDTO {
  fullName: string;
  course: number;
  email: string;
  password: string;
}

export interface LoginRequestDTO {
  email: string;
  password: string;
} 