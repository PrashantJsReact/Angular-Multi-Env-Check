import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/Services/spinner.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  constructor(private spinner: SpinnerService) {}

  ngOnInit(): void {}

  toggleSpinner() {
    const spinnerType: string = 'payment_gateway';
    this.spinner.setLoading(true, spinnerType);
    setTimeout(() => {
      this.spinner.setLoading(false, spinnerType);
    }, 5000);
  }
}
