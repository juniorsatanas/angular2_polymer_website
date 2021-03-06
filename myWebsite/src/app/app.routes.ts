import { Routes } from '@angular/router';

import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { LabComponent } from './lab/lab.component';
import { LinkComponent } from './link/link.component';
import { LogstashComponent } from './logstash/logstash.component';
import { FlexboxgeneratorComponent } from './lab/flexboxgenerator/flexboxgenerator.component';

export const ROUTES: Routes =
    [
        { path: 'cv', component: CvComponent },
        { path: 'lab', component: LabComponent },
        { path: 'link', component: LinkComponent },
        { path: 'lien', component: LinkComponent },
        { path: '', component: HomeComponent },
        { path: 'lab/logstash', component: LogstashComponent },
        { path: 'lab/flexbox', component: FlexboxgeneratorComponent}
    ];