import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoverGreenComponent } from './pages/cover-green/cover-green.component';
import { CoverBlueComponent } from './pages/cover-blue/cover-blue.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { MainManuComponent } from './pages/main-manu/main-manu.component';
import { CoverBlueOneComponent } from './pages/cover-blue-one/cover-blue-one.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverGreenComponent,
    CoverBlueComponent,
    HeroPageComponent,
    MainManuComponent,
    CoverBlueOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
