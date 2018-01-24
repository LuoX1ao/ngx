import { MenuItem } from './menu-item';
import {MENUS, TOPMENUS} from './menu-config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  topMenus: MenuItem[] = TOPMENUS;

  menus: MenuItem[] = MENUS;

  constructor() { }

  ngOnInit() {}


}
