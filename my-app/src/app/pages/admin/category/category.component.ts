import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category[];
  cate: Category;
  constructor( private categoryService: CategoryService) { 
    this.cate = {
      _id: "",
      name: "",
      status: 0
    }
    this.category = []
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
  }
  // get lại giữ liệu khi thay đổi
  onGetList() {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
  }
  onDel(_id: string) {
    const confirmDel = confirm("Bạn có chắc chắn muốn xóa không?")
    if (confirmDel && _id) {
      console.log(_id);
      // gọi phương thức
      this.categoryService.delCategory(_id).subscribe((data) => {
        console.log(data);
        this.onGetList();
      })
    }
  }
  change(_id: string) {
    this.categoryService.getCate(_id).subscribe(data => {
      // gan gia tri cho form, padchValue nhan day du thuoc tinh cua form
      this.cate = data
      if (this.cate.status == 0) {
        this.cate.status = 1;
        this.categoryService.updateCategory(_id, this.cate).subscribe(data => {
          this.onGetList()
        });
      }else if(this.cate.status == 1){
        this.cate.status = 0;
        this.categoryService.updateCategory(_id, this.cate).subscribe(data => {
          this.onGetList()
        });
      }
    })
  }

}
