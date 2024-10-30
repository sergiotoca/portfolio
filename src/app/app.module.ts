import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module'
import { AboutMeModule } from './pages/aboutme/aboutme.module';  // Import AboutUsModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    AboutMeModule  // Make sure to import the AboutMeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
