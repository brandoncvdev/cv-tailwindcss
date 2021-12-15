import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRepoComponent } from './container-repo.component';

describe('ContainerRepoComponent', () => {
    let component: ContainerRepoComponent;
    let fixture: ComponentFixture<ContainerRepoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContainerRepoComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContainerRepoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
