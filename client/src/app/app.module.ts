import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from "@angular/common/http";



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
import { ThankYouComponent } from './thank-you/thank-you.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminContestantsListComponent } from './admin-contestants-list/admin-contestants-list.component';
import { AdminContestantCreateComponent } from './admin-contestant-create/admin-contestant-create.component';
import { AdminContestantComponent } from './admin-contestant/admin-contestant.component';
import { ContestantsSliderComponent } from './contestants-slider/contestants-slider.component'


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
    CompetitonComponent,
    ThankYouComponent,
    LoginComponent,
    PageNotFoundComponent,
    AdminComponent,
    DashboardComponent,
    AdminPagesComponent,
    AdminUsersComponent,
    AdminContestantsListComponent,
    AdminContestantCreateComponent,
    AdminContestantComponent,
    ContestantsSliderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        //useClass: TranslationService,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: 'French'
    }),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
