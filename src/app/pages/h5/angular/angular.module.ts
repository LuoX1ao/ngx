import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularDetailComponent } from './angular-detail/angular-detail.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import { NgModule } from '@angular/core';
import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import {ArticleListModule} from '../../../@theme/components/article-list/article-list.module';

const routes: Routes = [{
    path: '',
    component: AngularListComponent
}, {
    path: 'detail',
    component: AngularDetailComponent
}];

export function highlightJsFactory() {
    return hljs;
  }

@NgModule({
    declarations: [AngularListComponent, AngularDetailComponent],
    imports: [CommonModule, ArticleListModule, RouterModule.forChild(routes), HighlightJsModule.forRoot({
        provide: HIGHLIGHT_JS,
        useFactory: highlightJsFactory
      })],
    exports: [AngularListComponent, AngularDetailComponent]
})
export class AngularModule {}

