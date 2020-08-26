import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesComponent } from './detalhes.component';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

describe('DetalhesComponent', () => {
  let component: DetalhesComponent;
  let fixture: ComponentFixture<DetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesComponent ],
      providers: [ ActivatedRoute, DomSanitizer ]
    })
    .compileComponents(); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
