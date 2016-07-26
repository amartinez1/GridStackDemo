import { names } from '../angular.global';
import { ReOpenedClaimsComponent } from '../components/reopenedclaims/reOpenedClaims.component';
import { TransferredClaimsComponent } from "../components/transferredclaims/transferredclaims.component";
import { ClosedClaimsComponent } from "../components/closedclaims/closedClaims.component";
import { FlaggedClaimsComponent } from "../components/flaggedclaims/flaggedClaims.component";
angular.module(names.Modules.components, []);
angular
    .module(names.Modules.components)
    .component(names.Components.reOpenedClaimsPanel, new ReOpenedClaimsComponent())
    .component(names.Components.openClaimsPanel, new ReOpenedClaimsComponent())
    .component(names.Components.transferredClaimsPanel, new TransferredClaimsComponent())
    .component(names.Components.closedClaimsPanel, new ClosedClaimsComponent())
    .component(names.Components.assignedClaimsPanel, new ClosedClaimsComponent())
    .component(names.Components.flaggedClaimsPanel, new FlaggedClaimsComponent());
