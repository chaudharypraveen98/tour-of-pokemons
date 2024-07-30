import { Observable } from 'rxjs';
import { PaginationsParams, PokemonResponse } from '../../../types';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private apiService: ApiService) {}

  getPokemons(
    url: string,
    params: PaginationsParams
  ): Observable<PokemonResponse> {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }
  getPokemon(url: string): Observable<PokemonResponse> {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  }
}
