import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from '../inicio/inicio.component';
import { MenuComponent } from '../inicio/menu/menu.component';
import { FooterComponent } from '../inicio/footer/footer.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [InicioComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    NgbModule,
    IconsModule
  ]
})
export class InicioModule { }
