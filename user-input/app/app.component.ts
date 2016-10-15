import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First Angular App</h1>
    <click-me></click-me>
    <h3>Give me some keys!</h3>
    <keyup-v1></keyup-v1>
    <h3>keyup loop-back component</h3>
    <loop-back></loop-back>
    <h3>Give me some keys!</h3>
    <keyup-v2></keyup-v2>
    <h3>Type away! Press [enter] when done</h3>
    <keyup-v3></keyup-v3>
    <h3>Type away! Press [enter] when done</h3>
    <keyup-v4></keyup-v4>
    <h3>Little tour of Heroes</h3>
    <little-tour></little-tour>
  `
})
export class AppComponent {
}
