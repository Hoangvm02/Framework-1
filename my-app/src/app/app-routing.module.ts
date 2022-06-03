import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './about-client/about-client.component';
import { ChampsComponent } from './champs/champs.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { UserFormComponent } from './user/form/form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: UserComponent
  // },
  // {
  //   path: 'champ',
  //   component: ChampsComponent,
  //   children:[
  //     {
  //       path: 'index',
  //       component: UserComponent
  //     }
  //   ]
  // }
  // {
  //   path:"product",
  //   component: ProductClientComponent,
  // },
  // {

  //   path: "product-detail",
  //   component: ProductDetailClientComponent
  // },
  // {
  //   path:"about",
  //   component: AboutClientComponent
  // }
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
        path:'about',
        component: AboutClientComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
