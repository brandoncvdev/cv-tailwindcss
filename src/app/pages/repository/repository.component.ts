import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '@shared/animations/route-animations';
import { DataRepository } from '@shared/models/config-repo-container';
import { GithubService } from '@shared/services/github/github.service';

@Component({
    selector: 'app-repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.scss'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
})
export class RepositoryComponent implements OnInit {
    public repositories: DataRepository[];

    constructor(private _gitHub: GithubService) {
        this.repositories = [];
    }

    ngOnInit(): void {
        this.getAllRepositories();
    }

    public getAllRepositories(): void {
        this._gitHub.getRepositories().subscribe((res) => {
            this.repositories = res.map((data: any) => {
                return {
                    name: data.name,
                    owner: data.owner,
                    size: data.size,
                    updated_at: data.update_at,
                    clone_url: data.clone_url,
                    description: data.description,
                };
            });
        });
    }
}
