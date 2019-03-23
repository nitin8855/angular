import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JambotronComponent } from './jambotron.component';

describe('JambotronComponent', () => {
  let component: JambotronComponent;
  let fixture: ComponentFixture<JambotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JambotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JambotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
