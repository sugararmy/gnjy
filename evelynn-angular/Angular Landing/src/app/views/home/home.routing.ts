import { Routes } from '@angular/router';

import { HomeOneComponent } from './home-one.component';
import { HomeTwoComponent } from './home-two.component';
import { AllSectionsComponent } from './all-sections.component';
import { DemoComponent } from './demo/demo.component';
import { HomeThreeComponent } from './home-three.component';

export const HomeRoutes: Routes = [
  { path: 'one', component: HomeOneComponent },
  { path: 'two', component: HomeTwoComponent },
  { path: 'three', component: HomeThreeComponent },
  { path: 'all', component: AllSectionsComponent },
  { path: 'demos', component: DemoComponent }
];