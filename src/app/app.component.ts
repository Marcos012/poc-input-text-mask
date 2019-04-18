import { Component } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public myModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  numberMask = createNumberMask({
    prefix: '',
    decimalSymbol: ',',
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    integerLimit: 8,
    decimalLimit: 4
  });

}
