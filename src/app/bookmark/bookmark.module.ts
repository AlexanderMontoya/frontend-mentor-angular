import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { BrowsersComponent } from './components/browsers/browsers.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingPageComponent,
    HeroComponent,
    FeaturesComponent,
    BrowsersComponent,
    QuestionsComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule,

    SharedModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookmarkModule { }
