import { CssComponent } from './css/css.component';
import { ReactComponent } from './react/react.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { JavascriptComponent } from './javascript/javascript.component';

import { H5Component } from './h5.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{
    path: '', component: H5Component, children: [{
        path: 'javascript', component: JavascriptComponent
    }, {
        path: 'typescript', component: TypescriptComponent
    }, {
        path: 'react', component: ReactComponent
    }, {
        path: 'css', component: CssComponent
    }, {
        path: '', loadChildren: 'app/pages/h5/angular/angular.module#AngularModule'
    }]
}];

@NgModule({
    declarations: [H5Component, JavascriptComponent, TypescriptComponent, ReactComponent, CssComponent],
    imports: [RouterModule.forChild(routes)]
})
export class H5Module {}
