import { Component, Input } from '@angular/core';
import { PokemonListItem } from '../../../../types';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-card-item',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, RouterModule],
  templateUrl: './pokemon-card-item.component.html',
  styleUrl: './pokemon-card-item.component.scss',
})
export class PokemonCardItemComponent {
  @Input() pokemon!: PokemonListItem;
}
