import { Component, OnInit } from '@angular/core';
import {articles} from './config/articles.config';
import {ArticleInfo} from '../../../../@theme/components/article-list/model/article-info';

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.scss']
})
export class AngularListComponent implements OnInit {

  articles: ArticleInfo[];

  constructor() { }

  ngOnInit() {
    this.articles = articles;
  }

}
