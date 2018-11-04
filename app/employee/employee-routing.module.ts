import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  {path: '', component: BaseComponent},
  {path: 'base', component: BaseComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent}


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EmployeeRoutingModule {

}
