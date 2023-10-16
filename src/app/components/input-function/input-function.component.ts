import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-function',
  templateUrl: './input-function.component.html',
  styleUrls: ['./input-function.component.scss']
})
export class InputFunctionComponent {

  @Input()
  set saludar(value: string) {
    console.log('Hola', value);
  }

}
