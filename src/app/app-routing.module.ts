import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'covid-progress', loadChildren: () => import('./covid-progress/covid-progress.module').then(m => m.CovidProgressModule) },
  { path: 'places-stats', loadChildren: () => import('./places-stats/places-stats.module').then(m => m.PlacesStatsModule) },
  { path: 'travel-history', loadChildren: () => import('./travel-history/travel-history.module').then(m => m.TravelHistoryModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
