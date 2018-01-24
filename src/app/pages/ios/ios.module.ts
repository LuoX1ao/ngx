import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { IosComponent } from './ios.component';

const routes: Route[] = [{
    path: '', component: IosComponent
}];

@NgModule({
    declarations: [IosComponent],
    imports: [RouterModule.forChild(routes)]
})
export class IosModule {}
