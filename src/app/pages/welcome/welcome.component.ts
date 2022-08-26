import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from 'src/services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente: string = '';

  title: string = 'Ciao'
  subtitle: string = 'Procedi ad inserire la user id e la password'
  
  saluti : string = "";
  errore : string = "";

  constructor(private route: ActivatedRoute, private salutiService: SalutiDataService) { }

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['userId']
  }

  getSaluti = () : void => {
    this.salutiService.getSaluti(this.utente).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    })
  }

  handleResponse = (response: Object) => {
    this.saluti = response.toString()
  }

  handleError = (error: any) => {
    console.log(error)
    this.errore = error.error.message.toString()
  }

}
