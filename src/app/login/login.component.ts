import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: String = 'Nicola'
  password: String = ''

  authenticated: Boolean = true

  errMessage: String = 'Spiacente la User Id e/o la password sono errati'

  title: string = 'Ciao'
  subtitle: string = 'Procedi ad inserire la user id e la password'
  
  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  getsAuth = (): void => {

    console.log(this.userId)
    console.log(this.password)

    if(this.userId === 'Nicola' && this.password === 'ciccio'){
      this.route.navigate(['welcome', this.userId])
      this.authenticated = true
    } else {
      this.authenticated = false
    }
  }

}
