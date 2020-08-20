import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoAppComponent } from "./autenticacao.app.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { AutenticacaoGuard } from './services/guards/autenticacao.guard';

const routes: Routes = [
    {
        path: '', component: AutenticacaoAppComponent, children: [
            { path: 'cadastro', component: CadastroComponent, canActivate: [ AutenticacaoGuard ], canDeactivate: [ AutenticacaoGuard ] },
            { path: 'login', component: LoginComponent, canActivate: [ AutenticacaoGuard ] },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AutenticacaoRoutingModule { }