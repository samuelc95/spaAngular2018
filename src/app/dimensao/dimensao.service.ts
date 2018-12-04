import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DimensaoService {
  private WebApiIt1url = 'http://arqsi-1151111-1151112.azurewebsites.net/api/dimension';
  constructor(private http: HttpClient) { }

  /** getDimensoes() {
    return [
      { 'id': 'e3787cca', 'comprimento': 30, 'profundidade': '20', 'altura': '25' },
      { 'id': 'vergf45gb', 'comprimento': 40, 'profundidade': '10', 'altura': '30' },
    ];
  }*/
  getDimensoes(): Observable<any> {
    return this.http.get(this.WebApiIt1url).pipe(map(this.extractData));
  }

  private extractData(res: Response){
  return res || {};
}

}
