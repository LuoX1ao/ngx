import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{
    path: '', component: HomeComponent
}];

@NgModule({
    declarations: [HomeComponent],
    imports: [RouterModule.forChild(routes)]
})
export class HomeModule {}
