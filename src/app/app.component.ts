import { Component } from '@angular/core';
import { WidthService } from './shared/services/width.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form';

  constructor (public widthService: WidthService) { }
}
