import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminCategoryDetailComponent } from './pages/admin/admin-category/admin-category-detail/admin-category-detail.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminUserDetailComponent } from './pages/admin/admin-user/admin-user-detail/admin-user-detail.component';
import { AdminUserFormComponent } from './pages/admin/admin-user/admin-user-form/admin-user-form.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CartClientComponent } from './pages/client/cart-client/cart-client.component';
import { CategoryComponent } from './pages/client/category/category.component';
import { ClientDetailComponent } from './pages/client/client-detail/client-detail.component';
import { ClientListComponent } from './pages/client/client-list/client-list.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: ClientListComponent
      },
    ]
  },
  {
    path: 'products/:id',
    component: ClientDetailComponent
  },
  {
    path: 'cart',
    component: CartClientComponent
  },
  {
    path:'category',
    component: CategoryComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard], // Đưa vào để kiểm soát việc login trước khi vào admin
    children: [
      {
        path: 'products',
       children : [
        {
          path: '',
          component: AdminProductListComponent
        },
        {
          path: 'create',
          component: AdminProductFormComponent
        },
        {
          path: 'edit/:id',
          component: AdminProductFormComponent
        },
        {
          path: ':id',
          component: AdminProductDetailComponent
        }
       ]
      },
      {
        path:'users',
        children: [
          {
            path:'',
            component: AdminUserListComponent
          },
          {
            path: 'create',
            component: AdminUserFormComponent
          },
          {
            path:'edit/:id',
            component: AdminUserFormComponent
          },
          {
            path: ':id',
            component: AdminUserDetailComponent
          }

        ]

      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: AdminCategoryListComponent
          },
          {
            path: 'create',
            component: AdminCategoryFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminCategoryFormComponent
          },
          {
            path:':id',
            component: AdminCategoryDetailComponent
          }
        ]
      },
      {
        path: 'users',
        children: [
          {
            path:'',
            component: AdminUserListComponent
          },
          {
            path: 'create',
            component: AdminUserFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminUserFormComponent
          },
          {
            path: ':id',
            component: AdminUserDetailComponent
          }
        ]
      }

    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
