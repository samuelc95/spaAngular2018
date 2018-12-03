import { Component, OnInit } from '@angular/core';
import { EncomendaService } from './encomenda.service';

@Component({
  selector: 'app-encomenda',
  templateUrl: './encomenda.component.html',
  styleUrls: ['./encomenda.component.css']
})
export class EncomendaComponent implements OnInit {

  constructor(private EncomendaService: EncomendaService) { }

  ngOnInit() {
  }

}
