import { Injectable } from '@angular/core';

export type SessionUser = {
    userId: string;
    sessionToken: string;
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    /**
     * サインインのMock
     * @param userId
     * @param password
     */
    public async signIn(userId: string, password: string): Promise<SessionUser> {
        if (!userId || !password) {
            throw new Error('UserId of Password does not exists');
        }

        try {
            return {
                userId,
                sessionToken: 'hogehoge',
            };
        } catch (e) {
            throw new Error('Sign In Failed');
        }
    }

    /**
     * サインアウトのMock
     */
    public async signOut(): Promise<void> {
        try {
            console.log('SignOut Success');
        } catch (e) {
            throw new Error('SignOut Failed');
        }
    }
}
