import { Component, OnInit } from '@angular/core';
import { ConfigInfoSkill } from '@shared/models/config-info-skill';
import { SKILLS, SKILLSBACKEND, SKILLSDBS } from './utils/skills-options';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
    public skills: ConfigInfoSkill[];
    public skillBackend: ConfigInfoSkill[];
    public skillsDBS: ConfigInfoSkill[];

    constructor() {
        this.skills = SKILLS;
        this.skillBackend = SKILLSBACKEND;
        this.skillsDBS = SKILLSDBS;
    }

    ngOnInit(): void {}
}
