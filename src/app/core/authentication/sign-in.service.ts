import { Injectable } from '@angular/core';
import { AuthService, SessionUser } from '../mock/auth.service';

@Injectable({
    providedIn: 'root',
})
export class SignInService {
    constructor(private auth: AuthService) {}

    public async signIn(userId: string, password: string): Promise<SessionUser> {
        try {
            const user = await this.auth.signIn(userId, password);
            console.log(user);
            return user;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
