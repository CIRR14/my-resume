import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    PortfolioComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    PortfolioComponent,
    ResumeComponent]
})
export class AppModule { }
