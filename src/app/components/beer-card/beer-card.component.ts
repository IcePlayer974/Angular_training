import { BeerTypeProperties } from './../../utils/beer.utils';
import { Component, computed, input, Input, InputSignal, OnChanges, SimpleChanges } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { __values } from 'tslib';

@Component({
  selector: 'app-beer-card',
  imports: [],
  templateUrl: './beer-card.component.html',
  styleUrl: './beer-card.component.css'
})
export class BeerCardComponent {

  beer = input(new Beer());
  beerTypeIcon = computed(()=>{
    return BeerTypeProperties[this.beer().type].imageUrl
  });
  backgroundColor = computed(()=>{
    return BeerTypeProperties[this.beer().type].color
  })

}
