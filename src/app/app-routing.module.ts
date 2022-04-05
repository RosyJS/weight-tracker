import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietTrackerPageComponent } from './diet-tracker-page/diet-tracker-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WeightPageComponent } from './weight-page/weight-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'diettracker', component: DietTrackerPageComponent},
  { path: 'weight', component: WeightPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
