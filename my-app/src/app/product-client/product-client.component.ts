import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-client',
  templateUrl: './product-client.component.html',
  styleUrls: ['./product-client.component.css']
})
export class ProductClientComponent implements OnInit {

  _id: string
  products: Product[]
  constructor(
    private productService : ProductService,
    private router : Router,
    private activateRoute : ActivatedRoute
  ) { 
    this.products = [];
    this._id = '';
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

}
