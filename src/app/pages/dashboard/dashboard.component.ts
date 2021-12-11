import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public wordsTitle: string[];
    private textToShow: string[];

    constructor() {
        this.wordsTitle = [];
        this.textToShow = ['Testeo', 'testeo,', 'testeo'];
    }

    ngOnInit(): void {}
}
