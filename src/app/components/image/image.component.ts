import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit , OnChanges, AfterViewInit, OnDestroy {

  constructor() {
    console.log('constructor', 'image', this.img);
  }

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault: string = './assets/product.png';


  ngOnInit(): void {
    //beforee render
    //change inputs 1 time
    //se pueden ejecutar tareas asincronas
    console.log('ngOnInit');
  }

  ngOnChanges() { 
    //before - during render
    //change inputs n times
    console.log('onchanges');
  }

  ngAfterViewInit(): void {
    // after render
    // handle childs
    console.log('after view init');
  }

  ngOnDestroy(): void {
    // before destroy
    // handle childs
    console.log('on destroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('img loaded');
    this.loaded.emit(this.img);
  }


}
