﻿/// <reference path="../../../../typings/index.d.ts" />
interface IClosedClaimsComponentController {
}
class AssignedClaimsComponentController implements IClosedClaimsComponentController {

    constructor(private $http) {
    }
    $onInit() {
    }
}
export class AssignedClaimsComponent implements ng.IComponentOptions {
    templateUrl = "/app/components/assigned/assignedclaims.component.html";
    controllerAs = "Vm";
    constructor() {
    }

    controller = ["$http", AssignedClaimsComponentController];
}