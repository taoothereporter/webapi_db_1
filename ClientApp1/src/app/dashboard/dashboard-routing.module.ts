import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'kpi', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard.module').then(m => m.DashboardModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
