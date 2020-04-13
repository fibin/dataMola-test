import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesTableComponent } from './pages/series-table/series-table.component';

const routes: Routes = [
  { path: 'series', component: SeriesTableComponent },
  { path: '', component: SeriesTableComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
