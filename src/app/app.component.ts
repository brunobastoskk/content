import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Output() add: EventEmitter<any> = new EventEmitter();

  addToCart() {
    this.add.emit('p-1-2');
  }
}