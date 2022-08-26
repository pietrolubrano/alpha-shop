import { Injectable } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  articoli: IArticoli[] = [
    {code: '9473858384', description: 'Pacco di pasta', um: 'PZ', pzcart: 25, peso: 1, prezzo: 1.09, active: true, data: new Date(), imageUrl: 'https://picsum.photos/200' },
    {code: '7843924738', description: 'Scatoletta di tonno', um: 'PZ', pzcart: 10, peso: 0.7, prezzo: 5, active: true, data: new Date(), imageUrl: 'https://picsum.photos/200' },
    {code: '7859275849', description: 'Olive', um: 'PZ', pzcart: 15, peso: 0.2, prezzo: 3, active: true, data: new Date(), imageUrl: 'https://picsum.photos/200' },
    {code: '7832748374', description: 'Fresella', um: 'PZ', pzcart: 5, peso: 0.5, prezzo: 2, active: true, data: new Date(), imageUrl: 'https://picsum.photos/200' }
  ]

  constructor() { }

  getArticoli = () : IArticoli[] => this.articoli

  getArticoliByCode = (code: string) : IArticoli => {
    const index = this.articoli.findIndex(articolo => articolo.code === code)
    return this.articoli[index]
  }
}
