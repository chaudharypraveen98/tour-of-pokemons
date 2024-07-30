import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeId',
  standalone: true
})
export class PokeIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
