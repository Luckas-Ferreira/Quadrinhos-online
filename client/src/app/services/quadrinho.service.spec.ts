import { TestBed } from '@angular/core/testing';

import { QuadrinhoService } from './quadrinho.service';

describe('QuadrinhoService', () => {
  let service: QuadrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuadrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
