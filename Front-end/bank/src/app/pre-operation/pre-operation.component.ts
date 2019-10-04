import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { OperationDataService } from '../service/data/operation-data.service';

@Component({
  selector: 'app-pre-operation',
  templateUrl: './pre-operation.component.html',
  styleUrls: ['./pre-operation.component.css']
})
export class PreOperationComponent implements OnInit {
  codeCompte='';
  invalidLogin=false;
  errorMessage="Ce compte n'existe pas ou bien n'est pas encore utilisé par le client";
  constructor(private route:ActivatedRoute
    ,private hardcodedAuthentication:HardcodedAuthenticationService,private router:Router,private service:OperationDataService) { }

  ngOnInit() {
  }

  handleLogin()
  {
    this.service.listerOperations(this.codeCompte).subscribe(

      (res) => {
      
        if(res===null || res.length==0){
          this.invalidLogin = true

        }
        else {
          console.log(res);
          this.invalidLogin = false;
          sessionStorage.setItem('codeCompte',this.codeCompte);
          this.router.navigate(['operations',sessionStorage.getItem('codeCompte')]);

        
        
        
               
        }
      
      
      
      
      },
      (error) => {
        console.log(error)
        this.invalidLogin = false
      }


    )
    
    
    
    
  
}
}
