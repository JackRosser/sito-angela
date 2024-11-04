import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angela';

constructor(private themeSvc:ThemeService) {}

customTheme!:string

ngOnInit() {

this.themeSvc.theme$.subscribe(theme => {
  this.customTheme = theme.mainBg
})

}



}
