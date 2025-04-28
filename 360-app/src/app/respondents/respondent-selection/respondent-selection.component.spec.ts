import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondentSelectionComponent } from './respondent-selection.component';

describe('RespondentSelectionComponent', () => {
  let component: RespondentSelectionComponent;
  let fixture: ComponentFixture<RespondentSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespondentSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
