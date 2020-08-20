import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, Router } from '@angular/router';
import { CadastroComponent } from '../../cadastro/cadastro.component';
import { LocalStorage } from 'src/app/core/local-storage';

@Injectable()
export class AutenticacaoGuard implements CanDeactivate<CadastroComponent>, CanActivate {
  private localStorage = new LocalStorage();

  constructor(private router: Router) { }

  canDeactivate(component: CadastroComponent) {
    if (component.mudancasNaoSalvas)
      return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');

    return true;
  }

  canActivate() {
    if (this.localStorage.obterUsuario()) {
      this.router.navigate(['/home']);
    }

    return true;
  }
}
