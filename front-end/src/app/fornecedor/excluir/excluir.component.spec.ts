import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirComponent } from './excluir.component';
import { ProdutoService } from 'src/app/produto/services/produto.service';
import { ProdutoServiceMock } from './../../produto/test/mocks/produto-service-mock';

describe('ExcluirComponent', () => {
  let component: ExcluirComponent;
  let fixture: ComponentFixture<ExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirComponent],
      providers: [
        { provide: ProdutoService, useClass: ProdutoServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

