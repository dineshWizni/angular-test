import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayOneComponent} from './displayone/displayone.component'

const routes: Routes = [
  {path:'detailone',component:DisplayOneComponent},
  {path:'',redirectTo:'/detailone',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
