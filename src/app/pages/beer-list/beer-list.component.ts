import { Component, computed, inject, model, signal } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { BeerService } from '../../services/beer/beer.service';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { BeerCardComponent } from '../../components/beer-card/beer-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beer-list',
  imports: [CommonModule, BeerCardComponent, SearchBarComponent],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css'
})


export class BeerListComponent {

    BeerService = inject(BeerService);
  
    beer = signal<Beer[]>([]);
    search = model("");
  
    filteredBeers = computed(()=> {
      return this.beer().filter(beer => beer.name.toLowerCase().includes(this.search().toLowerCase()))
    })
  
    constructor() {
      this.beer.set(this.BeerService.getAll());
    }
  
  
    addBeer(){
      const genericBeer = new Beer();
      this.BeerService.add(genericBeer);
      this.beer.set(this.BeerService.getAll());
    }
    
}
