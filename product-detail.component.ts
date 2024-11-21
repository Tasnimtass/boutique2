import { Component, Input, input } from '@angular/core';
import { Produit } from '../shared/models/produit';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input('msg') Mymsg :any 
  @Input("produit") prod:any
}
