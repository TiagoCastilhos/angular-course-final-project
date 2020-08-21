import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { LocalStorage } from 'src/app/core/local-storage';
import { NovoComponent } from '../../novo/novo.component';

@Injectable()
export class FornecedorGuard implements CanActivate, CanDeactivate<NovoComponent> {

    localStorageUtils = new LocalStorage();

    constructor(private router: Router) { }

    canDeactivate(component: NovoComponent) {
        if(component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
        }        
        return true
    }

    canActivate(routeAc: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (!this.localStorageUtils.obterTokenUsuario()) {
            this.router.navigate(['/conta/login']);
        }

        let user = this.localStorageUtils.obterUsuario();
        let claim: any = routeAc.data[0];

        if (claim !== undefined) {
            let claim = routeAc.data[0]['claim'];

            if (claim) {
                if (!user.claims) {
                    this.navegarAcessoNegado();
                }

                let userClaims = user.claims.find(x => x.type === claim.nome);

                if (!userClaims) {
                    this.navegarAcessoNegado();
                }

                let valoresClaim = userClaims.value as string;

                if (!valoresClaim.includes(claim.valor)) {
                    this.navegarAcessoNegado();
                }
            }
        }

        return true;
    }

    navegarAcessoNegado() {
        this.router.navigate(['/acesso-negado']);
    }
}