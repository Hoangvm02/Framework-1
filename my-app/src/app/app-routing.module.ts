import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { CanAccessClientGuard } from './guards/can-access-client.guard';
import { HomeClientComponent } from './home-client/home-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { CategoryFormComponent } from './pages/admin/category/category-form/category-form.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { LogninComponent } from './pages/auth/lognin/lognin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { BookClientComponent } from './pages/book-client/book-client.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';

const routes: Routes = [
  {
    path:'',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeClientComponent
      },
      {
        path: 'products',
        component: ProductClientComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailClientComponent
      },
      {
        path:'books',
        component: BookClientComponent
      },
      {
        path:'cart',
        component: CartComponent
      }
      
    ]
  },
  {
    path:'auth',
    canActivate: [CanAccessClientGuard],
      children: [
        {
          path: 'login',
          component: LogninComponent
        },
        {
          path: 'signup',
          component: SignupComponent
        }


      ]
  },
{
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard],
    // vì không có màn dasboard nên ta sẽ diều hướng ra phần users
    children: [
    {
      path: 'products',
      children: [
        {
          path: '',
          component: AdminProductListComponent
        },
        
        {
          path:'create',
          component: AdminProductFormComponent
        },
        {
          path: 'edit/:id',
          component: AdminProductFormComponent
        }
        
      ]
    },
    {
      path: "users", 
      children: [
        {
          path: "",
          component:UserListComponent
        }
      ]
    },
    {
      path: "category", 
      children: [
        {
          path: "",
          component:CategoryComponent
        },
        {
          path: "create",
          component: CategoryFormComponent
        },
        {
          path: 'edit/:id',
          component: CategoryFormComponent
        }
      ]
    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] // đưa vào để cho các route trên có thể sử dụng
})
export class AppRoutingModule { }
