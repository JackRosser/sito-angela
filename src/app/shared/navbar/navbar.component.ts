import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

toggleMobile:boolean = false

showMenuMobile():void {
  this.toggleMobile = !this.toggleMobile
}

}
