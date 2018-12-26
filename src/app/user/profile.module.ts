import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './profile.component';
import { UserProfileRoutingModule } from './profile-routes.module';

@NgModule({
  imports: [CommonModule, UserProfileRoutingModule],
  declarations: [UserProfileComponent],
})
export class UserProfileModule {}
