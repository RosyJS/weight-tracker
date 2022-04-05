import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DietItemComponent } from './diet-item/diet-item.component';
import { DietItemListComponent } from './diet-item-list/diet-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DietItemComponent,
    DietItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
