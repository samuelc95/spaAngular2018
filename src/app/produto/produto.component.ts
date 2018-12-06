import { ProdutoService } from './produto.service';
import { Iproduto } from './../interfaces/produto';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html' ,
  styles: []
})
export class ProdutoComponent implements OnInit {
  public produtos: Iproduto[];
  public produto: Iproduto;

  regForm = new FormGroup({
    nome: new FormControl(),
    descricao: new FormControl()
  });

  constructor(private _produtoService: ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
  }

  private getProdutos(): void {
    this._produtoService.getProdutos().subscribe(data => {
    console.log(data);
    this.produtos = data;
    });
  }

  public getProdutoId(id: Number): void {
    this._produtoService.getProdutoId(id).subscribe(data => {
      console.log(data);
      this.produto = data;
    });
  }

  public addProduto(): void {
    console.log(this.regForm.controls['nome'].value);
    const produto = {} as Iproduto;
    produto.nome = this.regForm.controls['nome'].value;
    produto.descricao = this.regForm.controls['descricao'].value;
    this._produtoService.addProduto(produto).subscribe();
    this.regForm.reset();
    /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
  }

  public deleteProduto(id): void {
    this._produtoService.deleteProduto(id).subscribe();
  }

}
