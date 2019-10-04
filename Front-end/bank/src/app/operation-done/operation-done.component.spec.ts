import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDoneComponent } from './operation-done.component';

describe('OperationDoneComponent', () => {
  let component: OperationDoneComponent;
  let fixture: ComponentFixture<OperationDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
