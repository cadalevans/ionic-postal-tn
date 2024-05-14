import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consult-history',
  templateUrl: './consult-history.component.html',
  styleUrls: ['./consult-history.component.scss'],
})
export class ConsultHistoryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
  public toastButtons = [
    {
      text: 'Ok',
      role: 'cancel'
    }
  ];

}
