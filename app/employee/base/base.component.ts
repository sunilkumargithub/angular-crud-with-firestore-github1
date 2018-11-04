import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  allemployee: any[];
  constructor(private router: Router, private empservice: EmployeeService) { }

  ngOnInit() {
  }
  onclick() {
this.router.navigate(['/employee/add']);
  }

  ongetemployee() {
this.empservice.getemployee().then((res) => {
console.log('response for get is' , res
);
this.allemployee = res;
});
  }

  ondelete(id) {
    this.empservice.delete(id).then((res) => {
console.log('deleted response is ', res);
this.ongetemployee();

    });
  }

  onedit(id) {
this.router.navigate(['/employee/edit/' + id]);
  }
}
