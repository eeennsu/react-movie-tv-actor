import { Genre, Keyword, Language, ProductionCountry } from './commonTypes';

export interface LatestTvInfo {
    backdrop_path: string;
    genres: Genre[];
    next_episode_to_air: {
        air_date: string;
    };
    name: string;
}

export interface LeastTvInfo {
    id: number;
    poster_path: string;
    name: string;
    vote_average: number;
}

export interface DetailTv extends LeastTvInfo {
    genres: Genre[];
    homepage: string;
    first_air_date: string;
    in_production: boolean;
    last_air_date: string;
    original_language: string;
    number_of_seasons: number;
    number_of_episodes: number;
    origin_country: string[];
    original_name: string;
    overview: string;
    popularity: number;
    vote_count: number;
    type: string;
    backdrop_path: string;
    spoken_languages: Language[];
    production_countries: ProductionCountry[];
}

export interface TvListResponse {
    page: number;
    total_pages: number;
    total_results: number;
    results: LeastTvInfo[];
}

export interface TvKeywordsResponse {
    id: number;
    results: Keyword[];
}

export interface SearchTvResponse {
    page: number;
    results: DetailTv[];
    total_pages: number;
    total_results: number;
}
