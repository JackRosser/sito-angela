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
    navbarButtonsHoverBg: "bg-yellow-300",
    navbarButtonHoverText: "text-orange-400",
    navbarMobileBg: "bg-orange-300",
    navbarMobileButtonHover: "hover:text-orange-400",
    navbarMobileIcon: "text-orange-500",
    mainBg: "bg-orange-100"
  },
  {
    theme: "Lampone",
    navbarBg: "bg-orange-300",
    navbarButtonsBg: "bg-orange-500",
    navbarButtonsHoverBg: "bg-yellow-300",
    navbarButtonHoverText: "text-orange-400",
    navbarMobileBg: "bg-orange-300",
    navbarMobileButtonHover: "hover:text-orange-400",
    navbarMobileIcon: "text-orange-500",
    mainBg: "bg-orange-100"
  },
  {
    theme: "Kiwi",
    navbarBg: "bg-orange-300",
    navbarButtonsBg: "bg-orange-500",
    navbarButtonsHoverBg: "bg-yellow-300",
    navbarButtonHoverText: "text-orange-400",
    navbarMobileBg: "bg-orange-300",
    navbarMobileButtonHover: "hover:text-orange-400",
    navbarMobileIcon: "text-orange-500",
    mainBg: "bg-orange-100"
  },
  {
    theme: "Mirtillo",
    navbarBg: "bg-orange-300",
    navbarButtonsBg: "bg-orange-500",
    navbarButtonsHoverBg: "bg-yellow-300",
    navbarButtonHoverText: "text-orange-400",
    navbarMobileBg: "bg-orange-300",
    navbarMobileButtonHover: "hover:text-orange-400",
    navbarMobileIcon: "text-orange-500",
    mainBg: "bg-orange-100"
  }
]
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
    }, 2000);
  } else {
    this.toggleShowThemesSelector = false
    this.themesSelector = "animation: anim-inactive 2s both"
    this.scaleFruit = "scale-0"
    this.scaleKiwi = "scale-0"
  }
}

themesMobile:boolean = true

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


