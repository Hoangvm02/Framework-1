import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { ProductService } from '../services/product.service';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-detail-client',
  templateUrl: './product-detail-client.component.html',
  styleUrls: ['./product-detail-client.component.css']
})
export class ProductDetailClientComponent implements OnInit {

  // 1. Phải lấy ra được id trên url
  _id: string;
  // 2. Sử dụng id đó để call API lấy chi tiết product
  product: Product;
  // Định nghĩa biến lắng nghe giá trị cho value giỏ hàng
  cartValue: number;

  constructor(
    private activateRoute: ActivatedRoute, // dùng để lấy dữ liệu tham số trên URL
    private productService: ProductService, // dùng để lấy các phương thức call API product
    private lsService: LocalStorageService // dùng để lấy các phương thức xử lý ls
  ) {
    // định nghĩa dữ liệu mặc định
    this._id = '';
    this.product = {
      _id: "0",
      name: '',
      price: 0,
      image: '',
      desc: '',
      value: 0,
      sale_price: 0,
      author: '',
      status: 0,
      category:""
    };

    this.cartValue = 1;
  }

  ngOnInit(): void {
    this._id = this.activateRoute.snapshot.params['id'];

    this.productService.getProduct(this._id).subscribe((data) => {
      this.product = data;
    });
  }

  onChangeCartValue(event: any) {
    this.cartValue = event.target.value;
  }

  onAddToCart() {
    // Định nghĩa 1 sp trong giỏ hàng có cấu trúc là gì
    const addItem = {
      ...this.product,
      value: +this.cartValue
    };


    // Nếu thực hiện như cũ, thì phía component cart sẽ không lắng nghe được

    // Thực hiện gọi lsService để component cart có thể lắng nghe thay đổi
    this.lsService.setItem(addItem);
    this.cartValue = 1;

  }

}
