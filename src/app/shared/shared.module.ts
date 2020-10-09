import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// mis componentes
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';




@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent,
        NopagefoundComponent,
        BreadcrumbsComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        NavbarComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
})
export class SharedModule {}