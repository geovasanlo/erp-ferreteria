import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';


@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidenavComponent,
    PrincipalComponent,
    NotfoundComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AngularMaterialModule
  ]
})
export class LayoutModule { }
