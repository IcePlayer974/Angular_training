import { bootstrapApplication } from '@angular/platform-browser';
import { Component, computed, effect, signal } from '@angular/core';
import { BeerCardComponent } from "./components/beer-card/beer-card.component";
import { Beer } from './models/beer.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { BeerType } from './utils/beer.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BeerCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  beer!: Beer[];
  count: number = 0;
  search = "";

  selectedBeerIndex = signal(0);
  selectedBeer = computed(()=>{
    return this.beer[this.selectedBeerIndex()];
  })

  constructor() {

    effect(() =>{
      console.log(this.selectedBeer());
    })


    this.beer = [];

    const beer1 = new Beer();
    beer1.name = "DELIRIUM";
    beer1.quanity = 50;
    beer1.figureCaption = "Delirium Blonde";
    beer1.attackName = "Elephant";
    beer1.attackStrength = 60;
    beer1.attackDescription = "Warning if you drink so mutch we going to see pink Elephants in the real life";
    this.beer.push(beer1);

    const beer2 = new Beer();
    beer2.name = "ANOSTEKE-IPA";
    beer2.image ="img/Anosteke_ipa.png";
    beer2.type = BeerType.IPA;
    beer2.figureCaption = "Anosteke-IPA";
    beer2.attackName = "Delicious Beer";
    beer2.attackStrength = 80;
    beer2.attackDescription = "Warning if you drink this delicious beer you can't stop !";
    this.beer.push(beer2);
  }

  increaseCount(){
    this.count ++ ;
  }

  toggleBeer(){
    this.selectedBeerIndex.set((this.selectedBeerIndex() +1) %this.beer.length);
  }
}
