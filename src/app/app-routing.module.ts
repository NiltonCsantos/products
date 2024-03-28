import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { FormAuthComponent } from './components/form-auth/form-auth.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';

import { MainSportComponent } from './components/main-product/main-products.component';
import { FormCadastreComponent } from './components/form-cadastre/form-cadastre.component';

const routes: Routes = [
  {path:'', component:FormAuthComponent},
  {
    path:'list',
    component:PageComponent,
    children:[
      {
        path:'products',
       component:MainSportComponent,
       data:{animation:'AboutPage'}
      }

    ]
  },

  {path:'register', component:FormRegisterComponent},

  {path:'cadastre', component:FormCadastreComponent},

  { path: 'cadastre/:id', component: FormCadastreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
