import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeForfaitsPaysComponent } from './liste-forfaits-pays.component';

describe('ListeForfaitsPaysComponent', () => {
  let component: ListeForfaitsPaysComponent;
  let fixture: ComponentFixture<ListeForfaitsPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeForfaitsPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeForfaitsPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
