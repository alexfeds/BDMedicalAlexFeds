import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AppService = class AppService {
    constructor(http) {
        this.http = http;
    }
    startNumberProces(numOfBatches, numberPerBatch) {
        return this.http.post('api/correspondents/groups', numberPerBatch);
    }
};
AppService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AppService);
export { AppService };
//# sourceMappingURL=app.service.js.map