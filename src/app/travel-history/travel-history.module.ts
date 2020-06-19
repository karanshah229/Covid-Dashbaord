import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelHistoryComponent } from './travel-history/travel-history.component';
import { TravelHistoryRoutingModule } from './travel-history-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NzInputModule } from 'ng-zorro-antd/input';

import { NzTableModule } from 'ng-zorro-antd/table';
import { IconsProviderModule } from '../icons-provider.module';

@NgModule({
  declarations: [TravelHistoryComponent],
  imports: [
    CommonModule,
    TravelHistoryRoutingModule,
    HttpClientModule,
    IconsProviderModule,
    NzTableModule,
    NzInputModule
  ]
})
export class TravelHistoryModule { }
