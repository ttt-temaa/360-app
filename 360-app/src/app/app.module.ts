import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import {SurveyFormComponent} from './admin/survey-form/survey-form.component';
import {EvaluationComponent} from './evaluation/evaluation.component';
import {RespondentSelectionComponent} from './respondents/respondent-selection/respondent-selection.component';
import {ResultsComponent} from './results/results.component';
import {NotificationsComponent} from './notifications/notifications.component';

// Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

// NgRx Store
import {StoreModule} from '@ngrx/store';
import {surveyReducer} from './state/survey.reducer';

const routes: Routes = [
  {path: 'admin', component: AdminPanelComponent},
  {path: 'survey/create', component: SurveyFormComponent},
  {path: 'evaluation', component: EvaluationComponent},
  {path: 'respondent-selection', component: RespondentSelectionComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: '', redirectTo: '/admin', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCardModule,
    StoreModule.forRoot({survey: surveyReducer})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
