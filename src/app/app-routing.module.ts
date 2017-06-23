import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { P404Component } from './layouts/p404/p404.component';
import { ScanComponent } from "./scan/scan.component";
import { TargetsComponent } from "./targets/targets.component";
import { SCAN_ROUTES } from './scan/scan.routes';
import { TARGET_ROUTES } from "./targets/targets.routes";
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },
  { path: 'app', 
    component: MainLayoutComponent, 
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'scan' },
      { path: 'scan', children: [...SCAN_ROUTES] },
      { path: 'targets', children: [...TARGET_ROUTES] },
      { path: 'config', loadChildren: './config/config.module#ConfigModule' }
    ] 
  },
  { path: '**', pathMatch: 'full', component: P404Component }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
