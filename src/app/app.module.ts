import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DietItemComponent } from './diet-item/diet-item.component';
import { DietItemListComponent } from './diet-item-list/diet-item-list.component';
import { NavigaitonBarComponent } from './navigaiton-bar/navigaiton-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DietTrackerPageComponent } from './diet-tracker-page/diet-tracker-page.component';
import { WeightPageComponent } from './weight-page/weight-page.component';
import { WeightItemComponent } from './weight-item/weight-item.component';
import { WeightItemListComponent } from './weight-item-list/weight-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DietItemComponent,
    DietItemListComponent,
    NavigaitonBarComponent,
    HomePageComponent,
    DietTrackerPageComponent,
    WeightPageComponent,
    WeightItemComponent,
    WeightItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
