import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = 'Nicola'
  password: string = ''

  authenticated: Boolean = true

  errMessage: string = 'Spiacente la User Id e/o la password sono errati'

  title: string = 'Ciao'
  subtitle: string = 'Procedi ad inserire la user id e la password'
  
  constructor(private route: Router, private basicAuth: AuthappService) { }

  ngOnInit(): void { }

  getsAuth = (): void => {

    if(this.basicAuth.autentica(this.userId, this.password)){

      this.route.navigate(['welcome', this.userId])
      this.authenticated = true

    } else {
      this.authenticated = false
    }
  }

}
