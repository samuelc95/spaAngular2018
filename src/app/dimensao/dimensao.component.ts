import { Idimensao } from './../models/dimensao';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { DimensaoService } from './dimensao.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dimensao',
  templateUrl: './dimensao.component.html',
  styleUrls: ['./dimensao.component.css']
})

export class DimensaoComponent implements OnInit {

  public dimensions: Idimensao[];
  public dimensao: Idimensao;

  private regForm = new FormGroup({
    profundidade: new FormControl(),
    largura: new FormControl(),
    altura: new FormControl()
  });



  constructor(private _dimensaoService: DimensaoService) { }

  ngOnInit() {
   this.getDimensoes();
  }

  private getDimensoes(): void {
      this._dimensaoService.getDimensoes().subscribe(data => {
      console.log(data);
      this.dimensions = data;
    });
  }

  public getDimensaoId(id: Number): void {
    this._dimensaoService.getDimensaoId(id).subscribe(data => {
      console.log(data);
      this.dimensao = data;
    });
  }

  public addDimensao(): void {
    console.log(this.regForm.controls['profundidade'].value);
    /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
  }

  public deleteDimensao(id): void {
    this._dimensaoService.deleteDimension(id).subscribe();
  }

}
