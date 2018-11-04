import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private empservice: EmployeeService) { }

  ngOnInit() {
  }

  onsubmit(form: NgForm) {
this.empservice.addemployee(form.value);
  }
}
