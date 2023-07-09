import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainContainerComponent } from './main-container.component';
import { AppFacade } from '../../+state/app.facade';
import { PokemonService } from '../../shared/services/pokemon/pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ScannedActionsSubject } from '@ngrx/store';

describe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MainContainerComponent],
      providers: [
        PokemonService,
        ScannedActionsSubject,
        {
          provide: AppFacade,
          useValue: {
            loadPokemonList: () => {},
          }
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
