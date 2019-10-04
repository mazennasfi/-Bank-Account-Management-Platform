import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompteDataService } from '../service/data/compte-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // isUserLoggedIn : boolean = false;
  
  constructor(private service:CompteDataService,private hardcodedAuthentication:HardcodedAuthenticationService) { }

  ngOnInit() {
 //   this.isUserLoggedIn = this.hardcodedAuthentication.isUserLoggedIn();
   
  }
 
  handleSuccessfulResponse(response){
    console.log(response)
    console.log(response.codeCompte)
  }

}
