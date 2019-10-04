import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ClientDataService } from '../service/data/client-data.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  clientName='';
  name='';
  invalidLogin=false;
  errorMessage="Client n'existe pas"
  constructor(private route:ActivatedRoute
    ,private hardcodedAuthentication:HardcodedAuthenticationService,private router:Router,private service:ClientDataService) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
    
  }
  handleLogin()
  {
    this.service.executeListClientsBeanService(this.clientName).subscribe(

      (res) => {
      
        if(res===null){
          this.invalidLogin = true

        }
        else if( res.role == "client"){
          console.log(res.role);
          this.invalidLogin = false;
          sessionStorage.setItem('user',this.clientName);
          this.router.navigate(['home',sessionStorage.getItem('user')]);

        
        
        
               
        }
      
      
      
      
      },
      (error) => {
        console.log(error)
        this.invalidLogin = false
      }


    )
    
    
    
    
    
  
}
}
