import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/types/Category';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  category: Category[]
  constructor(private productService: ProductService,
    private CategoryService: CategoryService
    ) { 
    this.products = [];
    this.category = []
  }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.CategoryService.getCategory().subscribe((data) =>{
      this.category = data;
    })
    this.productService.getProducts().subscribe((data) =>{
      this.products = data;
    })
  }
  onDelete(_id:string){
    const confirm = window.confirm("Bạn chắc chắn muốn xóa ?")
    if (confirm && _id) {
      this.productService.deleteProduct(_id).subscribe((data) =>{
        console.log(data);
        this.onGetList();
        
      })
    }
  }


}
