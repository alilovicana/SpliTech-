import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainManuComponent } from './pages/main-manu/main-manu.component';
import { ImportantDatesComponent } from './content/important-dates/important-dates.component';
import { ChairsComponent } from './content/chairs/chairs.component';
import { CommitteeComponent } from './content/committee/committee.component';
import { LocationComponent } from './content/location/location.component';
import { AccomodationComponent } from './content/accomodation/accomodation.component';
import { RegistrationComponent } from './content/registration/registration.component';
import { OrganizationComponent } from './content/organization/organization.component';
import { ContactComponent } from './content/contact/contact.component';
import { CoverGreenComponent } from './pages/cover-green/cover-green.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {
    path: 'Home',
    component: CoverGreenComponent,
 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
