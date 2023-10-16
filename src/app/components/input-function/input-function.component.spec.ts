import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFunctionComponent } from './input-function.component';

describe('InputFunctionComponent', () => {
  let component: InputFunctionComponent;
  let fixture: ComponentFixture<InputFunctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFunctionComponent]
    });
    fixture = TestBed.createComponent(InputFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
