"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>My First Angular App</h1>\n    <click-me></click-me>\n    <h3>Give me some keys!</h3>\n    <keyup-v1></keyup-v1>\n    <h3>keyup loop-back component</h3>\n    <loop-back></loop-back>\n    <h3>Give me some keys!</h3>\n    <keyup-v2></keyup-v2>\n    <h3>Type away! Press [enter] when done</h3>\n    <keyup-v3></keyup-v3>\n    <h3>Type away! Press [enter] when done</h3>\n    <keyup-v4></keyup-v4>\n    <h3>Little tour of Heroes</h3>\n    <little-tour></little-tour>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map