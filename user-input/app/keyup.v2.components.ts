import { Component } from '@angular/core';

@Component({
  selector: 'keyup-v2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values = '';

  onKey(value: string) {
    this.values += value + ' | ';
  }
}
