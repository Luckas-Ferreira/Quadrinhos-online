import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAgendadosComponent } from './show-agendados.component';

describe('ShowAgendadosComponent', () => {
  let component: ShowAgendadosComponent;
  let fixture: ComponentFixture<ShowAgendadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAgendadosComponent]
    });
    fixture = TestBed.createComponent(ShowAgendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
