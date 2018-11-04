import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  idtoedit;
  edititem = [];

  constructor(private afs: AngularFirestore,
     private activatedroute: ActivatedRoute,
    private empservice: EmployeeService) { }

  ngOnInit() {
this.activatedroute.params.subscribe((param) => {
this.idtoedit = param.id;
console.log('id to edit is ' , this.idtoedit);
this.empservice.getById(this.idtoedit).then((res) => {
console.log('get by id response is' , res);
this.edititem = res;
});

});
  }

  onsubmit(form: NgForm) {
console.log(form.value);
this.empservice.updateemp(form.value);
  }

}
