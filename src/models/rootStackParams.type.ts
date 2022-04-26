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
    } | undefined;
    Character: {
        id?: string;
        name?:string;
    } | undefined;
    Episode: {
        id?: string;
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