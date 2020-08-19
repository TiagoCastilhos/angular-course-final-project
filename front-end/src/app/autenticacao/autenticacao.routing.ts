import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoAppComponent } from "./autenticacao.app.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: '', component: AutenticacaoAppComponent, children: [
            { path: 'cadastro', component: CadastroComponent },
            { path: 'login', component: LoginComponent },
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