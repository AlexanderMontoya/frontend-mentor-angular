import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  public navbarOpen:boolean = false;

  public changeState(){
    this.navbarOpen = !this.navbarOpen
  }
}
