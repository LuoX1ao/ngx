import { ThemeModule } from './../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Route[] = [{
    path: '', component: PagesComponent, children: [{
        path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule'
    }, {
        path: 'h5', loadChildren: 'app/pages/h5/h5.module#H5Module'
    },
    //  {
    //     path: 'back-end', loadChildren: 'app/pages/back-end/back-end.module#BackEndModule'
    // }, {
    //     path: 'database', loadChildren: 'app/pages/database/database.module#DatabaseModule'
    // }, {
    //     path: 'ios', loadChildren: 'app/pages/ios/ios.module#IOSModule'
    // }, {
    //     path: 'android', loadChildren: 'app/pages/android/android.module#AndroidModule'
    // }, 
    {
        path: '', redirectTo: 'home'
    }]
}];

@NgModule({
    declarations: [PagesComponent],
    imports: [RouterModule.forChild(routes), CommonModule, ThemeModule]
})
export class PagesModule {}
