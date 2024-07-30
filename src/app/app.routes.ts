import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pokemon/:pokemonSlug',
    component: PokemonDetailComponent,
  },
  {
    path: 'about-us',
    loadChildren: () => {
      return import('./modules/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      );
    },
  },
];
