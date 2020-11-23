import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestantsComponent } from './contestants/contestants.component';
import { MainHomeComponent } from './main-home/main-home.component';

const routes: Routes = [
{path: '', component: MainHomeComponent},
{path: 'contestants', component: ContestantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
