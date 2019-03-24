import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JambotronComponent } from './jambotron/jambotron.component';
import { FooterComponent } from './footer/footer.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JambotronComponent,
    FooterComponent,
    MasterPageComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
