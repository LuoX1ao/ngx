import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularDetailComponent } from './angular-detail/angular-detail.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: 'angular-list',
    component: AngularListComponent
}, {
    path: 'angular-detail',
    component: AngularDetailComponent
}];

@NgModule({
    declarations: [AngularListComponent, AngularDetailComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [AngularListComponent, AngularDetailComponent]
})
export class AngularModule {}

