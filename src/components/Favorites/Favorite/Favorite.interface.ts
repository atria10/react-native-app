export interface FavoriteCharacter{
    name:string;
    image:string;
    species: string;
    location: string;
    status: string;
    id: number;
}
export interface FavoriteEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url?: string;
    created: Date;
}
export interface FavoriteInterface{
    favorite:FavoriteCharacter|FavoriteEpisode;
    type:string|undefined;
}