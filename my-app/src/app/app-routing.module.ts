import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './about-client/about-client.component';
import { ChampsComponent } from './champs/champs.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
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
  {
    path:"product",
    component: ProductClientComponent,
  },
  {

    path: "product-detail",
    component: ProductDetailClientComponent
  },
  {
    path:"about",
    component: AboutClientComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
