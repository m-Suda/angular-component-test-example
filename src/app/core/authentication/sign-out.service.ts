import { Injectable } from '@angular/core';
import { AuthService } from '../mock/auth.service';

@Injectable({
    providedIn: 'root',
})
export class SignOutService {
    constructor(private auth: AuthService) {}

    public async signOut(): Promise<void> {
        try {
            await this.auth.signOut();
        } catch (e) {
            throw new Error('418');
        }
    }
}
