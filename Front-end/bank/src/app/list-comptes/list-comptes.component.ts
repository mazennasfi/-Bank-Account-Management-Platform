import { Component, OnInit } from '@angular/core';
import { CompteDataService } from '../service/data/compte-data.service';
import { Router } from '@angular/router';
import { Operation } from '../list-operations/list-operations.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { OperationDataService } from '../service/data/operation-data.service';
import { ThrowStmt } from '@angular/compiler';

export class Compte {
  constructor(public codeCompte: number, public solde: number, public dateCreation: Date, public decouvert: number, public taux: number, public type: string) { }

}
@Component({
  selector: 'app-list-comptes',
  templateUrl: './list-comptes.component.html',
  styleUrls: ['./list-comptes.component.css']
})

export class ListComptesComponent implements OnInit {
  comptes: Compte[];
  name: string = '';
  operations: Operation[]
  selectedLink: string = "Versement";

  compte: Compte;
  montant = 0;
  montant1 = 0;
  montant2 = 0;
  codeCompte2: string;

  codeCompte2a: string;
  codeCompte2b: string;

  

  constructor(private service: CompteDataService, private router: Router, private hardcodedAuthentication: HardcodedAuthenticationService, private service2: OperationDataService) { }

  ngOnInit() {

    this.service.executeListComptesBeanService(sessionStorage.getItem('user')).subscribe(
      response => {

        console.log(response);
        this.comptes = response;


      }
    )

    
  }
  setradio(e: string): void {

    this.selectedLink = e;

  }
 
  bool1(comptex: Compte): boolean {

    if (comptex.type == "CC") {

      return true;

    } else {
      return false;

    }
  }
  bool(): boolean {
    if (this.selectedLink == "Virement") {
      return true;
    }
    return false;

  }
  handleOperation(codeCompte) {
    this.montant = Math.max(this.montant1, this.montant2)
    if (this.selectedLink == "Versement") {
      this.service2.executeVersement(codeCompte, this.montant).subscribe(
        (res) => {
          this.comptes.map(
            (compte) => {
              if (compte.codeCompte == codeCompte) {
                compte.solde += Number(this.montant);
                this.montant = 0;
                this.montant1 = 0;
                this.montant2 = 0;
                this.selectedLink = ""
                

              }
            }
          )

        },
        (err) => console.log(err)
      );

    }
    else if (this.selectedLink == "Retrait") {

      this.service2.executeRetrait(codeCompte, this.montant).subscribe(
        (res) => {
          this.comptes.map(
            (compte) => {
              if (compte.codeCompte == codeCompte) {
                compte.solde -= Number(this.montant);
                this.montant = 0;
                this.montant1 = 0;
                this.montant2 = 0;
                this.selectedLink = ""
              }
            }
          )

        },
        (err) => console.log(err)
      );


    }
    else if (this.selectedLink == "Virement") {
      this.codeCompte2=this.codeCompte2a||this.codeCompte2b;
      this.service2.executeVirement(codeCompte, this.codeCompte2, this.montant).subscribe(
        (res) => {
          this.comptes.map(
            (compte) => {
              if (compte.codeCompte == codeCompte) {
                compte.solde -= Number(this.montant);
                this.montant = 0;
                this.montant1 = 0;
                this.montant2 = 0;
                this.selectedLink = ""
              }
            }
          )

        },
        (err) => console.log(err)
      );

    }
  }


}
