import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { User, UserListService } from '../../core/services/user-list.service';
import { SignOutService } from '../../core/authentication/sign-out.service';
import { SignOutConfirmDialogComponent } from './sign-out-confirm-dialog/sign-out-confirm-dialog.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public displayedColumns = ['id', 'name', 'age', 'email'];
    public users$: Observable<User[]>;

    constructor(
        private userList: UserListService,
        private user: SignOutService,
        private router: Router,
        private dialog: MatDialog
    ) {
        this.users$ = this.userList.get();
    }

    public async onSignOut(): Promise<void> {
        const signOutConfirmDialog = this.dialog.open(SignOutConfirmDialogComponent, {
            width: '250px',
            autoFocus: false,
        });

        signOutConfirmDialog.afterClosed().subscribe(this.onSignOutDialogClose);
    }

    private async onSignOutDialogClose(signOut: boolean) {
        if (!signOut) return;

        try {
            await this.user.signOut();
            console.log('SignOut');
            await this.router.navigate(['/']);
        } catch (e) {
            this.errorHandler(e);
        }
    }

    private errorHandler({ message }): void {
        switch (message) {
            case '418':
                return this.errorTeapot();
            default:
                return this.errorOther();
        }
    }

    private errorTeapot(): void {
        console.log(`I'm a teapot`);
    }

    private errorOther(): void {
        console.log(`Other Error`);
    }
}
