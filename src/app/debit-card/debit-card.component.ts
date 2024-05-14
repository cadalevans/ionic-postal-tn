import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss'],
})
export class DebitCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  toastButtons = [
    {
      text: 'OK',
    }
  ];

}
