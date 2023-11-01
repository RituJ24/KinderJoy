import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlphaPracticePage } from './alpha-practice.page';

describe('AlphaPracticePage', () => {
  let component: AlphaPracticePage;
  let fixture: ComponentFixture<AlphaPracticePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlphaPracticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
