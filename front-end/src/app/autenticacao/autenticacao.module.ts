import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { AutenticacaoAppComponent } from './autenticacao.app.component';

import { AutenticacaoRoutingModule } from './autenticacao.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ngx-custom-validators';

import { AutenticacaoService } from './services/autenticacao.service';
import { AutenticacaoGuard } from './services/guards/autenticacao.guard';

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
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    AutenticacaoService,
    AutenticacaoGuard
  ]
})
export class AutenticacaoModule { }