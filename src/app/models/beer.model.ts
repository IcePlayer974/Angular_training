import { BeerType } from "../utils/beer.utils";

export class Beer {
    
    name: string = "My beer";
    image: string = "img/delirium.png";
    type: BeerType = BeerType.BLONDE;
    quanity: number = 50 ;
    figureCaption: string = "This Beer";
    
    attackName: string = "Drunk Man";
    attackStrength: number = 60;
    attackDescription: string = "Warning if you drink so mutch this attack make you 200 damage !!!"
}