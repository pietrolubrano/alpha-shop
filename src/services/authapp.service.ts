import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthappService {

  constructor() { }

  autentica = (userId: string, password: string) : boolean => {
    const retVal = userId === 'Nicola' && password === 'pippo'

    if(retVal){
      sessionStorage.setItem('Utente', userId)
    }

    return retVal
  }
}
