import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './about-client/about-client.component';
import { ChampsComponent } from './champs/champs.component';
import { CartComponent } from './components/cart/cart.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeClientComponent } from './home-client/home-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LogninComponent } from './pages/auth/lognin/lognin.component';
import { BookClientComponent } from './pages/book-client/book-client.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { UserFormComponent } from './user/form/form.component';
import { UserComponent } from './user/user.component';

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
        path:'about',
        component: AboutClientComponent
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
      children: [
        {
          path: 'login',
          component: LogninComponent
        }

      ]
  },
{
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard],
    // vì không có màn dasboard nên ta sẽ diều hướng ra phần users
    children: [
    //   {
    //     path: '',
    //     redirectTo: 'users',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: '',
    //     component: HomeClientComponent
    //   },
    //  {
    //   path: 'users',
    //   component: UserFormComponent
    //  }
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
        },
        {
          path:':id',
          component: AdminProductDetailComponent
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
