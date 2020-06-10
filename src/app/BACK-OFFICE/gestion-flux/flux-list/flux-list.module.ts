import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxListComponent} from './flux-list.component';
import {FluxListRoutingModule} from './flux-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FluxListRoutingModule   
  ],
  declarations: [FluxListComponent]
})
export class FluxListModule { }
