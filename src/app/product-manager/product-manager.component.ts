
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products : Product[];
  prodcuct : Product;
  constructor(
    private productService : ProductService,
    private router : Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
    this.productService.getProducts().subscribe(data => {
        this.products = data;
    })
  }
  
  removeProduct(id){
    this.productService.removeProduct(id).subscribe();
    let index=this.products.findIndex(a => a.id ===id);
    this.products.splice(index,1);
    this.router.navigate(['/product-manager']);
    // this.products =  this.productService.removeProduct(id);
  }
}
