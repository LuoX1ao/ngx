import {Component, Input, OnInit} from '@angular/core';
import {ArticleInfo} from './model/article-info';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: ArticleInfo[];

  constructor() { }

  ngOnInit() {}

}
