import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JambotronComponent } from './jambotron/jambotron.component';
import { FooterComponent } from './footer/footer.component';
import { MasterPageComponent } from './master-page/master-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JambotronComponent,
    FooterComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
