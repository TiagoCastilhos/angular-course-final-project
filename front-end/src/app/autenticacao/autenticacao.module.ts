import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { AutenticacaoAppComponent } from './autenticacao.app.component';

import { AutenticacaoRoutingModule } from './autenticacao.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CadastroComponent, 
    LoginComponent,
    AutenticacaoAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AutenticacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AutenticacaoModule { }