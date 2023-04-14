import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-not-founded',
  templateUrl: './not-founded.component.html',
  styleUrls: ['./not-founded.component.scss']
})
export class NotFoundedComponent {
  constructor(public app: AppService) {
    this.app.title = 'Not found'
  }
}
