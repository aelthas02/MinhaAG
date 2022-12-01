import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsComponent } from './bets/bets.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path:  "", pathMatch:  "full", redirectTo:  "index" },
  { path: 'index', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'bets', component: BetsComponent, canActivate: [AuthGuard] },
  { path:  "**", pathMatch:  "full", redirectTo:  "index" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
