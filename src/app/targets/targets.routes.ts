import { Routes } from '@angular/router';
import { TargetsComponent } from "./targets.component";
import { TargetDetailComponent } from "./target-detail/target-detail.component";

export const TARGET_ROUTES: Routes = [
  { path: '', component: TargetsComponent },
  { path: ':id', component: TargetDetailComponent }
];

