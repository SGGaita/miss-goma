import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SloganComponent } from './slogan/slogan.component';
import { ContestantsComponent } from './contestants/contestants.component';
import { ContestantPageComponent } from './contestant-page/contestant-page.component';
import { AboutComponent } from './about/about.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterUpperComponent } from './footer-upper/footer-upper.component';
import { PrizeComponent } from './prize/prize.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { RouterModule } from '@angular/router';
import { CompetitonComponent } from './competiton/competiton.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainHomeComponent,
    NavbarComponent,
    SloganComponent,
    ContestantsComponent,
    ContestantPageComponent,
    AboutComponent,
    CopyrightComponent,
    FooterUpperComponent,
    PrizeComponent,
    SponsorsComponent,
    CompetitonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
