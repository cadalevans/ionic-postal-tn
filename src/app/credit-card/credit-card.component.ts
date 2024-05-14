import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  toastButtons = [
    {
      text: 'OK',
    }
  ];
}
