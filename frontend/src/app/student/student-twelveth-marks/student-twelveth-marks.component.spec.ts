import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTwelvethMarksComponent } from './student-twelveth-marks.component';

describe('StudentTwelvethMarksComponent', () => {
  let component: StudentTwelvethMarksComponent;
  let fixture: ComponentFixture<StudentTwelvethMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTwelvethMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTwelvethMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
