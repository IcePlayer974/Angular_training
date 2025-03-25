import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { BeerCardComponent } from "./components/beer-card/beer-card.component";
import { Beer } from './models/beer.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BeerCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  beer1!: Beer;
  count: number = 0;

  constructor() {
    this.beer1 = new Beer();
    this.beer1.name = "DELIRIUM";
    this.beer1.quanity = 50;
    this.beer1.figureCaption = "Delirium Blonde";
    this.beer1.attackName = "Elephant";
    this.beer1.attackStrength = 60;
    this.beer1.attackDescription = "Warning if you drink so mutch we going to see pink Elephants in the real life";
  }

  increaseCount(){
    this.count ++ ;
  }
}
