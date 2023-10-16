import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoverGreenComponent } from './pages/cover-green/cover-green.component';
import { CoverBlueComponent } from './pages/cover-blue/cover-blue.component';
import { MainManuComponent } from './pages/main-manu/main-manu.component';
import { MainCompnentComponent } from './pages/main-compnent/main-compnent.component';
import { AppRoutingModule } from './app-routing.module';
import { ToggleVisibleComponent } from './pages/toggle-visible/toggle-visible.component';
import { ImportantDatesComponent } from './content/important-dates/important-dates.component';
import { ChairsComponent } from './content/chairs/chairs.component';
import { CommitteeComponent } from './content/committee/committee.component';
import { LocationComponent } from './content/location/location.component';
import { AccomodationComponent } from './content/accomodation/accomodation.component';
import { RegistrationComponent } from './content/registration/registration.component';
import { OrganizationComponent } from './content/organization/organization.component';
import { ContactComponent } from './content/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverGreenComponent,
    CoverBlueComponent,
    MainManuComponent,
    MainCompnentComponent,
    ToggleVisibleComponent,
    ImportantDatesComponent,
    ChairsComponent,
    CommitteeComponent,
    LocationComponent,
    AccomodationComponent,
    RegistrationComponent,
    OrganizationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
