import { Component, OnInit } from '@angular/core';
import data from '../../data/table.json'




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  arrays=data

  constructor() { }

  ngOnInit() {


  }

  delete(i){
    this.arrays.splice(i,1)
  }
  update(i){
    this.arrays.push(i)
  }
}
