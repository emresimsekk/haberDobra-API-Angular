import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';

import { FormsModule } from '@angular/forms';


import { NotFoundComponent } from './not-found/not-found.component';

import { appRoutes } from './routes';

import { HaberduzenleComponent } from './haberduzenle/haberduzenle.component';

import { AdminloginService } from './_adminLoginService/adminlogin.service';
import { HaberDetayComponent } from './haber-detay/haber-detay.component';
import { KategoriduzenleComponent } from './kategoriduzenle/kategoriduzenle.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnasayfaComponent,


    NotFoundComponent,

    HaberduzenleComponent,
    HaberDetayComponent,
    KategoriduzenleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdminloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
