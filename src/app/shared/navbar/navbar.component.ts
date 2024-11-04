import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { iTheme } from '../../models/theme';

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

ngOnInit() {
  this.themeSvc.theme$.subscribe(style => {
this.theme = style
  })
}

}
