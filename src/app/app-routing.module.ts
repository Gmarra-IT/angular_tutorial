// Moduli base
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importazione di altre app
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent },// Dettaglio degli eroi potrò raggiungerli tramite parametro ID
  { path: 'heroes', component: HeroesComponent }, // Elenco degli eroi, in pratica dove genero l'array
  { path: 'dashboard', component: DashboardComponent }, // Dashboard dove mostro 4 link a 4 eroi
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // route base

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }