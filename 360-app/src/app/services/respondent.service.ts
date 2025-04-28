import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  RespondentsRequestDTO, 
  RespondentsResponseDTO 
} from '../models/respondent';

@Injectable({
  providedIn: 'root'
})
export class RespondentService {
  private readonly API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  /**
   * Получить респондентов для теста
   */
  getRespondents(testId: string): Observable<RespondentsResponseDTO> {
    return this.http.get<RespondentsResponseDTO>(`${this.API_URL}/respondent/${testId}`);
  }

  /**
   * Выбрать респондентов для теста
   */
  selectRespondents(testId: string, respondents: RespondentsRequestDTO): Observable<any> {
    return this.http.post(`${this.API_URL}/respondent/${testId}`, respondents);
  }
}
