import { Component, Input, OnInit } from '@angular/core';
import { ConfigInfoSkill } from '@shared/models/config-info-skill';

@Component({
    selector: 'info-skill',
    templateUrl: './info-skill.component.html',
    styleUrls: ['./info-skill.component.scss'],
})
export class InfoSkillComponent implements OnInit {
    @Input() skill!: ConfigInfoSkill;

    constructor() {}

    ngOnInit(): void {}
}
