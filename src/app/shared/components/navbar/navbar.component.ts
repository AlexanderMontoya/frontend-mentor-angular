import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() navbarState:boolean = false;
  @Output() changeState = new EventEmitter<boolean>();

  public openNavbar():void{
    this.changeState.emit(true)
  }
}
