import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumLearnPage } from './num-learn.page';

describe('NumLearnPage', () => {
  let component: NumLearnPage;
  let fixture: ComponentFixture<NumLearnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NumLearnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
