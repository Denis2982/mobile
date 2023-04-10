import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { TasksComponent } from './tasks/tasks.component';
import { CoreModule } from 'src/app/components/core.module';
import { PointsComponent } from './points/points.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    TasksComponent,
    PointsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule
  ]
})
export class HomeModule { }
