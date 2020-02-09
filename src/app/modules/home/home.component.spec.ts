import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home.component';
import { UserListService } from '../../core/services/user-list.service';
import { SignOutService } from '../../core/authentication/sign-out.service';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    const routerFuncNavigateSpy = jest
        .spyOn(Router.prototype, 'navigate')
        .mockImplementation(async () => true);
    const signOutServiceFuncSingOutSpy = jest.spyOn(SignOutService.prototype, 'signOut');
    const componentFuncErrorTeapotSpy = jest
        .spyOn((HomeComponent as any).prototype, 'errorTeapot')
        .mockImplementation(() => console.log('Error Teapot mock'));
    const componentFuncErrorOtherSpy = jest
        .spyOn((HomeComponent as any).prototype, 'errorOther')
        .mockImplementation(() => console.log('Error Other mock'));

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [MatTableModule, MatButtonModule, MatDialogModule],
            providers: [
                UserListService,
                MatDialog,
                {
                    provide: Router,
                    useClass: class {
                        navigate = routerFuncNavigateSpy;
                    },
                },
                SignOutService,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.debugElement.componentInstance;
    });

    afterEach(() => {
        routerFuncNavigateSpy.mockClear();
        signOutServiceFuncSingOutSpy.mockClear();
        componentFuncErrorTeapotSpy.mockClear();
        componentFuncErrorOtherSpy.mockClear();
    });

    test('ログアウトポップアップでOKが押されログアウト処理に問題がない時Router.navigateが呼ばれるかテスト', async () => {
        signOutServiceFuncSingOutSpy.mockImplementation(async () =>
            console.log('SignOut Mock called')
        );

        await (component as any).onSignOutDialogClose(true);

        expect(signOutServiceFuncSingOutSpy).toHaveBeenCalled();
        expect(routerFuncNavigateSpy).toHaveBeenCalled();
    });

    test('ログアウトポップアップでOKが押されたがログアウト処理で問題が発生し、StatusCode418返されたときのテスト', async () => {
        signOutServiceFuncSingOutSpy.mockImplementation(async () => {
            throw new Error('418');
        });

        await (component as any).onSignOutDialogClose(true);

        expect(signOutServiceFuncSingOutSpy).toHaveBeenCalled();
        expect(routerFuncNavigateSpy).not.toHaveBeenCalled();
        expect(componentFuncErrorTeapotSpy).toHaveBeenCalled();
        expect(componentFuncErrorOtherSpy).not.toHaveBeenCalled();
    });

    test('ログアウトポップアップでOKが押されたがログアウト処理で問題が発生し、StatusCode418以外返されたときのテスト', async () => {
        signOutServiceFuncSingOutSpy.mockImplementation(async () => {
            throw new Error('500');
        });

        await (component as any).onSignOutDialogClose(true);

        expect(signOutServiceFuncSingOutSpy).toHaveBeenCalled();
        expect(routerFuncNavigateSpy).not.toHaveBeenCalled();
        expect(componentFuncErrorTeapotSpy).not.toHaveBeenCalled();
        expect(componentFuncErrorOtherSpy).toHaveBeenCalled();
    });

    test('ログアウトポップアップでCancelが押されログアウト処理が行われないかテスト', async () => {
        signOutServiceFuncSingOutSpy.mockImplementation(async () =>
            console.log('SignOut Mock Called')
        );

        await (component as any).onSignOutDialogClose(false);

        expect(signOutServiceFuncSingOutSpy).not.toHaveBeenCalled();
        expect(routerFuncNavigateSpy).not.toHaveBeenCalled();
    });
});
