import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me.component';

const routes: Routes = [
    {
        path: '',
        component: AboutMeComponent,
        data: {
            title: 'Sobre mi',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AboutMeRoutingModule {}
