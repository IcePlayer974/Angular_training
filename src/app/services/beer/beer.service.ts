import { Injectable, inject } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { BeerType } from '../../utils/beer.utils';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  beer: Beer[]= [];
  currentIndex: number = 1 ;

  constructor() {
    this.load();
  }

  private save(){
    localStorage.setItem('beer', JSON.stringify(this.beer));
  }

  private load(){
    const beerData = localStorage.getItem('beer');
    if (beerData){
      this.beer = JSON.parse(beerData).map((beerJSON: any) => Object.assign(new Beer(), beerJSON));
      this.currentIndex = Math.max(...this.beer.map(beer => beer.id));
    } else{
      this.init();
      this.save();
    }
  }

  private init() {

    this.beer = [];

    const beer1 = new Beer();
    beer1.id = this.currentIndex++;
    beer1.name = "DELIRIUM";
    beer1.quanity = 50;
    beer1.figureCaption = "Delirium Blonde";
    beer1.attackName = "Elephant";
    beer1.attackStrength = 60;
    beer1.attackDescription = "Warning if you drink so mutch we going to see pink Elephants in the real life";
    this.beer.push(beer1);

    const beer2 = new Beer();
    beer2.id = this.currentIndex++;
    beer2.name = "ANOSTEKE-IPA";
    beer2.image ="img/Anosteke_ipa.png";
    beer2.type = BeerType.IPA;
    beer2.figureCaption = "Anosteke-IPA";
    beer2.attackName = "Delicious Beer";
    beer2.attackStrength = 70;
    beer2.attackDescription = "Warning if you drink this delicious beer you can't stop ! And became so drunk";
    this.beer.push(beer2);

    const beer3 = new Beer();
    beer3.id = this.currentIndex++;
    beer3.name = "KWAK";
    beer3.image ="img/kwak.png";
    beer3.type = BeerType.AMBREE;
    beer3.figureCaption = "Kwak-Ambrée";
    beer3.attackName = "Air Bubble";
    beer3.attackStrength = 50;
    beer3.attackDescription = "Warning if you drink this delicious beer without paying attention you will end up drowned in the beer !";
    this.beer.push(beer3);

    const beer4 = new Beer();
    beer4.id = this.currentIndex++;
    beer4.name = "KARMELIET";
    beer4.image ="img/TripleK.png";
    beer4.type = BeerType.TRIPLE;
    beer4.figureCaption = "Triple Karmeliet";
    beer4.attackName = "Fluo liver";
    beer4.attackStrength = 80;
    beer4.attackDescription = "Warning if you drink a lot of this beer you wil shine in the darkness ! In green fluo...";
    this.beer.push(beer4);

  }
  getAll(): Beer[] {
    return this.beer.map(beer => beer.copy())
  }

  get(id: number): Beer | undefined {
    const beer = this.beer.find(beer => beer.id === id);
    return beer ? beer.copy() : undefined
  }

  add(beer: Beer): Beer {
    const beerCopy = beer.copy();

    beerCopy.id = this.currentIndex;
    this.beer.push(beerCopy.copy());
    this.currentIndex++;
    this.save();

    return beerCopy;
  }

  update(beer: Beer): Beer {
    const beerCopy = beer.copy();

    const beerIndex = this.beer.findIndex(originalBeer => originalBeer.id === beer.id);
    if (beerIndex != -1) {
      this.beer[beerIndex] = beerCopy.copy();
      this.save();
    }

    return beerCopy;
  }

  delete(id: number) {
    const beerIndex = this.beer.findIndex(originalBeer => originalBeer.id === id);
    if (beerIndex != -1) {
      this.beer.splice(beerIndex, 1);
      this.save();
    }
  }

}
