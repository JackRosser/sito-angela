import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

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

navBg!:string
liStyle!:string
mobileBg!:string
mobileButton!:string

ngOnInit() {
  this.themeSvc.theme$.subscribe(style => {
    this.navBg = style.navbarBg
    this.liStyle = style.navbarButtons
    this.mobileBg = style.mobileBg
    this.mobileButton = style.mobileButton
  })
}

}
