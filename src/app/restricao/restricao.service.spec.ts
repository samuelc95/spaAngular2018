import { TestBed, async, inject } from '@angular/core/testing';
import {
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { RestricaoService } from './restricao.service';
import {Irestricao} from '../interfaces/restricao';
 
describe('RestricaoService', () => {
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        RestricaoService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });
 
  describe('GetRestriction', () => {
    it('should return an Observable<Array<Irestricao>>',
        inject([RestricaoService, XHRBackend], (restricaoService, mockBackend) => {
        const mockResponse = {
          data: [
            { restrictionId: 0, lenghtMax : 200,heightMax:200,depthMax:200,lenghtMin:100,heightMin:120,depthMin:130 },
            { restrictionId: 1,  lenghtMax : 250,heightMax:230,depthMax:210,lenghtMin:204,heightMin:204,depthMin:270 },
            { restrictionId: 2,  lenghtMax : 200,heightMax:300,depthMax:120,lenghtMin:150,heightMin:160,depthMin:120 },
            { restrictionId: 3,  lenghtMax : 200,heightMax:200,depthMax:200,lenghtMin:100,heightMin:100,depthMin:100 },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        restricaoService.getRestricoes().subscribe((m) => {
          expect(m.length).toBe(4);

          expect(m[0].lenghtMax).toEqual(200);
          expect(m[0].heightMax).toEqual(200);
          expect(m[0].depthMax).toEqual(200);
          expect(m[0].lenghtMin).toEqual(100);
          expect(m[0].heightMin).toEqual(120);
          expect(m[0].depthMin).toEqual(130);

          expect(m[1].lenghtMax).toEqual(250);
          expect(m[1].heightMax).toEqual(230);
          expect(m[1].depthMax).toEqual(210);
          expect(m[1].lenghtMin).toEqual(204);
          expect(m[1].heightMin).toEqual(204);
          expect(m[1].depthMin).toEqual(270);

          expect(m[2].lenghtMax).toEqual(200);
          expect(m[2].heightMax).toEqual(300);
          expect(m[2].depthMax).toEqual(120);
          expect(m[2].lenghtMin).toEqual(150);
          expect(m[2].heightMin).toEqual(160);
          expect(m[2].depthMin).toEqual(120);

          expect(m[3].lenghtMax).toEqual(200);
          expect(m[3].heightMax).toEqual(200);
          expect(m[3].depthMax).toEqual(200);
          expect(m[3].lenghtMin).toEqual(100);
          expect(m[3].heightMin).toEqual(100);
          expect(m[3].depthMin).toEqual(100);


        });
    }));
  })
 
  describe('deleteRestriction', () => {
    it('should return an Observable<Array<Imaterial>>',
        inject([RestricaoService, XHRBackend], (restricaoService, mockBackend) => {
        const mockResponse = {
          data: [
            { restrictionId: 0, lenghtMax : 200,heightMax:200,depthMax:200,lenghtMin:100,heightMin:120,depthMin:130 },
            { restrictionId: 1,  lenghtMax : 250,heightMax:230,depthMax:210,lenghtMin:204,heightMin:204,depthMin:270 },
            { restrictionId: 2,  lenghtMax : 200,heightMax:300,depthMax:120,lenghtMin:150,heightMin:160,depthMin:120 },
            { restrictionId: 3,  lenghtMax : 200,heightMax:200,depthMax:200,lenghtMin:100,heightMin:100,depthMin:100 },
          ]
        };
 
        const result = {
          data: [
            { restrictionId: 0, lenghtMax : 200,heightMax:200,depthMax:200,lenghtMin:100,heightMin:120,depthMin:130 },
            { restrictionId: 1,  lenghtMax : 250,heightMax:230,depthMax:210,lenghtMin:204,heightMin:204,depthMin:270 },
            { restrictionId: 3,  lenghtMax : 200,heightMax:200,depthMax:200,lenghtMin:100,heightMin:100,depthMin:100 },
          ]
        };
 
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
 
        restricaoService.deleteRestricao(2).subscribe((m) => {
          expect(m.length).toBe(3);
          expect(m).toEqual(result);
        });
    }));
  });
    describe('addMateriais()', () => {
      it('should return an Observable<Array<Imaterial>>',
          inject([RestricaoService, XHRBackend], (restricaoService, mockBackend) => {
 
          const mockResponse = {
            data: [
              {  lenghtMax : 500,heightMax:200,depthMax:200,lenghtMin:100,heightMin:120,depthMin:130 }
            ]
          };
 
          const result = {
            data: [
              {  lenghtMax : 500,heightMax:200,depthMax:200,lenghtMin:100,heightMin:120,depthMin:130 }
            ]
          };
 
          const rest: Irestricao = new Irestricao();
          rest.lenghtMax = 500;
          rest.heightMax = 200;
          rest.depthMax = 200;
          rest.lenghtMin=100;
          rest.heightMin=120;
          rest.depthMin=130;
 
          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });
 
          restricaoService.addRestricao(result).subscribe((m) => {
            expect(m.lenghtMax).toEqual(result.data[0].lenghtMax);
            expect(m.heightMax).toEqual(result.data[0].heightMax);
            expect(m.depthMax).toEqual(result.data[0].depthMax);
            expect(m.lenghtMin).toEqual(result.data[0].lenghtMin);
            expect(m.heightMin).toEqual(result.data[0].heightMin);
            expect(m.depthMin).toEqual(result.data[0].depthMin);
          });
 
      }));
  });
 
})