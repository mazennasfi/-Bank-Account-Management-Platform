import { Component, OnInit } from '@angular/core';
import { OperationDataService } from '../service/data/operation-data.service';
import { ActivatedRoute } from '@angular/router';
import { Compte } from '../list-comptes/list-comptes.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

export class Operation{
  constructor(public numero:number, public dateOperation:Date, public montant:number,public typeO:string) { }

}
@Component({
  selector: 'app-list-operations',
  templateUrl: './list-operations.component.html',
  styleUrls: ['./list-operations.component.css']
})
export class ListOperationsComponent implements OnInit {
  operations : Operation[]
  
  constructor(private service:OperationDataService,private hardcodedAuthentication:HardcodedAuthenticationService) { }

  ngOnInit() {
    this.service.listerOperations(sessionStorage.getItem('codeCompte')).subscribe(
      response => {
        console.log(response);
        this.operations=response;
        
      }
    )
  }

}
