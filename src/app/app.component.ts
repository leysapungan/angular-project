import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello Angular';
  items =[];

  navbarOpen = false;


  // runMyFuction(item)

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
