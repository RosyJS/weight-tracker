import { AuthenticationService } from './authentication.service';
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
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

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
    WeightItemListComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule 
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
