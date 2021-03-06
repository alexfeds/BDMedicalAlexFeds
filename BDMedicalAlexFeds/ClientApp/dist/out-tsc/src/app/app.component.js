import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.numBatchInput = 0;
        this.numPerBatchInput = 0;
    }
    ngOnInit() {
    }
    processNumbers() {
        console.log("numBatchInput", this.numBatchInput),
            console.log("numPerBatchInput", this.numPerBatchInput);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map