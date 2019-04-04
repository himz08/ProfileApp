import { Observable } from 'rxjs';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {

    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>  {

    canDeactivate(component: CanComponentDeactivate ,
        currentRoute : ActivatedRouteSnapshot ,
        state : RouterStateSnapshot,
        nextState?: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | 
        boolean  {
            return component.canDeactivate();
    }


}