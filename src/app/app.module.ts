import { ThemeModule } from './@theme/theme.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Route[] = [{
  path: '', loadChildren: 'app/pages/pages.module#PagesModule'
}, {
  path: '**', redirectTo: ''
}];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, config),
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

