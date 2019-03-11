import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimattabledataComponent } from './apimattabledata.component';

describe('ApimattabledataComponent', () => {
  let component: ApimattabledataComponent;
  let fixture: ComponentFixture<ApimattabledataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApimattabledataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApimattabledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
