import { CategoriaService } from './categoria.service';
import { Icategoria } from './../interfaces/categoria';
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
        CategoriaService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });
 
  describe('getAcabamentos', () => {
    it('should return an Observable<Array<Iacabamento>>',
        inject([CategoriaService, XHRBackend], (categoriaService, mockBackend) => {
        const mockResponse = {
          data: [
            { categoryId: 0, nome: 'C0' },
            { categoryId: 1, nome: 'C1' },
            { categoryId: 2, nome: 'C2' },
            { categoryId: 3, nome: 'C3' },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        categoriaService.getCategorias().subscribe((a) => {
          expect(a.length).toBe(4);
          expect(a[0].nome).toEqual('C0');
          expect(a[1].nome).toEqual('C1');
          expect(a[2].nome).toEqual('C2');
          expect(a[3].nome).toEqual('C3');
        });
    }));
  })
 
  describe('deleteCategoria', () => {
    it('should return an Observable<Array<Icategoria>>',
        inject([CategoriaService, XHRBackend], (categoriaService, mockBackend) => {
        const mockResponse = {
          data: [
            { categoryId: 0, nome: 'C0' },
            { categoryId: 1, nome: 'C1' },
            { categoryId: 2, nome: 'C2' },
            { categoryId: 3, nome: 'C3' },
          ]
        };
 
        const result = {
          data: [
            { categoryId: 0, nome: 'C0' },
            { categoryId: 1, nome: 'C1' },
            { categoryId: 2, nome: 'C2' },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        categoriaService.deleteCategoria(3).subscribe((c) => {
          expect(c.length).toBe(3);
          expect(c).toEqual(result);
        });
    }));
  });
    describe('addCategoria()', () => {
      it('should return an Observable<Array<Icategoria>>',
          inject([CategoriaService, XHRBackend], (categoriaService, mockBackend) => {
 
          const mockResponse = {
            data: [
              { nome: 'C33' }
            ]
          };
 
          const result = {
            data: [
              {nome: 'C33' }
            ]
          };
 
          const cat: Icategoria = new Icategoria();
          cat.categoryId = 33;
          cat.nome = 'C33';
 
          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });
 
          categoriaService.addCategoria(result).subscribe((c) => {
            expect(c.nome).toEqual(result.data[0].nome);
          });
 
      }));
  });
 
})