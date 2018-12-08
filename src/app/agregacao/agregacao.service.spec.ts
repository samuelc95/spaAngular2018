import { AgregacaoService } from './agregacao.service';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

describe('Service: Dimensao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgregacaoService]
    });
  });

  it('should ...', inject([AgregacaoService], (service: AgregacaoService) => {
    expect(service).toBeTruthy();
  }));
});
