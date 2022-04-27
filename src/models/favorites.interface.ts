export interface Favorite{
    username:string;
    favorite:FavoriteCharacter|FavoriteEpisode;
    type:'character'|'episode';
    // status:boolean;
}
export interface RemoveFavorite{
    username:string;
    favoriteId:number;
    type:'character'|'episode';
    // status:boolean;
}

export interface FavoriteCharacter{
        name:string;
        image:string;
        species: string;
        location: string;
        status: string;
        id: number;
}

export interface FavoriteEpisode{
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url?: string;
    created: Date;
}