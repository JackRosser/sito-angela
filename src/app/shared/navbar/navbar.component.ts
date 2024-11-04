import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { iTheme } from '../../models/theme';
import { iTemaVar } from '../../models/tema-var';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

constructor(private themeSvc:ThemeService) {}

toggleMobile:boolean = false

// TOGGLE PER MOSTRARE IL MENU MOBILE

showMenuMobile():void {
  this.toggleMobile = !this.toggleMobile
}

theme!:iTheme

themes:iTemaVar[] = [
  {
    theme: "Arancia",
    navbarBg: "bg-orange-300",
    navbarButtonsBg: "bg-orange-500",
    navbarButtonsHoverBg: "hover:bg-yellow-400 hover:text-orange-500",
    navbarMobileBg: "bg-orange-300",
    navbarMobileButtonHover: "hover:text-orange-400",
    navbarMobileIcon: "text-orange-500",
    mainBg: "bg-orange-100"
  },
  {
    theme: "Ciliegia",
    navbarBg: "bg-red-300",
    navbarButtonsBg: "bg-red-500",
    navbarButtonsHoverBg: "hover:bg-red-400 hover:text-red-500",
    navbarMobileBg: "bg-red-300",
    navbarMobileButtonHover: "hover:text-red-400",
    navbarMobileIcon: "text-red-500",
    mainBg: "bg-red-100"
  },
  {
    theme: "Kiwi",
    navbarBg: "bg-green-300",
    navbarButtonsBg: "bg-green-500",
    navbarButtonsHoverBg: "hover:bg-green-400 hover:text-green-500",
    navbarMobileBg: "bg-green-300",
    navbarMobileButtonHover: "hover:text-green-400",
    navbarMobileIcon: "text-green-500",
    mainBg: "bg-green-100"
  },
  {
    theme: "Mirtillo",
    navbarBg: "bg-violet-300",
    navbarButtonsBg: "bg-violet-500",
    navbarButtonsHoverBg: "hover:bg-violet-400 hover:text-violet-500",
    navbarMobileBg: "bg-violet-300",
    navbarMobileButtonHover: "hover:text-violet-400",
    navbarMobileIcon: "text-violet-500",
    mainBg: "bg-violet-100"
  }
]

changeTheme(frutto:string):void {
switch(frutto) {
  case "orange": this.themeSvc.changeThemeBh(this.themes[0].navbarBg, this.themes[0].navbarButtonsBg, this.themes[0].navbarButtonsHoverBg, this.themes[0].navbarMobileBg, this.themes[0].navbarMobileButtonHover, this.themes[0].navbarMobileIcon, this.themes[0].mainBg)
  this.themeSvc.theme$.subscribe(newTheme => {
    this.theme = newTheme
  })
  break;
  case "ciliegia": this.themeSvc.changeThemeBh(this.themes[1].navbarBg, this.themes[1].navbarButtonsBg, this.themes[1].navbarButtonsHoverBg,  this.themes[1].navbarMobileBg, this.themes[1].navbarMobileButtonHover, this.themes[1].navbarMobileIcon, this.themes[1].mainBg)
  this.themeSvc.theme$.subscribe(newTheme => {
    this.theme = newTheme
  })
  break;
  case "kiwi": this.themeSvc.changeThemeBh(this.themes[2].navbarBg, this.themes[2].navbarButtonsBg, this.themes[2].navbarButtonsHoverBg, this.themes[2].navbarMobileBg, this.themes[2].navbarMobileButtonHover, this.themes[2].navbarMobileIcon, this.themes[2].mainBg)
  this.themeSvc.theme$.subscribe(newTheme => {
    this.theme = newTheme
  })
  break;
  case "mirtillo": this.themeSvc.changeThemeBh(this.themes[3].navbarBg, this.themes[3].navbarButtonsBg, this.themes[3].navbarButtonsHoverBg, this.themes[3].navbarMobileBg, this.themes[3].navbarMobileButtonHover, this.themes[3].navbarMobileIcon, this.themes[3].mainBg)
  this.themeSvc.theme$.subscribe(newTheme => {
    this.theme = newTheme
  })
  break;
}
}

selectedTheme!:string

toggleShowThemesSelector:boolean = false
themesSelector:string = ""
scaleFruit:string = "scale-0"
scaleKiwi:string = "scale-0"

showSelector():void {
  if(!this.toggleShowThemesSelector) {
    this.toggleShowThemesSelector = true
    this.themesSelector = "animation: anim-active 2s both"
    setTimeout(() => {
      this.scaleFruit = "scale-[1.2]"
      this.scaleKiwi = "scale-[0.8]"
      this.themesSelector = "transform: translateX(-50vw) translateY(50vh) scale(2)"
    }, 2000);
  } else {
    this.toggleShowThemesSelector = false
    this.themesSelector = "animation: anim-inactive 2s both"
    this.scaleFruit = "scale-0"
    this.scaleKiwi = "scale-0"
    setTimeout(() => {
      this.themesSelector = ""
    }, 2000);
  }
}

themesMobile:boolean = false

showThemesMobile():void {
  this.themesMobile = !this.themesMobile
  this.toggleMobile = !this.toggleMobile
}

ngOnInit() {
  this.themeSvc.theme$.subscribe(style => {
this.theme = style
  })
}

}


