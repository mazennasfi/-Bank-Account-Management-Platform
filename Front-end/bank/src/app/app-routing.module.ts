import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { ListOperationsComponent } from './list-operations/list-operations.component';
import { LogoutComponent } from './logout/logout.component';
import { Home1Component } from './home1/home1.component';
import { HelpComponent } from './help/help.component';
import { CompteComponent } from './compte/compte.component';
import { ClientsComponent } from './clients/clients.component';
import { PreOperationComponent } from './pre-operation/pre-operation.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'home/:name', component: HomeComponent },
  { path: 'operations', component: PreOperationComponent },
  { path: 'clients', component: ClientsComponent },
   { path: 'home1/:name', component: Home1Component },
  { path: 'compte', component: CompteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent },
  { path: 'comptes/:name', component: ListComptesComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'operations/:codeCompte', component: ListOperationsComponent },
  { path: 'comptes/:codeCompte', component: ListOperationsComponent },
   { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
