import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, TagModule, ProgressBarModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent {
  constructor(
    private pokemonService: PokemonsService,
    private route: ActivatedRoute
  ) {}
  pokemonSlug: string = '';
  pokemon: any = {};
  pokemonTypeColors: { [key: string]: string } = {
    normal: '#A8A77A',
    fighting: '#C22E28',
    flying: '#A98FF3',
    poison: '#A33EA1',
    ground: '#E2BF65',
    rock: '#B6A136',
    bug: '#A6B91A',
    ghost: '#735797',
    steel: '#B7B7CE',
    fire: '#EE8130',
    water: '#6390F0',
    grass: '#7AC74C',
    electric: '#F7D02C',
    psychic: '#F95587',
    ice: '#96D9D6',
    dragon: '#6F35FC',
    dark: '#705746',
    fairy: '#D685AD',
    unknown: '#68A090',
    shadow: '#404040',
  };
  progressOptions: any = {
    radius: 100,
    thickness: 10,
    outerCircle: true,
    innerCircle: true,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    innerStrokeColor: '#C7E596',
    outerStrokeColor: '#78C000',
    animation: true,
    animationDuration: 1000,
  };
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('pokemonSlug');
      console.log('slug', slug);
      this.pokemonSlug = slug !== null ? slug : '';
    });
    console.log('this.pokemonSlug', this.pokemonSlug);
    this.getPokemonData(this.pokemonSlug);
  }

  getTypeStyle(typeName: string) {
    const backgroundColor =
      this.pokemonTypeColors[typeName.toLowerCase()] ||
      this.pokemonTypeColors['unknown'];
    const color = this.isColorLight(backgroundColor) ? 'black' : 'white';
    return { 'background-color': backgroundColor, color: color };
  }

  isColorLight(color: string) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155; // You can adjust this threshold
  }
  getPokemonData(pokemonName: string) {
    this.pokemonService
      .getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .subscribe((data) => {
        console.log('data', data);
        this.pokemon = data;
      });
  }
}
