export interface Props{
    name:string;
    image:string;
    species: string;
    location: string;
    status: string;
    id: number;
    removeCharacter:(id:number)=>void
}