import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './repository.component';

const routes: Routes = [
    {
        path: '',
        component: RepositoryComponent,
        data: {
            title: 'Repositorio',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RepositoryRoutingModule {}
