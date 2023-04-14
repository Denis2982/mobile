import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';




const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'material', loadChildren: () => import('./pages/material/material.module').then(m => m.MaterialModule) },
  { path: '**', loadChildren: () => import('./pages/not-founded/not-founded.module').then(m => m.NotFoundedModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
