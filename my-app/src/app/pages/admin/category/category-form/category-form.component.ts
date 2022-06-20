import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId: string
  constructor(
    private CategoryService: CategoryService, //cung cấp create cho 
    private router: Router,  //cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute // lấy ra tham số url
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ])
    })
    this.categoryId = "";
  }

  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params['_id'];
    this.CategoryService.getCate(this.categoryId).subscribe(data => {
      // gan gia tri cho form, padchValue nhan day du thuoc tinh cua form
      this.categoryForm.patchValue({
        name: data.name
      })
    })
  }

  onSubmit() {
    // console.log(this.productForm.value);

    //1: lấy dữ liệu từ form
    const submitData = this.categoryForm.value;
  
    // this.ProductService.updateProduct(this.productId, submitData).subscribe(data => {
    //   this.router.navigateByUrl('/admin/products');
    //   console.log(data);
      
    // });

    if (this.categoryId !== '0' && this.categoryId !== undefined) {
      return this.CategoryService.updateCategory(this.categoryId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/category');
      });
    }
    return this.CategoryService.createCategory(submitData).subscribe((data) => {
      this.router.navigateByUrl('/admin/category');
    })
  }

}
