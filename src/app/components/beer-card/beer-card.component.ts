import { Component, input, Input, InputSignal } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { __values } from 'tslib';

@Component({
  selector: 'app-beer-card',
  imports: [],
  templateUrl: './beer-card.component.html',
  styleUrl: './beer-card.component.css'
})
export class BeerCardComponent {

beer: InputSignal<Beer> = input( new Beer()); 

}
