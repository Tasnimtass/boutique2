import { Component } from '@angular/core';
import{CATALOGUE} from'../shared/mock-data/catalogue-produit';
 
import { CommonModule } from '@angular/common';
import { Produit } from '../shared/models/produit';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  title = "Liste des produits" ;
  produit = CATALOGUE ;
  selectedPtoduct: Produit | undefined;

  showalert(prod:Produit){
    this.selectedPtoduct=prod;
  }
  solde(prod: Produit): number {
    if (typeof prod.prix === 'number') {
      return prod.prix - (prod.prix * (prod.solde / 100));
    } else {
      return 0; 
  }
}
backfit(prod:Produit){
  prod.image=prod.image2 ;

}
frontfit(prod:Produit){
  prod.image=prod.image1;
}
msg="Salut, je suis ton père !";
prod =this.produit[0];//commencer lecriture apartir de 1ere produit 

}

