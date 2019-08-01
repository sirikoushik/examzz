import { Component, OnInit } from '@angular/core';
import data from '../../data/table.json'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  arrays=data

  constructor() { }

  ngOnInit() {
  }
addnew(form){
  this.arrays.push(form)
}
}
