import { MenuItem } from './../../pages/menu-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input('menus') menus: MenuItem[];

  @Input('topMenus') topMenus: MenuItem[];

  private mdMin = 992;

  constructor() {

  }

  ngOnInit() {
    const w = document.documentElement.clientWidth || document.body.clientWidth;
    if (w >= this.mdMin) {
      this.toggleMenu();
    }
  }

  onLayoutClick(target: Element) {
    if (target.classList.contains('shadow')) {
      this.hideMenu();
    }
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
      item.selected = true;
    }
  }

  onSubItemClick(elIndex, parentIndex) {
    this.resetMenuStatus();
    this.menus[parentIndex].selected = true;
    this.menus[parentIndex].children[elIndex].selected = true;
  }

  onTopMenuItemClick(elIndex: number) {
    this.resetMenuStatus();
    for (let i = 0; i < this.topMenus.length; i++) {
      if (i === elIndex) {
        this.topMenus[elIndex].selected = true;
        break;
      }
    }
  }

  globalSearchToggle(event) {
    event.target.classList.toggle('focus');
  }

  toggleMenu() {
    document.getElementsByClassName('menu')[0].classList.toggle('visible');
    document.getElementsByClassName('main-content')[0].classList.toggle('menu-visible');
    document.getElementsByClassName('shadow')[0].classList.toggle('visible');
  }

  hideMenu() {
    document.getElementsByClassName('menu')[0].classList.remove('visible');
    document.getElementsByClassName('main-content')[0].classList.remove('menu-visible');
    document.getElementsByClassName('shadow')[0].classList.remove('visible');
  }

  menuToggleMouseDown() {
    document.getElementsByClassName('menu-toggle-item')[0]['style'].background = 'rgba(0,0,0,0.1)';
  }

  menuToggleMouseUp() {
    document.getElementsByClassName('menu-toggle-item')[0]['style'].background = 'transparent';
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

    this.topMenus.forEach(menuItem => {
      menuItem.selected = false;
    });
  }

}
