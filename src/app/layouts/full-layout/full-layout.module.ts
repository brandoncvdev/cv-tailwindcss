import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Shared Modules
import { HeaderModule } from '@shared/components/header/header.module';
import { InfoBarModule } from '@shared/components/info-bar/info-bar.module';
import { SpinnerModule } from '@shared/components/spinner/spinner.module';

//Routes
import { Full_ROUTES } from '@shared/routes/full-layout.routes';
//Components
import { FullLayoutComponent } from './full-layout.component';

const routes: Routes = [
    {
        path: '',
        component: FullLayoutComponent,
        children: Full_ROUTES,
        //redirectTo: 'sobre-mi',
    },
];
@NgModule({
    declarations: [FullLayoutComponent],
    imports: [
        CommonModule,
        HeaderModule,
        InfoBarModule,
        SpinnerModule,
        RouterModule.forChild(routes),
    ],
    providers: [],
})
export class FullLayoutModule {}
