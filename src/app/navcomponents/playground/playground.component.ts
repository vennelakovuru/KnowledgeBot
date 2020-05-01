import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  isCollapsed :boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.isCollapsed = !this.isCollapsed
    console.log(this.isCollapsed)
  } 

}
