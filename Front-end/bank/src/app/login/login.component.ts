import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ClientDataService } from '../service/data/client-data.service';
import { TouchSequence } from 'selenium-webdriver';

export class Client{
  constructor(public nom:String,public password:String,public role:String) { }

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=''
  password=''
  
  errorMessage="Utlisateur n'existe pas"
  invalidLogin=false
  
  
  constructor(private router:Router,private service:ClientDataService) { }

  ngOnInit() {
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

    
    
    
    
  

 