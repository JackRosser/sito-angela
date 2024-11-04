import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

private bhTheme = new BehaviorSubject<string>("bg-orange-100")
theme$ = this.bhTheme.asObservable()

changeTheme(theme:string):void {
this.bhTheme.next(theme)
}

}
