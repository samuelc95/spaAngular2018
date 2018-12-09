import { TestBed, async, inject } from '@angular/core/testing';
import {
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { ProdutoService } from './produto.service';
import {Iproduto} from '../interfaces/produto';
 
describe('produtoService', () => {
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ProdutoService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });
 
  describe('GetRestriction', () => {
    it('should return an Observable<Array<Irestricao>>',
        inject([ProdutoService, XHRBackend], (produtoService, mockBackend) => {
        const mockResponse = {
          data: [
            { productId: 0, nome : 'Gaveta',descricao:'Gaveta',material_AcabamentoID:1,dimensionId:1,categoryId:1,restrictionId:1,emptyArea:0 },
            { productId: 1,  nome : 'Armario',descricao:'Armario',material_AcabamentoID:1,dimensionId:2,categoryId:2,restrictionId:2 ,emptyArea:0},
            { productId: 2,  nome : 'Porta',descricao:'Porta',material_AcabamentoID:1,dimensionId:3,categoryId:3,restrictionId:3,emptyArea:0 },
            { productId: 3,  nome : 'Perna',descricao:'Perna',material_AcabamentoID:1,dimensionId:4,categoryId:4,restrictionId:4 ,emptyArea:0},
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        produtoService.getProdutos().subscribe((m) => {
          expect(m.length).toBe(4);

          expect(m[0].nome).toEqual('Gaveta');
          expect(m[0].descricao).toEqual('Gaveta');
          expect(m[0].material_AcabamentoID).toEqual(1);
          expect(m[0].dimensionId).toEqual(1);
          expect(m[0].categoryId).toEqual(1);
          expect(m[0].restrictionId).toEqual(1);

          expect(m[1].nome).toEqual('Armario');
          expect(m[1].descricao).toEqual('Armario');
          expect(m[1].material_AcabamentoID).toEqual(1);
          expect(m[1].dimensionId).toEqual(2);
          expect(m[1].categoryId).toEqual(2);
          expect(m[1].restrictionId).toEqual(2);

          expect(m[2].nome).toEqual('Porta');
          expect(m[2].descricao).toEqual('Porta');
          expect(m[2].material_AcabamentoID).toEqual(1);
          expect(m[2].dimensionId).toEqual(3);
          expect(m[2].categoryId).toEqual(3);
          expect(m[2].restrictionId).toEqual(3);

          expect(m[3].nome).toEqual('Perna');
          expect(m[3].descricao).toEqual('Perna');
          expect(m[3].material_AcabamentoID).toEqual(1);
          expect(m[3].dimensionId).toEqual(4);
          expect(m[3].categoryId).toEqual(4);
          expect(m[3].restrictionId).toEqual(4);


        });
    }));
  })
 
  describe('deleteProduto', () => {
    it('should return an Observable<Array<Iproduto>>',
        inject([ProdutoService, XHRBackend], (produtoService, mockBackend) => {
        const mockResponse = {
          data: [
            { productId: 0, nome : 'Gaveta',descricao:'Gaveta',material_AcabamentoID:1,dimensionId:1,categoryId:1,restrictionId:1,emptyArea:0 },
            { productId: 1,  nome : 'Armario',descricao:'Armario',material_AcabamentoID:1,dimensionId:2,categoryId:2,restrictionId:2 ,emptyArea:0},
            { productId: 2,  nome : 'Porta',descricao:'Porta',material_AcabamentoID:1,dimensionId:3,categoryId:3,restrictionId:3,emptyArea:0 },
            { productId: 3,  nome : 'Perna',descricao:'Perna',material_AcabamentoID:1,dimensionId:4,categoryId:4,restrictionId:4 ,emptyArea:0},
          ]
        };
 
        const result = {
          data: [
            { productId: 0, nome : 'Gaveta',descricao:'Gaveta',material_AcabamentoID:1,dimensionId:1,categoryId:1,restrictionId:1,emptyArea:0 },
            { productId: 1,  nome : 'Armario',descricao:'Armario',material_AcabamentoID:1,dimensionId:2,categoryId:2,restrictionId:2 ,emptyArea:0},
            { productId: 3,  nome : 'Perna',descricao:'Perna',material_AcabamentoID:1,dimensionId:4,categoryId:4,restrictionId:4 ,emptyArea:0},
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        produtoService.deleteProduto(2).subscribe((m) => {
          expect(m.length).toBe(3);
          expect(m).toEqual(result);
        });
    }));
  });
    describe('addProducr()', () => {
      it('should return an Observable<Array<Iproduto>>',
          inject([ProdutoService, XHRBackend], (produtoService, mockBackend) => {
 
          const mockResponse = {
            data: [
              {   nome : 'Porta2',descricao:'Porta de correr',material_AcabamentoID:1,dimensionId:3,categoryId:3,restrictionId:3 ,emptyArea:0}
            ]
          };
 
          const result = {
            data: [
              {   nome : 'Porta2',descricao:'Porta de correr',material_AcabamentoID:1,dimensionId:3,categoryId:3,restrictionId:3,emptyArea:0}
            ]
          };
 
          const rest: Iproduto = new Iproduto();
          rest.nome = 'Porta2';
          rest.descricao = 'Porta de correr';
          rest.material_AcabamentoID = 1;
          rest.dimensionId=3;
          rest.categoryId=3;
          rest.restrictionId=3;
          rest.emptyArea = 0;

 
          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });
 
          produtoService.addProduto(result).subscribe((m) => {
            expect(m.nome).toEqual(result.data[0].nome);
            expect(m.descricao).toEqual(result.data[0].descricao);
            expect(m.material_AcabamentoID).toEqual(result.data[0].material_AcabamentoID);
            expect(m.dimensionId).toEqual(result.data[0].dimensionId);
            expect(m.categoryId).toEqual(result.data[0].categoryId);
            expect(m.restrictionId).toEqual(result.data[0].restrictionId);
          });
 
      }));
  });
 
})