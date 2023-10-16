import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components_services';
  imgParent: string = 'https://www.w3schools.com/howto/img_avatar2.png';
  texto: string = '';
}
