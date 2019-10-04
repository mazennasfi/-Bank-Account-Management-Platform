import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { ListOperationsComponent } from './list-operations/list-operations.component';
import { LogoutComponent } from './logout/logout.component';
import { OperationDoneComponent } from './operation-done/operation-done.component';
import { Home1Component } from './home1/home1.component';
import { HelpComponent } from './help/help.component';
import { CompteComponent } from './compte/compte.component';
import { ClientsComponent } from './clients/clients.component';
import { PreOperationComponent } from './pre-operation/pre-operation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    ListComptesComponent,
    ListOperationsComponent,
    LogoutComponent,
    OperationDoneComponent,
    Home1Component,
    HelpComponent,
    CompteComponent,
    ClientsComponent,
    PreOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
