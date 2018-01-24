import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { OtherComponent } from './other.component';

const routes: Route[] = [{
    path: '', component: OtherComponent
}];

@NgModule({
    declarations: [OtherComponent],
    imports: [RouterModule.forChild(routes)]
})
export class OtherModule {}
