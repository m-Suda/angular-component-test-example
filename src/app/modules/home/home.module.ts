import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SignOutConfirmDialogComponent } from './sign-out-confirm-dialog/sign-out-confirm-dialog.component';

@NgModule({
    declarations: [HomeComponent, SignOutConfirmDialogComponent],
    imports: [CommonModule, HomeRoutingModule, MatTableModule, MatButtonModule, MatDialogModule],
})
export class HomeModule {}
