import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/Services/spinner.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private spinner: SpinnerService) {}

  ngOnInit(): void {}

  toggleSpinner() {
    const spinnerType: string = "login"
    this.spinner.setLoading(true, spinnerType);
    setTimeout(() => {
      this.spinner.setLoading(false, spinnerType);
    }, 5000);
  }
}
