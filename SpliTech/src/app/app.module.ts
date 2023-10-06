import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoverGreenComponent } from './pages/cover-green/cover-green.component';
import { CoverBlueComponent } from './pages/cover-blue/cover-blue.component';
import { MainManuComponent } from './pages/main-manu/main-manu.component';
import { MainCompnentComponent } from './pages/main-compnent/main-compnent.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverGreenComponent,
    CoverBlueComponent,
    MainManuComponent,
    MainCompnentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
