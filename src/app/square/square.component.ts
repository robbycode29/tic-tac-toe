import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div>
      <p class="text-center text-3xl text-white">
        {{ value }}
      </p>
    <div>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() value: 'X' | 'O' = 'X';

}

