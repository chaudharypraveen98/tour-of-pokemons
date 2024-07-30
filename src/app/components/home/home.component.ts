import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonListItem } from '../../../../types';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component';
import { PokemonCardItemComponent } from '../pokemon-card-item/pokemon-card-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PokemonCardItemComponent,
    CommonModule,
    PaginatorModule,
    DataViewModule,
    ButtonModule,
    PokemonListItemComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private pokemonService: PokemonsService) {}
  limit: number = 10;
  total: number = 0;
  pokemons: PokemonListItem[] = [];
  layout: 'list' | 'grid' = 'list';

  ngOnInit() {
    this.getPokemonData(0);
  }

  changeLayout(layout: 'list' | 'grid') {
    this.layout = layout;
  }

  getIdFromUrl(url: string) {
    const number = url.split('/').at(-2);
    if (number !== undefined && !isNaN(Number(number))) {
      return parseInt(number);
    }
    return 1;
  }
  onPageChange(event: any) {
    if (event.rows !== this.limit) {
      this.limit = event.rows;
    }
    this.getPokemonData(event.page * this.limit);
  }
  getPokemonData(offset: number) {
    this.pokemonService
      .getPokemons('https://pokeapi.co/api/v2/pokemon', {
        limit: this.limit,
        offset: offset,
      })
      .subscribe((data) => {
        let formattedData: PokemonListItem[] = [];
        data.results?.forEach((item) => {
          const id = this.getIdFromUrl(item.url);
          const slug = id ? id.toString().padStart(3, '0') : '000';
          formattedData.push({
            name: item.name,
            url: item.url,
            id,
            slug,
          });
        });
        this.pokemons = formattedData;
        this.total = data.count;
      });
  }
}
