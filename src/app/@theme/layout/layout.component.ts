import { MenuItem } from './../../pages/menu-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @Input('menus') menus: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

  onItemClick(i: number, el: HTMLAnchorElement) {
    const item = this.menus[i];
    if (item.children && item.children.length > 0) {
      if (!item.expanded) {
        el.nextElementSibling['style'].height = item.children.length * el.nextElementSibling.children[0].clientHeight + 'px';
        el.children[0]['style'].transform = 'rotate(90deg)';
      } else {
        el.nextElementSibling['style'].height = '0px';
        el.children[0]['style'].transform = 'rotate(0)';
      }
      item.expanded = !item.expanded;
    } else {
      this.resetMenuStatus();
      item.selected = !item.selected;
    }
  }

  onSubItemClick(elIndex, parentIndex) {
    this.resetMenuStatus();
    this.menus[parentIndex].selected = true;
    this.menus[parentIndex].children[elIndex].selected = true;
  }

  globalSearchToggle(event) {
    event.target.classList.toggle('focus');
  }

  toggleMenu() {
    document.getElementsByClassName('menu')[0].classList.toggle('visible');
    document.getElementsByClassName('main-content')[0].classList.toggle('menu-visible');
  }

  private resetMenuStatus() {
    this.menus.forEach(menuItem => {
      menuItem.selected = false;
      if (menuItem.children && menuItem.children.length > 0) {
        menuItem.children.forEach(subMenuItem => {
          subMenuItem.selected = false;
        });
      }
    });
  }

}
