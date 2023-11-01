import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumPractPage } from './num-pract.page';

describe('NumPractPage', () => {
  let component: NumPractPage;
  let fixture: ComponentFixture<NumPractPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NumPractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
