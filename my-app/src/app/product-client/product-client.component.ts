import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { Category } from '../types/Category';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-client',
  templateUrl: './product-client.component.html',
  styleUrls: ['./product-client.component.css']
})
export class ProductClientComponent implements OnInit {

  _id: string
  products: Product[]
  category: Category[]
  constructor(
    private productService : ProductService,
    private categoryService : CategoryService,
    private router : Router,
    private activateRoute : ActivatedRoute
  ) { 
    this.products = [];
    this.category = [];
    this._id = '';
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
  }

}
