import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AndroidComponent } from './android.component';

const routes: Route[] = [{
    path: '', component: AndroidComponent
}];

@NgModule({
    declarations: [AndroidComponent],
    imports: [RouterModule.forChild(routes)]
})
export class AndroidModule {}
