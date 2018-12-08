import { CategoriaService } from './../categoria/categoria.service';
import { ProdutoService } from './produto.service';
import { Iproduto } from './../interfaces/produto';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { DimensaoService } from '../dimensao/dimensao.service';
import { Icategoria } from '../interfaces/categoria';
import { Idimensao } from '../interfaces/dimensao';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html' ,
  styles: []
})
export class ProdutoComponent implements OnInit {
  public produtos: Observable <Iproduto[]>;
  public produto: Iproduto;

  public categorias: Icategoria[];
  public dimensoes: Idimensao[];

  regForm = new FormGroup({
    nome: new FormControl(),
    descricao: new FormControl()
  });

  constructor(private _produtoService: ProdutoService, private _categoriaService: CategoriaService, private _dimensaoService: DimensaoService) { }

  ngOnInit() {
    this.getProdutos();
    this.getCategorias();
    this.getDimensoes();
  }

  async getProdutos() {
    this.produtos = this._produtoService.getProdutos();
  }

  getCategorias() {
    this._categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  getDimensoes() {
    this._dimensaoService.getDimensoes().subscribe(data => {
      this.dimensoes = data;
    });
  }

  getCategoria(id: number): String {
    return this.categorias.find(x => x.categoryId === id).nome;
  }

  getDimensao(id: number): String {
    const temp = ['Prof.: ', this.dimensoes.find(x => x.dimensionId === id).depth,
                '; Largura: ', this.dimensoes.find(x => x.dimensionId === id).lenght,
                '; Altura: ', this.dimensoes.find(x => x.dimensionId === id).height];
    const result = temp.join(' ');
     return result;
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
