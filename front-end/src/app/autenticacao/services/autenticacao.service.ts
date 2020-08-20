import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from '../../services/base.service';

@Injectable()
export class AutenticacaoService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post(`${this.urlServiceV1}/nova-conta`, usuario, this.obterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError));
  }

  login(usuario: Usuario) {
    return this.http.post(`${this.urlServiceV1}/entrar`, usuario, this.obterHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError));
  }
}