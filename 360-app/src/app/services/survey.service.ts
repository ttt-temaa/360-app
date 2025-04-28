import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  TestRequestDTO, 
  TestsResponseDTO, 
  TestResponseDTO, 
  TestMenuResponseDTO,
  TestViewResponseDTO,
  TestStatusRequestDTO
} from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private readonly API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  /**
   * Получить все тесты
   */
  getTests(): Observable<TestsResponseDTO> {
    return this.http.get<TestsResponseDTO>(`${this.API_URL}/test`);
  }

  /**
   * Создать новый тест
   */
  createTest(testData: TestRequestDTO): Observable<any> {
    return this.http.post(`${this.API_URL}/test`, testData);
  }

  /**
   * Получить тест по ID
   */
  getTest(testId: string, evaluatedId: number): Observable<TestResponseDTO> {
    return this.http.get<TestResponseDTO>(`${this.API_URL}/test/${testId}/${evaluatedId}`);
  }

  /**
   * Получить меню теста
   */
  getTestMenu(testId: string): Observable<TestMenuResponseDTO> {
    return this.http.get<TestMenuResponseDTO>(`${this.API_URL}/test/menu/${testId}`);
  }

  /**
   * Получить тест для администратора
   */
  getTestAdmin(testId: string): Observable<TestViewResponseDTO> {
    return this.http.get<TestViewResponseDTO>(`${this.API_URL}/admin/test/${testId}`);
  }

  /**
   * Обновить статус теста
   */
  updateTestStatus(testId: string, status: TestStatusRequestDTO): Observable<any> {
    return this.http.put(`${this.API_URL}/admin/status/${testId}`, status);
  }
}
