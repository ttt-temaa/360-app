import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultRequestDTO, ResultResponseDTO } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private apiUrl = 'http://localhost:8080/result';

  constructor(private http: HttpClient) {}

  getResult(testId: string): Observable<ResultResponseDTO> {
    return this.http.get<ResultResponseDTO>(`${this.apiUrl}/${testId}`);
  }

  addResult(testId: string, result: ResultRequestDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/${testId}`, result);
  }

  editComment(skillIndex: number, commentIndex: number, newComment: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/edit/comment/${skillIndex}/${commentIndex}`, { newComment });
  }
} 