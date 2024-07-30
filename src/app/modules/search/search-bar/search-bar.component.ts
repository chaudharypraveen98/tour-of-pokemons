import { Component, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { SearchPokemonListItem } from '../../../../../types';
import { PokemonsService } from '../../../services/pokemons.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchQuery = '';
  searchResults: SearchPokemonListItem[] = [];
  pokemons: SearchPokemonListItem[] = [];
  showModal = false;
  @ViewChild('op') overlayPanel!: OverlayPanel;
  constructor(private pokemonService: PokemonsService) {}

  ngOnInit() {
    this.searchResults = [];
    this.getPokemonData();
    console.log('pok', this.pokemons);
  }
  onOutsideClick(event: MouseEvent): void {
    this.showModal = false;
  }

  onSearchQueryChanges(searchQuery: any) {
    console.log('query', searchQuery);
    if (searchQuery.length > 0) {
      this.searchPokemons();
      this.showModal = true;
    } else {
      this.showModal = false;
      this.searchResults = [];
    }
  }
  getIdFromUrl(url: string) {
    const number = url.split('/').at(-2);
    if (number !== undefined && !isNaN(Number(number))) {
      return parseInt(number);
    }
    return 1;
  }
  getPokemonData() {
    this.pokemonService
      .getPokemons('https://pokeapi.co/api/v2/pokemon', {
        limit: 10000,
        offset: 0,
      })
      .subscribe((data) => {
        let formattedData: SearchPokemonListItem[] = [];
        data.results?.forEach((item) => {
          const id = this.getIdFromUrl(item.url);
          formattedData.push({
            name: item.name,
            id,
          });
        });
        this.pokemons = formattedData;
      });
  }

  searchPokemons(): void {
    const term = this.searchQuery.toLowerCase();
    this.searchResults = this.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term)
    );
    console.log('sear', this.searchResults);
  }
}
