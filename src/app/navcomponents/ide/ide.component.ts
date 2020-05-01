import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.css']
})
export class IdeComponent implements OnInit {

  isCollapsed :boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.isCollapsed = !this.isCollapsed
    console.log(this.isCollapsed)
  } 

}