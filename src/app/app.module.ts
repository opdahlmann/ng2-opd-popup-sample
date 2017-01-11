import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes'; 
import { AppComponent } from './app.component';
import { SinglepopupComponent } from './singlepopup/singlepopup.component';
import { MultiplepopupComponent } from './multiplepopup/multiplepopup.component';
import { MenuComponent } from './menu/menu.component';

import {PopupModule} from 'ng2-opd-popup';

@NgModule({
  declarations: [
    AppComponent,
    SinglepopupComponent,
    MultiplepopupComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    PopupModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
