import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor(private http:HttpClient) { }
  
  listerClients(){
    return this.http.get<Client[]>(`http://localhost:8080/lesClients`)
   }
  executeListClientsBeanService(name){
    return this.http.get<Client>(`http://localhost:8080/clients/${name}`)
  
     
   }
   
}
