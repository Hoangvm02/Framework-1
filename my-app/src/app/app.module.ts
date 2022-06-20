import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IdentityComponent } from './identity/identity.component';
import { FormsModule } from '@angular/forms';
// import thư viện  reacts
import { ReactiveFormsModule } from '@angular/forms';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';


// đây là module cung cấp các phương thức để component sử dụng gọi api
import { HttpClientModule} from '@angular/common/http';
import { LogninComponent } from './pages/auth/lognin/lognin.component';
import { BookClientComponent } from './pages/book-client/book-client.component';
import { CartComponent } from './components/cart/cart.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CategoryFormComponent } from './pages/admin/category/category-form/category-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentityComponent,
    ShowValidateComponent,
    AdminProductListComponent,
    ProductClientComponent, 
    ProductDetailClientComponent, 
    LayoutsComponent, 
    ClientLayoutComponent, 
    AdminLayoutComponent, 
    HomeClientComponent, 
    AdminProductFormComponent, 
    LogninComponent, 
    BookClientComponent, 
    CartComponent, 
    UserListComponent, 
    CategoryComponent, SignupComponent, CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
