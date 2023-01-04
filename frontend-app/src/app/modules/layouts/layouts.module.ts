 import { NgModule } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { FormsModule, ReactiveFormsModule } from "@angular/forms"

 //Primeng
 import { PrimengModule } from '../primeng/primeng.module'

 //Components
 import { NavBarComponent } from './components/nav-bar/nav-bar.component'
 import { FooterComponent } from './components/footer/footer.component'
 import { SideBarComponent } from './components/side-bar/side-bar.component'

 @NgModule({
         declarations: [
         NavBarComponent,
         FooterComponent,
         SideBarComponent
     ],
  imports: [
     CommonModule,
     PrimengModule,
     FormsModule,
     ReactiveFormsModule
  ],
  exports: [NavBarComponent, FooterComponent, SideBarComponent]
})
export class LayoutsModule { }
