import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';
import { AppFacade } from '../../+state/app.facade';
import { pokemonCardDataMock } from '../../shared/mocks/pokemon.mock';
import { ModalComponent } from '../../shared/components/modal/modal.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [HomeComponent, ModalComponent],
      providers: [
        {
          provide: AppFacade,
          useValue: {
            selectPokemon: () => {},
            loadPokemonList: () => {},
            filterByType: () => {},
            pokemonList$: of([pokemonCardDataMock]),
            pokemonSelected$: of(pokemonCardDataMock),
            hasNextPage$: of({}),
            loaded$: of({}),
            isFilteredList$: of({}),
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal when selecting pokemon and when mobile', () => {
    const openSpy = jest.spyOn(component.pokeModal, 'open');

    component.isMobile = true;
    component.selectPokemon(pokemonCardDataMock);

    expect(openSpy).toHaveBeenCalled();
  });

  it('should load pokemon list when scroll to final', () => {
    const loadPokemonListSpy = jest.spyOn(component['appFacade'], 'loadPokemonList');

    component.onScroll();

    expect(loadPokemonListSpy).toHaveBeenCalled();
  });

  it('should filter list by type', () => {
    const typeMock = { target: { value: 'fire' } }
    const filterByTypeSpy = jest.spyOn(component['appFacade'], 'filterByType');

    component.filterByType(typeMock);

    expect(filterByTypeSpy).toHaveBeenCalledWith('fire');
  });
});
