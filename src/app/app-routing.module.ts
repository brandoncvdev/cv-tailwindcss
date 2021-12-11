import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'error',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () =>
            import('./layouts/full-layout/full-layout.module').then(
                (m) => m.FullLayoutModule
            ),
    },
    // {
    //     path: '',
    //     component: FullLayoutComponent,
    //     data: { title: 'full Views' },
    //     children: Full_ROUTES,
    //     canActivate: [AuthGuard],
    // }
    { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
