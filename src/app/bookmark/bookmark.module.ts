import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { BrowsersComponent } from './components/browsers/browsers.component';
import { QuestionsComponent } from './components/questions/questions.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    HeroComponent,
    FeaturesComponent,
    BrowsersComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule,

    SharedModule
  ]
})
export class BookmarkModule { }
