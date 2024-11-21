import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ProductsComponent } from '../products/products.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent,NavigationBarComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
