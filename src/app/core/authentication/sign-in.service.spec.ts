import { SignInService } from './sign-in.service';
import { AuthService } from '../mock/auth.service';

describe('SignInService', () => {
    const authService = new AuthService();

    test('AuthServiceが正常に処理をしたとき', async () => {
        const signInFunctionReturnSuccessMock = jest.spyOn(authService, 'signIn');
        signInFunctionReturnSuccessMock.mockResolvedValue({ userId: 'test', sessionToken: 'ok' });

        const signInService = new SignInService(authService);
        expect(await signInService.signIn('test', 'password')).toEqual({
            userId: 'test',
            sessionToken: 'ok',
        });

        signInFunctionReturnSuccessMock.mockClear();
    });
    test('AuthServiceが例外を投げたとき', async () => {
        const signInFunctionReturnRejectMock = jest.spyOn(authService, 'signIn');
        signInFunctionReturnRejectMock.mockRejectedValue(new Error('AuthMockService throw Error'));

        const signInService = new SignInService(authService);
        await expect(signInService.signIn('test', 'password')).rejects.toThrow();

        signInFunctionReturnRejectMock.mockClear();
    });
});
