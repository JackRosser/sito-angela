import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iTheme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {}

private bhTheme = new BehaviorSubject<iTheme>({
  navbarBg: 'fixed text-white py-2 pr-5 lg:px-5 w-full bg-orange-300 z-20',
  navbarButtons: 'bg-orange-500 py-2 px-3 rounded-lg cursor-pointer hover:bg-yellow-300 hover:text-orange-400 transition-colors duration-300 hidden lg:block',
  mobileBg: "flex flex-col items-end lg:hidden bg-orange-300 text-white px-5 py-5 rounded-bl-2xl",
  mobileButton: "py-2 px-3 cursor-pointer hover:text-orange-400 transition-colors duration-300 custom-text-shadow",
  spanIcon: "text-orange-500",
  mainBg: 'bg-orange-100'
})
theme$ = this.bhTheme.asObservable()



}
