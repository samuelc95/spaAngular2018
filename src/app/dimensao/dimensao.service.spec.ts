import { Idimensao } from './../interfaces/dimensao';
import { DimensaoService } from './dimensao.service';
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
        DimensaoService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });
 
  describe('getDimensoes', () => {
    it('should return an Observable<Array<Iagregacao>>',
        inject([DimensaoService, XHRBackend], (dimensaoService, mockBackend) => {
        const mockResponse = {
          data: [
            { dimensionId: 0, lenght: 1, depth: 2, height: 1 },
            { dimensionId: 1, lenght: 4, depth: 2, height: 3 },
            { dimensionId: 2, lenght: 7, depth: 5, height: 15 },
            { dimensionId: 3, lenght: 7, depth: 7, height: 28 },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        dimensaoService.getDimensoes().subscribe((a) => {
          expect(a.length).toBe(4);
          expect(a[0].lenght).toEqual(1);
          expect(a[1].lenght).toEqual(4);
          expect(a[2].lenght).toEqual(7);
          expect(a[3].lenght).toEqual(7);
        });
    }));
  })
 
  describe('deleteDimensao', () => {
    it('should return an Observable<Array<Idimensao>>',
        inject([DimensaoService, XHRBackend], (dimensaoService, mockBackend) => {
        const mockResponse = {
          data: [
            { dimensionId: 0, lenght: 1, depth: 2, height: 1 },
            { dimensionId: 1, lenght: 4, depth: 2, height: 3 },
            { dimensionId: 2, lenght: 7, depth: 5, height: 15 },
            { dimensionId: 3, lenght: 7, depth: 7, height: 28 },
          ]
        };
 
        const result = {
          data: [
            { dimensionId: 0, lenght: 1, depth: 2, height: 1 },
            { dimensionId: 1, lenght: 4, depth: 2, height: 3 },
            { dimensionId: 2, lenght: 7, depth: 5, height: 15 },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        dimensaoService.deleteDimension(3).subscribe((a) => {
          expect(a.length).toBe(3);
          expect(a).toEqual(result);
        });
    }));
  });
    describe('addDimensao()', () => {
      it('should return an Observable<Array<Idimensao>>',
          inject([DimensaoService, XHRBackend], (dimensaoService, mockBackend) => {
 
          const mockResponse = {
            data: [
              { dimensionId: 0, lenght: 1, depth: 2, height: 1 },
              { dimensionId: 1, lenght: 4, depth: 2, height: 3 },
              { dimensionId: 2, lenght: 7, depth: 5, height: 15 },
            ]
          };
 
          const result = {
            data: [
              { dimensionId: 0, lenght: 1, depth: 2, height: 1 },
              { dimensionId: 1, lenght: 4, depth: 2, height: 3 },
              { dimensionId: 2, lenght: 7, depth: 5, height: 15 },
            ]
          };
 
          const dim: Idimensao = new Idimensao();
          dim.lenght = 1, 
          dim.height = 2;
          dim.depth = 3;
 
          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });
 
          dimensaoService.addDimensao(result).subscribe((d) => {
            expect(d).toEqual(result.data[0]);
          });
 
      }));
  });
 
})