import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTwelvethStateboardComponent } from './student-twelveth-stateboard.component';

describe('StudentTwelvethStateboardComponent', () => {
  let component: StudentTwelvethStateboardComponent;
  let fixture: ComponentFixture<StudentTwelvethStateboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTwelvethStateboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTwelvethStateboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
