import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {
  name:string=''
  client:string=''
  constructor() { }

  ngOnInit() {
    this.name=sessionStorage.getItem('authenticatedUser');
    this.client=sessionStorage.getItem('user');
  }

}
