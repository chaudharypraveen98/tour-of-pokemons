import { Component, Input } from '@angular/core';
import { PokemonListItem } from '../../../../types';
import { CommonModule } from '@angular/common';
import { Button, ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list-item',
  standalone: true,
  imports: [CommonModule, ButtonModule, Button, RouterModule],
  templateUrl: './pokemon-list-item.component.html',
  styleUrl: './pokemon-list-item.component.scss',
})
export class PokemonListItemComponent {
  @Input() pokemon!: PokemonListItem;
}
