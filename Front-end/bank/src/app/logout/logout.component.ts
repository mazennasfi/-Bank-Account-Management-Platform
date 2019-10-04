import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Router } from '@angular/router';
import { ClientDataService } from '../service/data/client-data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  username=''
  password=''
  errorMessage="Utilisateur n'existe pas"
  invalidLogin=false

  constructor(private router:Router,private hardcodedAuthentication:HardcodedAuthenticationService,private service:ClientDataService) { }

  ngOnInit() {
    this.hardcodedAuthentication.logout();
  }
  handleLogin()
  {
    
    let result : boolean ;
    this.service.executeListClientsBeanService(this.username).subscribe(
      (res) => {
      
        if(res===null){
          this.invalidLogin = true

        }
        
        
        else if(this.password === res.password && res.role == "agent"){
          console.log(res.role)
        sessionStorage.setItem('authenticatedUser',this.username);
        this.invalidLogin = false
        this.router.navigate(['home1',this.username]) 
               
        }
        else if(this.password===null){
          this.invalidLogin = true
        }
        
        else{
          this.invalidLogin = true
        }
      },
      (error) => {
        console.log(error)
        this.invalidLogin = false
      }
    )
}
}
