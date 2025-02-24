import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAlunoModalComponent } from './cadastrar-aluno-modal.component';

describe('CadastrarAlunoModalComponent', () => {
  let component: CadastrarAlunoModalComponent;
  let fixture: ComponentFixture<CadastrarAlunoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarAlunoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAlunoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
