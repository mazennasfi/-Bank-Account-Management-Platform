import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOperationComponent } from './pre-operation.component';

describe('PreOperationComponent', () => {
  let component: PreOperationComponent;
  let fixture: ComponentFixture<PreOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
