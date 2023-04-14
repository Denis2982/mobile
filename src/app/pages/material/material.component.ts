import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  constructor (public app: AppService) {
    this.app.title = 'Material'
  }
}
