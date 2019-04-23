import { Component } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent {
  public myModel = '';
  public telephoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  numberMask = createNumberMask({
    prefix: '',
    decimalSymbol: ',',
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    integerLimit: 8,
    decimalLimit: 4
  });

}
