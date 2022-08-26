import { Component, OnInit } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';
import { ArticoliService } from 'src/services/articoli.service';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {

  articoli$ : IArticoli[] = []

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$)
  }

  handleEdit = (code : string) => {
    console.log('clicato taso modifica del codice: ' + code)
  }

  handleDelete = (code : string) => {
    console.log('clicato taso elimina del codice: ' + code)

    this.articoli$.splice(this.articoli$.findIndex(x => x.code === code), 1);
    console.log(this.articoli$);
  }
}
