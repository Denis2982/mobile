import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReportsComponent } from './reports/reports.component';
import { SideComponent } from './side/side.component';

const routes: Routes = [
  { path: '', component: ProfileComponent }
];

@NgModule({
  declarations: [
    ProfileComponent,
    UserComponent,
    ReportsComponent,
    SideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
