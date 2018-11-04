import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  declarations: [
    EmployeeComponent,
    BaseComponent, AddComponent, EditComponent],
    providers: []
})
export class EmployeeModule { }
