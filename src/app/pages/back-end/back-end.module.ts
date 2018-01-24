import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BackEndComponent } from './back-end.component';
import { ApacheComponent } from './apache/apache.component';
import { JavaComponent } from './java/java.component';
import { PhpComponent } from './php/php.component';

const routes: Route[] = [{
    path: '', component: BackEndComponent, children: [{
      path: 'apache', component: ApacheComponent
  }, {
      path: 'java', component: JavaComponent
  }, {
      path: 'php', component: PhpComponent
  }]
}];

@NgModule({
    declarations: [BackEndComponent, ApacheComponent, JavaComponent, PhpComponent],
    imports: [RouterModule.forChild(routes)]
})
export class BackEndModule {}
