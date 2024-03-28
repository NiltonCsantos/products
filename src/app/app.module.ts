import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { PageComponent } from './components/page/page.component';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormAuthComponent } from './components/form-auth/form-auth.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';

import { MainSportComponent } from './components/main-product/main-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http"
import { FormCadastreComponent } from './components/form-cadastre/form-cadastre.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    HeaderComponent,
    CardComponent,
    PageComponent,
    FormAuthComponent,
    FormRegisterComponent,
    MainSportComponent,
    FormCadastreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
