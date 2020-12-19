export class ContestantModelServer {
    id: number;
    fname: string;
    lname: string;
    age: number;
    description: string;
    image: string;
    images: string;

}



export interface ContestantServerResponse{
    count:number;
    contestants: ContestantModelServer[]
}

