import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}

  handleOptionSelection(event: any) {
    const selectedOption = event.target.value;
    switch (selectedOption) {
      case 'credit card':
        this.navController.navigateForward('/credit');
        break;
      case 'debit card':
        this.navController.navigateForward('/debit');
        break;
      case 'consult history':
        this.navController.navigateForward('/history');
        break;
      case 'consult balance':
        this.navController.navigateForward('/balance');
        break;

      // Add other cases for different options
    }
  }

}
