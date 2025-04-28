import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  SkillEntity, 
  SkillRequestDTO 
} from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private readonly API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  /**
   * Получить все навыки
   */
  getSkills(): Observable<SkillEntity[]> {
    return this.http.get<SkillEntity[]>(`${this.API_URL}/skill/skills`);
  }

  /**
   * Добавить один навык
   */
  addSkill(skill: SkillRequestDTO): Observable<SkillEntity> {
    return this.http.post<SkillEntity>(`${this.API_URL}/skill/skill`, skill);
  }

  /**
   * Добавить несколько навыков
   */
  addSkills(skills: SkillRequestDTO[]): Observable<SkillEntity[]> {
    return this.http.post<SkillEntity[]>(`${this.API_URL}/skill/skills`, skills);
  }
} 