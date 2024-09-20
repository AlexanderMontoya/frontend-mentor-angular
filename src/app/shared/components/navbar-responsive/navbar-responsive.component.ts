import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-navbar-responsive',
  templateUrl: './navbar-responsive.component.html',
  styleUrls: ['./navbar-responsive.component.css']
})
export class NavbarResponsiveComponent {
  @Input() navbarState:boolean = false;
  @Output() changeState = new EventEmitter<boolean>();

  public closeNavbar():void{
    this.changeState.emit(false)
  }
}
