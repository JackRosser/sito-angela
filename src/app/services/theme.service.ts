import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iTheme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {}

navbarBg:string = "bg-orange-300"
navbarButtonsBg: string = "bg-orange-500"
navbarButtonsHover: string = "hover:bg-yellow-300 hover:text-orange-400"
navbarMobileBg: string = "bg-orange-300"
navbarMobileButtonHover: string = "hover:text-orange-400"
navbarMobileIcon: string = "text-orange-500"
mainBg: string = "bg-orange-100"

private bhTheme = new BehaviorSubject<iTheme>({
  navbarBg: `fixed text-white py-2 pr-5 lg:px-5 w-full z-20 ${this.navbarBg}`,
  navbarButtons: `py-2 px-3 rounded-lg cursor-pointer transition-colors duration-300 hidden lg:block ${this.navbarButtonsBg} ${this.navbarButtonsHover}`,
  mobileBg: `flex flex-col items-end lg:hidden text-white px-5 py-5 rounded-bl-2xl ${this.navbarMobileBg}`,
  mobileButton: `py-2 px-3 cursor-pointer transition-colors duration-300 custom-text-shadow ${this.navbarMobileButtonHover}`,
  spanIcon: this.navbarMobileIcon,
  mainBg: this.mainBg
})
theme$ = this.bhTheme.asObservable()

changeTheme(navBg:string, navBtnBg:string, navBtnHoverBg:string, navBtnHoverText:string, navMobBg:string, navMobBtnHov:string, navMobIcon:string, main:string):void {
this.navbarBg = navBg
this.navbarButtonsBg = navBtnBg
this.navbarButtonsHover = `hover:${navBtnHoverBg} hover:${navBtnHoverText}`
this.navbarMobileBg = navMobBg
this.navbarMobileButtonHover = navMobBtnHov
this.navbarMobileIcon = navMobIcon
this.mainBg = main
}

}
