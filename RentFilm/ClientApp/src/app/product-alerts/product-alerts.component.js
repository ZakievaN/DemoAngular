var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
let ProductAlertsComponent = class ProductAlertsComponent {
    constructor() {
        this.notify = new EventEmitter();
    }
    ngOnInit() { }
};
__decorate([
    Input()
], ProductAlertsComponent.prototype, "product", void 0);
__decorate([
    Output()
], ProductAlertsComponent.prototype, "notify", void 0);
ProductAlertsComponent = __decorate([
    Component({
        selector: 'app-product-alerts',
        templateUrl: './product-alerts.component.html',
        styleUrls: ['./product-alerts.component.css'],
    })
], ProductAlertsComponent);
export { ProductAlertsComponent };
//# sourceMappingURL=product-alerts.component.js.map