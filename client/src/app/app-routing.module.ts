import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContestantPageComponent } from './contestant-page/contestant-page.component';
import { ContestantsComponent } from './contestants/contestants.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { PrizeComponent } from './prize/prize.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { LoginComponent } from './login/login.component';
import {AdminComponent} from './admin/admin.component'
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path: '', component: MainHomeComponent},
{path: 'about', component: AboutComponent},
{path: 'prize', component: PrizeComponent},
{path: 'contestants', component: ContestantsComponent}, 
{path: 'contestant/:id', component: ContestantPageComponent},
{path: 'thank-you', component: ThankYouComponent},
//Start admin section
{
  path: 'admin',
  component: AdminComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent}]},
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
