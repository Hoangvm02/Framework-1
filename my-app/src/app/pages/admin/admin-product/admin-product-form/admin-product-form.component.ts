import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string
  category: Category[]
  constructor(
    private ProductService: ProductService, //cung cấp create cho 
    private CategoryService: CategoryService, //cung cấp create cho 
    private router: Router,  //cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute // lấy ra tham số url
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]),
      price: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      sale_price: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    })
    this.productId = "0";
    this.category = [];
  }

  ngOnInit(): void {
    this.CategoryService.getCategory().subscribe(data => {
      this.category = data
    })
    // lấy id trên url
    this.productId = this.activateRoute.snapshot.params['id'];
    
    this.ProductService.getProduct(this.productId).subscribe(data => {
      // gán giá trị cho 
      console.log(data);
      
      this.productForm.patchValue({
        name: data.name,
        category: data.category,
        price: data.price,
        image: data.image,
        sale_price: data.sale_price,
        value: data.value,
        author: data.author,
        status: data.status,
        desc: data.desc,
      })
    })
  }

  onSubmit() {
    // console.log(this.productForm.value);

    //1: lấy dữ liệu từ form
    const submitData = this.productForm.value;
  
    // this.ProductService.updateProduct(this.productId, submitData).subscribe(data => {
    //   this.router.navigateByUrl('/admin/products');
    //   console.log(data);
      
    // });

    if (this.productId !== '0' && this.productId !== undefined) {
      return this.ProductService.updateProduct(this.productId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
      });
    }
    return this.ProductService.createProduct(submitData).subscribe((data) => {
      this.router.navigateByUrl('/admin/products');
    })
  }
}
