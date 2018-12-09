import { IitemProduto } from './../interfaces/itemProduto';
import { ItemProdutoService } from './itemProduto.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Iproduto } from '../interfaces/produto';
import { Observable } from 'rxjs';
import { ProdutoService } from '../produto/produto.service';
import { CategoriaService } from '../categoria/categoria.service';
import { Icategoria } from '../interfaces/categoria';


@Component({
  selector: 'app-itemProduto',
  templateUrl: './itemProduto.component.html',
  styles: []
})
export class ItemProdutoComponent implements OnInit {
  public itensProduto: IitemProduto[];
  public itemProduto: IitemProduto;


  public listaProdutos: Iproduto[ ];

  public categorias: Icategoria[];

  constructor(private _itemProdutoService: ItemProdutoService, private _produtoService: ProdutoService, private _categoriaService: CategoriaService) { }

  ngOnInit() {
    this.fillData()
      .subscribe(result => {
        this.getCategorias();
        this.getProdutos();
        this.getItensProduto();
      });

  }

  private fillData() {
    this.getProdutos();
    return this._itemProdutoService.getItensProduto();
  }

  private getProdutos() {
    this._produtoService.getProdutos().subscribe(data => {
      console.log(data);
      this.listaProdutos = data;
      console.log('prod ->> '+this.listaProdutos);
    });
  }

  private getCategorias(): void {
    this._categoriaService.getCategorias().subscribe(data => {
   
    this.categorias = data;
    console.log('cat ->> '+this.categorias);
  });
}

  getItensProduto(): void {
    this._itemProdutoService.getItensProduto().subscribe(data => {
      console.log(data);
      this.itensProduto = data;
    });
  }

  getNome(id: number): String {
    return this.listaProdutos.find(x => x.productId === id).nome;
  }


  public getItemProdutoId(id: String): void {
    this._itemProdutoService.getItemProdutoId(id).subscribe(data => {
      console.log(data);
      this.itemProduto = data;
    });
  }

  /** public addMaterial(): void {
    console.log(this.regForm.controls['nome'].value);
    const material = {} as Imaterial;
    material.nome = this.regForm.controls['nome'].value;
    this._materialService.addMaterial(material).subscribe();
    this.regForm.reset();
  }*/

  public deleteItemProduto(id: String): void {
    this._itemProdutoService.deleteItemProduto(id).subscribe();
  }

}
