import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBarComponent, ClickOutsideDirective],
  imports: [CommonModule, FormsModule],
  exports: [SearchBarComponent],
})
export class SearchModule {}
