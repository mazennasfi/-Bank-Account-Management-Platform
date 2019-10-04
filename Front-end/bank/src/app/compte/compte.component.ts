import { Component, OnInit } from '@angular/core';
import { CompteDataService } from '../service/data/compte-data.service';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Compte } from '../list-comptes/list-comptes.component';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})

export class CompteComponent implements OnInit {

  taux:number
  solde:number
  decouvert:number
 // compte:Compte;
  selectedLink: string="Courant";

  username:string;

  constructor(private service:CompteDataService,private router:Router,private hardcodedAuthentication:HardcodedAuthenticationService) { }

  ngOnInit() {
    this.username=sessionStorage.getItem('user');
    
    
  }
  setradio(e: string): void   
  {  
  
        this.selectedLink = e;  
          
  }
  
  bool():boolean
  {if(this.selectedLink === 'Courant'){
    return true;
  }
  return false;

  }
  handleOperation()
  {
    
    
   if(this.selectedLink === 'Courant'){
      this.service.creerCompteCourant(this.username,this.solde,this.decouvert).subscribe(
        data => {
          console.log(data)
         // this.router.navigate(['help'])
        }
        
        
      );
    }
    else{
      this.service.creerCompteEpargne(this.username,this.solde,this.taux).subscribe(
        data => {
         // console.log(data)
         // this.router.navigate(['help'])
        }
      );
      
    }
  }
  

}
