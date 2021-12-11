import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'sobre-mi',
        loadChildren: () =>
            import('../../pages/about-me/about-me.module').then(
                (m) => m.AboutMeModule
            ),
    },
    // {
    //     path: 'dashboard',
    //     loadChildren: () =>
    //         import('../../pages/dashboard/dashboard.module').then(
    //             (m) => m.DashboardModule
    //         ),
    // },
    {
        path: 'experiencia',
        loadChildren: () =>
            import('../../pages/experience/experience.module').then(
                (m) => m.ExperienceModule
            ),
    },
];
