import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundedComponent } from './not-founded.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NotFoundedComponent }
];

@NgModule({
  declarations: [
    NotFoundedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NotFoundedModule { }
