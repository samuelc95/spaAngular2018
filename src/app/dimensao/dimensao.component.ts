import { Idimensao } from './../models/dimensao';
import { Component, OnInit } from '@angular/core';
import { DimensaoService } from './dimensao.service';

@Component({
  selector: 'app-dimensao',
  templateUrl: './dimensao.component.html',
  styleUrls: ['./dimensao.component.css']
})

export class DimensaoComponent implements OnInit {

  public dimensions: Idimensao[];
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

}
