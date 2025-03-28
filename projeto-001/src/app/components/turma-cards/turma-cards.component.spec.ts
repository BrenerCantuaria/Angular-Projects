import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaCardsComponent } from './turma-cards.component';

describe('TurmaCardsComponent', () => {
  let component: TurmaCardsComponent;
  let fixture: ComponentFixture<TurmaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurmaCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurmaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
