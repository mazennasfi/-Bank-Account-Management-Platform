import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from 'src/app/list-comptes/list-comptes.component';
import { Operation } from 'src/app/list-operations/list-operations.component';





@Injectable({
  providedIn: 'root'
})
export class CompteDataService {

  constructor(private http:HttpClient) { }
  creerCompteCourant(name,solde,decouvert)
  {
    return this.http.post(`http://localhost:8080/${name}/compte/${solde}/courant/${decouvert}`,{})
  }
  creerCompteEpargne(name,solde,taux)
  {
    return this.http.post(`http://localhost:8080/${name}/compte/${solde}/epargne/${taux}`,{})
  }
  executeListComptesBeanService(name){
   return this.http.get<Compte[]>(`http://localhost:8080/comptes/${name}`)
 
    
  }
 
  
  executeAfficherBeanService(codeCompte){
    return this.http.get<Operation[]>(`http://localhost:8080/${codeCompte}/operations`)

  }
}
