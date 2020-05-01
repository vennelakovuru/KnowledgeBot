import { Component, ViewChild, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ModalDirective} from 'angular-bootstrap-md';


@Component({
  selector: 'app-home1',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild(ModalDirective, {static: false}) modal: ModalDirective;
  name: string = '';
  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();
  
 constructor() { }

  ngOnInit() {
   
  }


}


