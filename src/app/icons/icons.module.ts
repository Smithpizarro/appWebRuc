import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';

import { LogOut ,LogIn ,Edit, Delete} from 'angular-feather/icons';

  const icons = [
    LogOut,LogIn,Edit, Delete  
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
