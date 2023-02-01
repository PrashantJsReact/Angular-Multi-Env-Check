import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/Services/spinner.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private spinner: SpinnerService) { }

  ngOnInit(): void {
  }

  toggleSpinner() {
    const spinnerType: string = 'confirming';
    this.spinner.setLoading(true, spinnerType);
    setTimeout(() => {
      this.spinner.setLoading(false, spinnerType);
    }, 5000);
  }
}
