import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsComponent } from './bets/bets.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path:  "", pathMatch:  "full", redirectTo:  "index"},
  { path: 'index', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bets', component: BetsComponent },
  { path:  "**", pathMatch:  "full", redirectTo:  "index"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
