import { Component, Input, OnInit } from '@angular/core';
import { DataRepository } from '@shared/models/config-repo-container';

@Component({
    selector: 'container-repo',
    templateUrl: './container-repo.component.html',
    styleUrls: ['./container-repo.component.scss'],
})
export class ContainerRepoComponent {
    @Input() public dataRepo!: DataRepository;
}
