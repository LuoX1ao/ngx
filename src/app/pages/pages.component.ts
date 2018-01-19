import { MenuItem } from './menu-item';
import { MENUS } from './menu-config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  menus: MenuItem[] = MENUS;

  constructor() { }

  ngOnInit() {}


}
