import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestViewResponseDTO, QuestionsResponseDTO } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) {}

  getTest(testId: string): Observable<TestViewResponseDTO> {
    return this.http.get<TestViewResponseDTO>(`${this.apiUrl}/test/${testId}`);
  }

  getQuestions(): Observable<QuestionsResponseDTO> {
    return this.http.get<QuestionsResponseDTO>(`${this.apiUrl}/questions`);
  }

  updateTestStatus(testId: string, status: 'CREATED' | 'STARTED' | 'ARCHIVED'): Observable<any> {
    return this.http.put(`${this.apiUrl}/status/${testId}`, { status });
  }
} 