import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'entry',
        pathMatch: 'full',
    },
    {
        path: 'entry',
        loadChildren: () =>
            import('./modules/entry/entry.module').then(({ EntryModule }) => EntryModule),
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./modules/home/home.module').then(({ HomeModule }) => HomeModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
