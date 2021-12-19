import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';

import { AboutMeComponent } from './about-me.component';
import { InfoSkillModule } from '@shared/components/info-skill/info-skill.module';
import { StepperModule } from '@shared/components/stepper/stepper.module';

@NgModule({
    declarations: [AboutMeComponent],
    imports: [
        CommonModule,
        AboutMeRoutingModule,
        InfoSkillModule,
        StepperModule,
    ],
})
export class AboutMeModule {}
