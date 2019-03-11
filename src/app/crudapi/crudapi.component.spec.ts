import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudapiComponent } from './crudapi.component';

describe('CrudapiComponent', () => {
  let component: CrudapiComponent;
  let fixture: ComponentFixture<CrudapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
