import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SearchModule } from '../../modules/search/search.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RouterModule, SearchModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  sidebarVisible = false;
}
