import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ClientDataService } from '../service/data/client-data.service';
import { Router } from '@angular/router';
import { Client } from '../login/login.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:Client[]

  constructor(private hardcodedAuthentication: HardcodedAuthenticationService, private router: Router,private service: ClientDataService) { }

  ngOnInit() {
    this.service.listerClients().subscribe(
      response => {

        console.log(response);
        this.clients = response;


      }
    )

}

}
