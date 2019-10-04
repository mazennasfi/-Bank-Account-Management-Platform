import { Injectable } from '@angular/core';
import { ClientDataService } from './data/client-data.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private service:ClientDataService) { }
  
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
