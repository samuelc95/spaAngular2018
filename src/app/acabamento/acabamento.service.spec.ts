import { Iacabamento } from './../interfaces/acabamento';
import { AcabamentoService } from './acabamento.service';
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
        AcabamentoService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });
 
  describe('getAcabamentos', () => {
    it('should return an Observable<Array<Iacabamento>>',
        inject([AcabamentoService, XHRBackend], (acabamentoService, mockBackend) => {
        const mockResponse = {
          data: [
            { acabamentoId: 0, nome: 'A0' },
            { acabamentoId: 1, nome: 'A1' },
            { acabamentoId: 2, nome: 'A2' },
            { acabamentoId: 3, nome: 'A3' },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        acabamentoService.getAcabamentos().subscribe((a) => {
          expect(a.length).toBe(4);
          expect(a[0].nome).toEqual('A0');
          expect(a[1].nome).toEqual('A1');
          expect(a[2].nome).toEqual('A2');
          expect(a[3].nome).toEqual('A3');
        });
    }));
  })
 
  describe('deleteAcabamento', () => {
    it('should return an Observable<Array<Iacabamento>>',
        inject([AcabamentoService, XHRBackend], (acabamentoService, mockBackend) => {
        const mockResponse = {
          data: [
            { acabamentoId: 0, nome: 'A0' },
            { acabamentoId: 1, nome: 'A1' },
            { acabamentoId: 2, nome: 'A2' },
            { acabamentoId: 3, nome: 'A3' },
          ]
        };
 
        const result = {
          data: [
            { acabamentoId: 0, nome: 'A0' },
            { acabamentoId: 1, nome: 'A1' },
            { acabamentoId: 3, nome: 'A3' },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        acabamentoService.deleteAcabamento(3).subscribe((m) => {
          expect(m.length).toBe(3);
          expect(m).toEqual(result);
        });
    }));
  });
    describe('addAcabamento()', () => {
      it('should return an Observable<Array<Iacabamento>>',
          inject([AcabamentoService, XHRBackend], (acabamentoService, mockBackend) => {
 
          const mockResponse = {
            data: [
              { nome: 'A33' }
            ]
          };
 
          const result = {
            data: [
              {nome: 'A33' }
            ]
          };
 
          const acab: Iacabamento = new Iacabamento();
          acab.acabamentoId = 33;
          acab.nome = 'A33';
 
          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });
 
          acabamentoService.addAcabamento(result).subscribe((m) => {
            expect(m.nome).toEqual(result.data[0].nome);
          });
 
      }));
  });
 
})