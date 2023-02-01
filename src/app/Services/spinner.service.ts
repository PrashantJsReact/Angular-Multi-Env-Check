import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor(private ngxSpinner: NgxSpinnerService) {}

  setLoading(loading: boolean, spinnerType: string) {
    if (loading) {
      this.ngxSpinner.show(spinnerType);
    } else {
      this.ngxSpinner.hide(spinnerType);
    }
  }
}
