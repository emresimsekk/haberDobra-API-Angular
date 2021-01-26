import { Routes } from '@angular/router';
import { AnasayfaComponent } from "./anasayfa/anasayfa.component";

import { HaberduzenleComponent } from './haberduzenle/haberduzenle.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './_guard/auth-guard';

export const appRoutes: Routes = [
  {path : '', component:AnasayfaComponent },
  {path : 'anasayfa', component:AnasayfaComponent},

 
  {path: 'haberduzenle', component:HaberduzenleComponent ,canActivate:[AuthGuard]},
  {path : '**', component:NotFoundComponent},



]


