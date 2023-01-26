import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { PokemonList, PokemonStatus } from "../../models/pokemon.model";

@Injectable({
    providedIn: 'root',
})
export class PokemonService {

    constructor(private http: HttpClient) {}

    getAll(offset: number, limit?: number): Observable<PokemonList> {
        return this.http.get<PokemonList>(`pokemon?offset=${offset}&limit=${limit ? limit : 100}`)
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