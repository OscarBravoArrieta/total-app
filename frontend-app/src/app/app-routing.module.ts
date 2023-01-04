 import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router'
 import { HomeComponent } from './home/home.component'

 const routes: Routes = [
     { path: '', component: HomeComponent,
     children: [
             {
                 path: 'management',
                 loadChildren: () => import('./modules/management/management.module').then(m => m.ManagementModule)
             }
         ]
     }
 ]

 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule, ]
 })
 export class AppRoutingModule { }
