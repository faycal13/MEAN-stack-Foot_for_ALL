import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JoueurComponent } from './joueur/joueur.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { FormNewUserComponent } from './form-new-user/form-new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    JoueurComponent,
    NavComponent,
    FormComponent,
    FormNewUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
