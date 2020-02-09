import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInService } from './authentication/sign-in.service';
import { SignOutService } from './authentication/sign-out.service';
import { UserListService } from './services/user-list.service';
import { AuthService } from './mock/auth.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [AuthService, SignInService, SignOutService, UserListService],
})
export class CoreModule {}
