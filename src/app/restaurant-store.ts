export class RestaurantStore {
    inFavourite: boolean;
    name: string;

    constructor (inBool: boolean, inString: string){
        this.inFavourite = inBool;
        this.name = inString;
    }
}