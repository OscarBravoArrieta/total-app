import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
import { VerifyTokenFromEmailComponent } from './components/verify-token-from-email/verify-token-from-email.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    SetNewPasswordComponent,
    VerifyTokenFromEmailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
