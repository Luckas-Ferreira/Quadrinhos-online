import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuandrinhosComponent } from './show-quandrinhos.component';

describe('ShowQuandrinhosComponent', () => {
  let component: ShowQuandrinhosComponent;
  let fixture: ComponentFixture<ShowQuandrinhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowQuandrinhosComponent]
    });
    fixture = TestBed.createComponent(ShowQuandrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
