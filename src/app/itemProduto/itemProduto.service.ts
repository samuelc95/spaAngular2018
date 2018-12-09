import { IitemProduto } from './../interfaces/itemProduto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemProdutoService {
  [x: string]: any;
  private WebApiIt2url = 'https://arqsiit2nodejs.azurewebsites.net/api/ItemDeProduto/';
  constructor(private http: HttpClient) { }

  getItensProduto(): Observable<any> {
    return this.http.get(this.WebApiIt2url).pipe(map(this.extractData));
  }
  private extractData(res: Response) {
    return res || {};
  }

  getItemProdutoId(id: String): Observable<any> {
    const url = `${this.WebApiIt2url}/${id}`;
    return this.http.get(url).pipe(map(this.extractData));
  }

  addItemProduto(itemProduto: IitemProduto): Observable<IitemProduto> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(itemProduto);
    const data = JSON.stringify(itemProduto);
    console.log(data);
    return this.http.post<IitemProduto>(this.WebApiIt2url, data, httpOptions)
      .pipe();
  }

  deleteItemProduto(id: String): Observable<{}> {
    console.log('delete itemProduto');
    const url = `${this.WebApiIt2url}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
      .pipe(
        )
      ;
  }
}
