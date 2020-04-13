import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadComponent = false;

  constructor(private router: Router) { }

  openChatBot() {
     this.loadComponent = true;
    // this.router.navigate(['/chat'])
    //   .then(success => console.log('navigation success?' , success))
    //   .catch(console.error);
  }
  ngOnInit() {
  }




}
