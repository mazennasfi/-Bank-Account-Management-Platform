import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operation } from 'src/app/list-operations/list-operations.component';
import { Compte } from 'src/app/list-comptes/list-comptes.component';

@Injectable({
  providedIn: 'root'
})
export class OperationDataService {

  constructor(private http:HttpClient) { }
  listerOperations(codeCompte){
   return this.http.get<Operation[]>(`http://localhost:8080/operations/${codeCompte}`)
 
    
  }
  executeVersement(codeCompte,montant)
  {
    return this.http.post(`http://localhost:8080/comptesVers/${codeCompte}/${montant}`,{})
  }
  executeRetrait(codeCompte,montant)
  {
    return this.http.post(`http://localhost:8080/comptesRet/${codeCompte}/${montant}`,{})
  }
  executeVirement(codeCompte,codeCompte2,montant)
  {
    return this.http.post(`http://localhost:8080/comptesVir/${codeCompte}/${montant}/${codeCompte2}`,{})
  }

}