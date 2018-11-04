import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  // {path: '', component: GetComponent},
  // {path: 'get', component: GetComponent},
  // {path: 'add', component: AddComponent},
  {path: '', component: TestComponent},

  {path: 'employee', loadChildren: './employee/employee.module#EmployeeModule'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {

}
