import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacerDirective } from './directives/spacer.directive';
import { CompactDirective } from './directives/compact.directive';
import { WidthService } from './services/width.service';
import { ErrorMessagingComponent } from './error-messaging/error-messaging.component';

@NgModule({
  declarations: [
    SpacerDirective,
    CompactDirective,
    ErrorMessagingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpacerDirective,
    CompactDirective
  ],
  providers: [
    WidthService,
    CompactDirective
  ]
})
export class SharedModule { }
