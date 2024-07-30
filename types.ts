import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface PaginationsParams {
  [params: string]:
    | boolean
    | string
    | number
    | ReadonlyArray<string | number | boolean>;
  limit: number;
  offset: number;
}

export interface PokemonResponse {
  results?: PokemonListItem[] | null;
  count: number;
  skip: number;
  limit: number;
}
export interface PokemonListItem {
  name: string;
  url: string;
  id: number;
  slug: string;
}
export interface SearchPokemonListItem {
  name: string;
  id: number;
}
