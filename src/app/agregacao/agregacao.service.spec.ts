import { AgregacaoService } from './agregacao.service';
import { IAgregacao } from './../interfaces/agregacao';
import { TestBed, async, inject } from '@angular/core/testing';
import {
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
 
describe('AcabamentoService', () => {
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AgregacaoService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });
 
  describe('getAgregacoes', () => {
    it('should return an Observable<Array<Iagregacao>>',
        inject([AgregacaoService, XHRBackend], (agregacaoService, mockBackend) => {
        const mockResponse = {
          data: [
            { itemId: 0, productId1: 1, productId2: 2, optional: false },
            { itemId: 1, productId1: 2, productId2: 3, optional: true },
            { itemId: 2, productId1: 3, productId2: 4, optional: false },
            { itemId: 3, productId1: 4, productId2: 1, optional: true },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        agregacaoService.getAgregacoes().subscribe((a) => {
          expect(a.length).toBe(4);
          expect(a[0].productId1).toEqual(1);
          expect(a[1].productId1).toEqual(2);
          expect(a[2].productId1).toEqual(3);
          expect(a[3].productId1).toEqual(4);
        });
    }));
  })
 
  describe('deleteAcabamento', () => {
    it('should return an Observable<Array<Iacabamento>>',
        inject([AgregacaoService, XHRBackend], (agregacaoService, mockBackend) => {
        const mockResponse = {
          data: [
            { itemId: 0, productId1: 1, productId2: 2, optional: false },
            { itemId: 1, productId1: 2, productId2: 3, optional: true },
            { itemId: 2, productId1: 3, productId2: 4, optional: false },
            { itemId: 3, productId1: 4, productId2: 1, optional: true },
          ]
        };
 
        const result = {
          data: [
            { itemId: 0, productId1: 1, productId2: 2, optional: false },
            { itemId: 1, productId1: 2, productId2: 3, optional: true },
            { itemId: 2, productId1: 3, productId2: 4, optional: false },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        agregacaoService.deleteAgregacao(3).subscribe((a) => {
          expect(a.length).toBe(3);
          expect(a).toEqual(result);
        });
    }));
  });
    describe('addAgregacao()', () => {
      it('should return an Observable<Array<Iacabamento>>',
          inject([AgregacaoService, XHRBackend], (agregacaoService, mockBackend) => {
 
          const mockResponse = {
            data: [
              { productId1: 1, productId2: 2, optional: false },
              { productId1: 2, productId2: 3, optional: true },
              { productId1: 3, productId2: 4, optional: false },
              { productId1: 4, productId2: 1, optional: true },
            ]
          };
 
          const result = {
            data: [
              { productId1: 1, productId2: 2, optional: false },
              { productId1: 2, productId2: 3, optional: true },
              { productId1: 3, productId2: 4, optional: false },
              { productId1: 4, productId2: 1, optional: true },
            ]
          };
 
          const agregacao: IAgregacao = new IAgregacao();
          agregacao.productId1 = 1, 
          agregacao.productId2 = 2;
          agregacao.optional = false;
 
          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });
 
          agregacaoService.addAgregacao(result).subscribe((a) => {
            expect(a.productId1).toEqual(result.data[0].productId1);
          });
 
      }));
  });
 
})