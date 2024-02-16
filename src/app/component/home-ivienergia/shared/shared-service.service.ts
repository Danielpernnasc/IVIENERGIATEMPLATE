import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() {
    
   }

   private isSidenavOpenSubject = new BehaviorSubject<boolean>(false);
   isSidenavOpen$ = this.isSidenavOpenSubject.asObservable();
 
   toggleSidenav() {
     const isOpen = !this.isSidenavOpenSubject.value;
     this.isSidenavOpenSubject.next(isOpen);
     return isOpen;
   }
}
