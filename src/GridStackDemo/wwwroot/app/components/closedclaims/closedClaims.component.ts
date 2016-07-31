﻿/// <reference path="../../../../typings/index.d.ts" />
interface IClosedClaimsComponentController {
}
class ClosedClaimsComponentController implements IClosedClaimsComponentController {

    constructor(private $http) {
    }
    $onInit() {
    }
}
export class ClosedClaimsComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/closedclaims/closedClaims.component.html";
    controllerAs = "Vm";
    bindings: any;
    constructor() {
        this.bindings = {
            id: "@",
        };
    }

    controller = ["$http", ClosedClaimsComponentController];
}