﻿
export module names {
    export class AngularGlobal {
        public static $SCOPE = "$scope";
        public static $COOKIE_STORE = "$cookieStore";
        public static $ROUTE_PROVIDER = "$routeProvider";
        public static $STATE_PROVIDER = "$stateProvider";
        public static $URL_ROUTER_PROVIDER = "$urlRouterProvider";
        public static $LOCATION_PROVIDER = "$locationProvider";
        public static $LOCATION = "$location";
        public static $HTTP = "$http";
    };

    export class NG_GLOBAL {
        public static NG_COOKIES = "ngCookies";
        public static NG_ROUTE = "ngRoute";
        public static NG_UI_ROUTE = "ui.router";
        public static NG_SANITIZE = "ngSanitize";
        public static NG_ANIMATE = "ngAnimate";
        public static NG_MESSAGES = "ngMessages";
    };

    export class ModulesExternal {
        public static UI_BOOTSTRAP = "ui.bootstrap";
        public static KENDO_DIRECTIVES = "kendo.directives";
        public static ANGULAR_LADDA = "angular-ladda";
        public static TOASTR = "toastr";
        public static GRISTACKANGULAR ="gridstack-angular";
    };

    export class ServicesExternal {
        public static uib_Modal = "$uibModal";

    };

    export class Modules {
        public static slate = "slate";
        //I wonder if we need app.directive and slate.directive i think they serve the same purpose not sure...
        public static slateDirectives = "slate.directives";
        public static slateServices = "slate.service";
        public static slateControllers = "slate.controller";
        public static slateThirdPartyModules = "slate.thirdPartyModules";
        public static thirdPartyModules = "third.party.modules";
        public static components = "slate.components";

    };
    export class Components {
        //<opened-Claims-Panel></open-Claims-Panel>
        public static reOpenedClaimsPanel = "reOpenedClaimsPanel";
        public static openClaimsPanel = "openedClaimsPanel";

    }
    export class Controllers {
        public static contactController = "slate.contact.controller";
        public static helpfulLinksController = "HelpfulLinksController";
        public static leftNavController = "LeftNavController";
        public static modalInstanceController = "ModalInstanceController";
        public static dashBoardAngular = "dashBoardAngular";
    };

    export class Services {
        public static DropDownItemsService = "slateDropDownItemsService";
        public static ContactService = "slateContactService";

    };

    export class Directives {
        public static grid = "slateGrid";
        public static dropDown = "slateDropDown";
        public static multiselect = "slateMultiselectDropDown";
        public static autocomplete = "slateAutocomplete";

        public static contactInformationSection = "slateContactInformationSection";
        public static contactTypeSection = "slateContactTypeSection";

        //public static grid = "slateGrid";
        public static passwordComplexity = "passwordComplexity";
        public static passwordRequirement = "passwordRequirement";
        public static checkBox = "checkBox";
        public static addressSection = "slateAddressSection";
        public static phoneSection = "slatePhoneSection";
        public static emailSection = "slateEmailSection";
        public static serviceSection = "slateServiceSection";
    };

    export class Values {
        public static CurrentUser = "currentUser";
    };
};