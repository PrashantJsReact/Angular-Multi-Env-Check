import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/Services/spinner.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
})
export class Comp3Component implements OnInit {
  constructor(private spinner: SpinnerService) {}

  ngOnInit(): void {}

  toggleSpinner() {
    const spinnerType: string = 'content_load';
    this.spinner.setLoading(true, spinnerType);
    setTimeout(() => {
      this.spinner.setLoading(false, spinnerType);
    }, 5000);
  }
}
