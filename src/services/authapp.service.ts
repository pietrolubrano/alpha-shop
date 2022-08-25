import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthappService {

  constructor(private route: Router) { }

  autentica = (userId: string, password: string) : boolean => {
    const retVal = userId === 'Nicola' && password === 'pippo'

    if(retVal){
      sessionStorage.setItem('Utente', userId)
      console.log('sessione')
    }

    return retVal
  }

  loggedUser = () : string | null => sessionStorage.getItem("Utente")

  isLogged = () : boolean => sessionStorage.getItem("Utente") ? true : false

  logOut = () : void => {
    sessionStorage.removeItem('Utente')
    this.route.navigate([''])
  }
}
