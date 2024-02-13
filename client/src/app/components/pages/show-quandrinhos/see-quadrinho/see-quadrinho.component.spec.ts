import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeQuadrinhoComponent } from './see-quadrinho.component';

describe('SeeQuadrinhoComponent', () => {
  let component: SeeQuadrinhoComponent;
  let fixture: ComponentFixture<SeeQuadrinhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeQuadrinhoComponent]
    });
    fixture = TestBed.createComponent(SeeQuadrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
