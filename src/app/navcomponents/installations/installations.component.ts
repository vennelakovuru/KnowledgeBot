import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.css']
})
export class InstallationsComponent implements OnInit {

  isCollapsed :boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.isCollapsed = !this.isCollapsed
    console.log(this.isCollapsed)
  } 

}