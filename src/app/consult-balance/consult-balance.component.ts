import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consult-balance',
  templateUrl: './consult-balance.component.html',
  styleUrls: ['./consult-balance.component.scss'],
})
export class ConsultBalanceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
  toastButtons = [
    {
      text: 'Ok',
    }
  ];

}
