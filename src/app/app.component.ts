import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  ionViewDidEnter() {
    timer(5000).subscribe(() => {
      const splash = document.getElementById('splash');
      if (splash) {
        splash.style.display = 'none';
      }
    });
  }
  
  constructor() {}
}
