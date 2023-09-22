import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoverGreenComponent } from './pages/cover-green/cover-green.component';
import { CoverBlueComponent } from './pages/cover-blue/cover-blue.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { PlayGroundPageComponent } from './pages/play-ground-page/play-ground-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { MainManuComponent } from './pages/main-manu/main-manu.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverGreenComponent,
    CoverBlueComponent,
    HeroPageComponent,
    PlayGroundPageComponent,
    ContentPageComponent,
    MainManuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
