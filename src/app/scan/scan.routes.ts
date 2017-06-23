
import { Routes } from '@angular/router';
import { ScanResultsComponent } from "./scan-results/scan-results.component";
import { ScanComponent } from "./scan.component";

export const SCAN_ROUTES: Routes = [
    { path: '', component: ScanComponent },
    { path: 'results', component: ScanResultsComponent }
];