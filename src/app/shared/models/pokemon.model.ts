export enum PokemonStatistic {
    HP = 'hp',
    ATK = 'attack',
    DEF = 'defense',
    SpA = 'special-attack',
    SpD = 'special-defense',
    SPD = 'speed',
    TOT = 'total',
};

export const PokemonStatisticLabels = {
    [PokemonStatistic.HP]: 'HP',
    [PokemonStatistic.ATK]: 'ATK',
    [PokemonStatistic.DEF]: 'DEF',
    [PokemonStatistic.SpA]: 'SpA',
    [PokemonStatistic.SpD]: 'SpD',
    [PokemonStatistic.SPD]: 'SPD',
    [PokemonStatistic.TOT]: 'TOT',
}

export interface PokemonList {
    count: number,
    next: string,
    previous: string,
    results: PokemonInfo[],
}

export interface PokemonInfo {
    species: {
        description: string,
        evolution_chain_url: string,
    },
    name: string,
    url: string,
    status?: PokemonStatus,
    evolution: {
        preview: {
            img: string,
            name: string,
            url: string,
        }
        next: {
            img: string,
            name: string,
            url: string,
        }
    }
}

export interface PokemonStatus {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: {
        is_hidden: boolean,
        slot: number,
        ability: {
            name: string,
            url: string,
        },
    }[],
    stats: {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string,
        },
    }[],
    sprites: {
        other: {
            dream_world: {
                front_default: string,
                front_female: string,
            }
        }
    },
    types: {
        slot: number,
        type: {
            name: string,
            url: string,
        },
    }[],
}