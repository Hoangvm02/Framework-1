import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string 
  constructor(
    private ProductService: ProductService, //cung cấp create cho 
    private router: Router,  //cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute // lấy ra tham số url
  ) { 
    this.productForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasProduct
      ] )
    })
    this. productId = "0";
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id'];
    if(this.productId){
      this.ProductService.getProduct(this.productId).subscribe(data =>{
        // gán giá trị cho form
        this.productForm.patchValue({
          name: data.name
        })
      })
    }
   
  }

  onValidateNameHasProduct(control: AbstractControl) : ValidationErrors | null {
    const {value} = control;

    if(!value.includes('product')){
      return {hasProductError: true}
    }

    return null
  }
  onSubmit() {
    // console.log(this.productForm.value);

    //1: lấy dữ liệu từ form
    const submitData = this.productForm.value;

    if(this.productId !== "0" || this.productId !== undefined){
       this.ProductService.updateProduct(this.productId, submitData).subscribe(data =>{
        this.router.navigateByUrl('/admin/products')
      })
    }

    //2: callAPI (cần định nghĩa service và router điều hướng)
    this.ProductService.createProduct(submitData).subscribe((data) => {
      //3: sau khi api call thành công thì sẽ điều hướng về danh sách
      // this.router.navigate(['/admin', 'product'])
      this.router.navigateByUrl("/admin/products")
    })
  }
}
