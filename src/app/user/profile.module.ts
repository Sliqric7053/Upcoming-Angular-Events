import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserProfileComponent } from './profile.component';
import { UserProfileRoutingModule } from './profile-routes.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, UserProfileRoutingModule, FormsModule],
  declarations: [UserProfileComponent, LoginComponent],
})
export class UserProfileModule {}
