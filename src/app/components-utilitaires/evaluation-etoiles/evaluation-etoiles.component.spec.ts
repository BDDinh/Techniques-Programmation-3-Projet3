import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationEtoilesComponent } from './evaluation-etoiles.component';

describe('EvaluationEtoilesComponent', () => {
  let component: EvaluationEtoilesComponent;
  let fixture: ComponentFixture<EvaluationEtoilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationEtoilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationEtoilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
