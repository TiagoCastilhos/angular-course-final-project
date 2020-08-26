import { Produto, Fornecedor } from '../../models/produto';
import { Observable } from 'rxjs';

export class ProdutoServiceMock {
  obterTodos(): Observable<Produto[]> {
    return new Observable<Produto[]>();
  }

  obterPorId(id: string): Observable<Produto> {
    return new Observable<Produto>();
  }

  novoProduto(produto: Produto): Observable<Produto> {
    return new Observable<Produto>();
  }

  atualizarProduto(produto: Produto): Observable<Produto> {
    return new Observable<Produto>();
  }

  excluirProduto(id: string): Observable<Produto> {
    return new Observable<Produto>();
  }

  obterFornecedores(): Observable<Fornecedor[]> {
    return new Observable<Fornecedor[]>();
  }
}