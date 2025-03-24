import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmadetalhesComponent } from './turmadetalhes.component';

describe('TurmadetalhesComponent', () => {
  let component: TurmadetalhesComponent;
  let fixture: ComponentFixture<TurmadetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurmadetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurmadetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
