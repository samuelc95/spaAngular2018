import { Irestricao } from './../models/restricao';
import { RestricaoService } from './restricao.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-restricao',
  templateUrl: './restricao.component.html',
  styleUrls: ['./restricao.component.css']
})
export class RestricaoComponent implements OnInit {
  public restricoes: Irestricao[];
  public restricao: Irestricao;
  regForm = new FormGroup({
    lenghMin: new FormControl()
  });
  constructor(private _restricaoService: RestricaoService) { }

  ngOnInit() {
    this.getRestricoes();
  }

  private getRestricoes(): void {
    this._restricaoService.getRestricoes().subscribe(data => {
    console.log(data);
    this.restricoes = data;
    });
  }

  public getRestricaoId(id: Number): void {
    this._restricaoService.getRestricaoId(id).subscribe(data => {
      console.log(data);
      this.restricao = data;
    });
  }

  public addRestricao(): void {
    console.log(this.regForm.controls['profundidade'].value);
    /** this._dimensaoService.addDimension(newDimensao).subscribe(data => { this.dimensions.push(newDimensao)} );*/
  }

  public deleteRestricao(id): void {
    this._restricaoService.deleteRestricao(id).subscribe();
  }

}
