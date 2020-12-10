import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../../components/home/home.component';
import {InfoComponent} from '../../components/survey/info/info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'info',
    component: InfoComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
