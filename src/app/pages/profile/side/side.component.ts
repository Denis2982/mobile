import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {
  sideStrong = [
    {name: 'Analytics'},
    {name: 'Perfectionism'},
    {name: 'Analytics'}
  ];

  sideWeak = [
    {name: 'Perfectionism'},
    {name: 'Analytics'}
  ]
}
