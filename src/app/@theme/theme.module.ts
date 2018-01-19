import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LayoutComponent],
    exports: [LayoutComponent]
})
export class ThemeModule {}
