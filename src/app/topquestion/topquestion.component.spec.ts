import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopquestionComponent } from './topquestion.component';

describe('TopquestionComponent', () => {
  let component: TopquestionComponent;
  let fixture: ComponentFixture<TopquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
