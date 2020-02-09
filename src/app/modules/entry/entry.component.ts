import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../../core/authentication/sign-in.service';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
    public userId = new FormControl('');
    public password = new FormControl('');

    constructor(private user: SignInService, private router: Router) {}

    public async onSignIn(): Promise<void> {
        try {
            await this.user.signIn(this.userId.value, this.password.value);
            await this.router.navigate(['../home']);
        } catch (e) {
            console.log();
        }
    }
}
