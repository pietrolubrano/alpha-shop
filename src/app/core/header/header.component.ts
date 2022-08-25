import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public activeRoute: String = ""

  constructor(private router: Router, public basicAuth: AuthappService) {
    router.events.subscribe(e => e instanceof NavigationEnd && this.changeActiveRoute(e.url))
  }

  ngOnInit(): void { }

  changeActiveRoute(url: String): void {
    this.activeRoute = url
  }

}
