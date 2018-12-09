import { TestBed, async, inject } from '@angular/core/testing';
import {
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { MaterialAcabamentoService } from './materialAcabamento.service';
import {ImaterialAcabamento} from '../interfaces/materialAcabamento';
 
describe('MaterialService', () => {
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        MaterialAcabamentoService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });
 
  describe('getMateriaisAcabamento', () => {
    it('should return an Observable<Array<Imaterial>>',
        inject([MaterialAcabamentoService, XHRBackend], (materialService, mockBackend) => {
        const mockResponse = {
          data: [
            { ImaterialAcabamento: 0, materialId: 1 ,acabamentoId: 1},
            { ImaterialAcabamento: 1, materialId: 2 ,acabamentoId: 2},
            { ImaterialAcabamento: 2, materialId: 3,acabamentoId: 3 },
            { ImaterialAcabamento: 3, materialId: 4 ,acabamentoId: 4},
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        materialService.getMatsAcabs().subscribe((m) => {
          expect(m.length).toBe(4);
          expect(m[0].ImaterialAcabamento).toEqual(1);
          expect(m[0].materialId).toEqual(1);
          expect(m[0].acabamentoId).toEqual(1);

          expect(m[1].ImaterialAcabamento).toEqual(2);
          expect(m[1].materialId).toEqual(2);
          expect(m[1].acabamentoId).toEqual(2);

          expect(m[2].ImaterialAcabamento).toEqual(3);
          expect(m[2].materialId).toEqual(3);
          expect(m[2].acabamentoId).toEqual(3);
        });
    }));
  })
 
  describe('deleteMateriaisAcabamentos', () => {
    it('should return an Observable<Array<Imaterial>>',
        inject([MaterialAcabamentoService, XHRBackend], (materialService, mockBackend) => {
        const mockResponse = {
            data: [
                { ImaterialAcabamento: 0, materialId: 1 ,acabamentoId: 1},
                { ImaterialAcabamento: 1, materialId: 2 ,acabamentoId: 2},
                { ImaterialAcabamento: 2, materialId: 3,acabamentoId: 3 },
                { ImaterialAcabamento: 3, materialId: 4 ,acabamentoId: 4},
              ]
        };
 
        const result = {
            data: [
                { ImaterialAcabamento: 0, materialId: 1 ,acabamentoId: 1},
                { ImaterialAcabamento: 1, materialId: 2 ,acabamentoId: 2},
                { ImaterialAcabamento: 3, materialId: 4 ,acabamentoId: 4},
              ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        materialService.deleteMatAcab(2).subscribe((m) => {
          expect(m.length).toBe(3);
          expect(m).toEqual(result);
        });
    }));
  });
    describe('addMateriais()', () => {
      it('should return an Observable<Array<Imaterial>>',
          inject([MaterialAcabamentoService, XHRBackend], (materialService, mockBackend) => {
 
          const mockResponse = {
            data: [
                {  materialId: 1 ,acabamentoId: 1},
            ]
          };
 
          const result = {
            data: [
                {  materialId: 1 ,acabamentoId: 1},
            ]
          };
 
          const mat: ImaterialAcabamento = new ImaterialAcabamento();
          mat.materialId = 1;
          mat.acabamentoId = 1;
 
          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });
 
          materialService.addMatAcab(result).subscribe((m) => {
            expect(m.materialId).toEqual(result.data[0].materialId);
          });
 
      }));
  });
 
})