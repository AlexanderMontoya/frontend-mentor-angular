import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarResponsiveComponent } from './components/navbar-responsive/navbar-responsive.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarResponsiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    NavbarResponsiveComponent,
    FooterComponent
  ]
})
export class SharedModule { }
