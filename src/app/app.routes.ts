import { Routes } from '@angular/router';
import { AsignacionCreateComponent } from './asignacion/asignacion-create/asignacion-create.component';
import { AsignacionViewComponent } from './asignacion/asignacion-view/asignacion-view.component';
import { ConductorCreateComponent } from './conductor/conductor-create/conductor-create.component';
import { ConductorEditComponent } from './conductor/conductor-edit/conductor-edit.component';
import { ConductorListComponent } from './conductor/conductor-list/conductor-list.component';
import { ConductorSearchComponent } from './conductor/conductor-search/conductor-search.component';
import { ConductorViewComponent } from './conductor/conductor-view/conductor-view.component';

export const routes: Routes = [
    {path: 'asignacion/asigancion-create', component: AsignacionCreateComponent},
    {path: 'asignacion/asigancion-view', component: AsignacionViewComponent},
    {path: 'conductor/conductor-create', component: ConductorCreateComponent},
    {path: 'conductor/conductor-edit', component: ConductorEditComponent},
    {path: 'conductor/conductor-list', component: ConductorListComponent},
    {path: 'conductor/conductor-search', component: ConductorSearchComponent},
    {path: 'conductor/conductor-view', component: ConductorViewComponent},
    {path: '', pathMatch: 'full', redirectTo: 'conductor/conductor-list'},
];
