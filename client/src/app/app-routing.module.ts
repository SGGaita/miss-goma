import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContestantPageComponent } from './contestant-page/contestant-page.component';
import { ContestantsComponent } from './contestants/contestants.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { PrizeComponent } from './prize/prize.component';

const routes: Routes = [
{path: '', component: MainHomeComponent},
{path: 'about', component: AboutComponent},
{path: 'prize', component: PrizeComponent},
{path: 'contestants', component: ContestantsComponent}, 
{path: 'contestant/:id', component: ContestantPageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
