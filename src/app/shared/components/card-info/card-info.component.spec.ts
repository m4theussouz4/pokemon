import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardInfoComponent } from './card-info.component';
import { AppFacade } from '../../../+state/app.facade';
import { of } from 'rxjs';

describe('CardInfoComponent', () => {
  let component: CardInfoComponent;
  let fixture: ComponentFixture<CardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInfoComponent ],
      providers: [
        {
          provide: AppFacade,
          useValue: {
            pokemonWeaknesses$: of({})
          }
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
