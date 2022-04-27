export type RootStackParams = {
    Episodes: {
        id?: string;
    } | undefined;
    Home: {
        id?: string;
    } | undefined;
    Personal: {
        id?: string,
        username?:string;
        favoriteType?:'characters'|'episodes';
    } | undefined;
    Character: {
        id?: string;
        name?:string;
    } | undefined;
    Episode: {
        id?: string;
    } | undefined;
    Favorites: {
        id?: 'character'|'episode';
    } | undefined;
    Tab: {
        id?: string;
    } | undefined;
    Signup: {
        id?: string;
    } | undefined;
    Login: {
        id?: string;
    } | undefined;

}