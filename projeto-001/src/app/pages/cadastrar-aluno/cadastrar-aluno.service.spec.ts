import { TestBed } from '@angular/core/testing';

import { FakeAlunoService } from './cadastrar-aluno.service';

describe('FakeAlunoService', () => {
  let service: FakeAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
