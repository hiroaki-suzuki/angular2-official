import { Component } from '@angular/core';

@Component({
  selector: 'keyup-v3',
  template: `
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v3 {
  values = '';
}