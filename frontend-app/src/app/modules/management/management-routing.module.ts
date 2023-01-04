 import { NgModule } from '@angular/core'
 import { RouterModule, Routes } from '@angular/router'
 import { MainGridComponent } from './components/main-grid/main-grid.component'

 const routes: Routes = [
     { path: 'main-grid', component: MainGridComponent }
 ]

 @NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
 })
 export class ManagementRoutingModule { }
