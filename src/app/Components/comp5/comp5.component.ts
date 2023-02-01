import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/Services/spinner.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {

  constructor(private spinner: SpinnerService) { }

  ngOnInit(): void {
  }


  toggleSpinner() {
    const spinnerType: string = 'inviting_client';
    this.spinner.setLoading(true, spinnerType);
    setTimeout(() => {
      this.spinner.setLoading(false, spinnerType);
    }, 5000);
  }
}
