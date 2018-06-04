import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';

import { MaterialModule } from './material/material.module';


import { NavbarComponent } from './components/navbar/navbar.component';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { RegisterContactComponent } from './components/register-contact/register-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusinessListComponent,
    FooterComponent,
    DetailViewComponent,
    RegisterContactComponent,
    UpdateContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
