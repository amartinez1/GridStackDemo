﻿import * as angular from "angular";
import {names} from "../angular.global";
angular.module("third.party.modules", [
    names.ModulesExternal.GRISTACKANGULAR,
    names.ModulesExternal.KENDO_DIRECTIVES]);