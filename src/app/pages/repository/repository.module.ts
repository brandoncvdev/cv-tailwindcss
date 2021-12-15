import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository.component';
import { RepositoryRoutingModule } from './repository-routing.module';
//Services
import { GithubService } from '@shared/services/github/github.service';
//Components
import { ContainerRepoModule } from '@shared/components/container-repo/container-repo.module';

@NgModule({
    declarations: [RepositoryComponent],
    imports: [CommonModule, RepositoryRoutingModule, ContainerRepoModule],
    providers: [GithubService],
})
export class RepositoryModule {}
