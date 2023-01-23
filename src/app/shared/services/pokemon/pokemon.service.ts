import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { PokemonList, PokemonStatus } from "../../models/pokemon.model";

@Injectable({
    providedIn: 'root',
})
export class PokemonService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<PokemonList> {
        return this.http.get<PokemonList>('pokemon?limit=100').pipe(
            tap(data => {
                data?.results.map(pokemonData => {

                    this.getById(pokemonData.name)
                    .subscribe(pokemonInfo => pokemonData.status = pokemonInfo);

                    this.getSpecies(pokemonData.name)
                    .subscribe(pokemonDescription => pokemonData.species = pokemonDescription)

                    // this.getEvolutionChain(pokemonData.species.evolution_chain_url)
                    // .subscribe(pokemonEvolution => pokemonData.evolution = pokemonEvolution)
                })
            })
        )
    };

    getById(id: number | string): Observable<PokemonStatus> {
        return this.http.get<PokemonStatus>(`pokemon/${id}`)
    };

    getSpecies(id: number | string): Observable<any> {
        return this.http.get<any>(`pokemon-species/${id}`).pipe(
            map(data => {
                return {description: data.flavor_text_entries[0].flavor_text, evolution_chain_url: data.evolution_chain.url}
            })
        )
    };

    getEvolutionChain(id: number | string): Observable<any> {
        return this.http.get<any>(`evolution-chain/${id}`)
    }
}