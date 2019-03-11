import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JmattabledataComponent } from './jmattabledata.component';

describe('JmattabledataComponent', () => {
  let component: JmattabledataComponent;
  let fixture: ComponentFixture<JmattabledataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JmattabledataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JmattabledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
