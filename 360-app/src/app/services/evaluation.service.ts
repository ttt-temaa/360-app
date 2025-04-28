import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  ResultRequestDTO, 
  ResultResponseDTO,
  CommentEditRequestDTO
} from '../models/evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private readonly API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  /**
   * Получить результаты теста
   */
  getResult(testId: string): Observable<ResultResponseDTO> {
    return this.http.get<ResultResponseDTO>(`${this.API_URL}/result/${testId}`);
  }

  /**
   * Добавить результат теста
   */
  addResult(testId: string, result: ResultRequestDTO): Observable<any> {
    return this.http.post(`${this.API_URL}/result/${testId}`, result);
  }

  /**
   * Изменить комментарий
   */
  editComment(skillIndex: number, commentIndex: number, comment: CommentEditRequestDTO): Observable<any> {
    return this.http.put(
      `${this.API_URL}/result/edit/comment/${skillIndex}/${commentIndex}`,
      comment
    );
  }
}
