import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NgxSpinnerService } from 'ngx-spinner'
import swal from 'sweetalert2';
import {Global} from '../global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Netting Scenario";
  value = "";
  companyName = "";
  companyBalance = "";
  fromCompanyName = "";
  toCompanyName = "";
  amountToBeTransferred = 1;

  isAmountPresent = true;
  isToCompanyNamePresent = true;
  isFromCompanyNamePresent = true;
  isCompanyNamePresent = true;

  constructor(private http: Http, private spinner: NgxSpinnerService) { }

  getBalance() {
    if (this.companyName.trim().length > 0) {
      this.spinner.show();
      this.http.get(Global.SERVICE_ENDPOINT+'/getAmount/?companyName=' + this.companyName.trim()).subscribe((data) => {
        this.companyBalance = data.json();
        this.spinner.hide();
      }, (err) => {
        console.log(err);
        var body = JSON.parse(err.text());
        console.log(body);
        console.log(body.error);
        console.log(body.error.message);

        this.spinner.hide();
        swal({
          title: body.error.message,
          text: "",
          timer: 2000,
          showConfirmButton: false
        }).catch(swal.noop)
      });
    } else {
      this.isCompanyNamePresent = false;
    }
  }

  transferBalance() {
    (this.fromCompanyName.trim().length > 0) ? (this.isFromCompanyNamePresent = true) : (this.isFromCompanyNamePresent = false);
    (this.toCompanyName.trim().length > 0) ? (this.isToCompanyNamePresent = true) : (this.isToCompanyNamePresent = false);
    (this.amountToBeTransferred > 0 && this.amountToBeTransferred <= 1000) ? (this.isAmountPresent = true) : (this.isAmountPresent = false);

    if (this.fromCompanyName.trim().length > 0 && this.toCompanyName.trim().length > 0 && this.amountToBeTransferred > 0 && this.amountToBeTransferred <= 1000) {
      this.spinner.show();
      this.http.post(Global.SERVICE_ENDPOINT+'/transferAmount', { 'fromCompanyName': this.fromCompanyName.trim(), 'toCompanyName': this.toCompanyName.trim(), 'amount': this.amountToBeTransferred }).subscribe((data) => {
        var body = JSON.parse(data.text());
        this.spinner.hide();
        swal({
          title: body.message,
          text: "",
          timer: 2000,
          showConfirmButton: false
        }).catch(swal.noop)
      }, (err) => {
        console.log(err);

        var body = JSON.parse(err.text());
        console.log(body);
        console.log(body.error);
        console.log(body.error.message);
        
        this.spinner.hide();
        if(body.isSettleUp === true){
          swal({
            title: body.message,
            text: "Do you want to settle up the balance?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Settle up'
          }).then((result) => {
            if (result.value) {
              this.http.post(Global.SERVICE_ENDPOINT+'/settleUpBalance', { 'companyName': this.fromCompanyName.trim()}).subscribe((data) => {
                console.log(data);
              })
            }
          })
        }else{
          swal({
            title: body.error.message,
            text: "",
            timer: 2000,
            showConfirmButton: false
          }).catch(swal.noop)
        }
      });
    }
  }

  disableError(event) {
    switch (event.target.name) {
      case 'companyName':
        (this.companyName.trim().length > 0) ? (this.isCompanyNamePresent = true) : (this.isCompanyNamePresent = false)
        break;
      case 'fromCompanyName':
        (this.fromCompanyName.trim().length > 0) ? (this.isFromCompanyNamePresent = true) : (this.isFromCompanyNamePresent = false)
        break;
      case 'toCompanyName':
        (this.toCompanyName.trim().length > 0) ? (this.isToCompanyNamePresent = true) : (this.isToCompanyNamePresent = false)
        break;
      case 'amountToBeTransferred':
        (this.amountToBeTransferred > 0 && this.amountToBeTransferred <= 1000) ? (this.isAmountPresent = true) : (this.isAmountPresent = false)
    }
  }

  resetFields(event){
    switch (event.target.name) {
      case 'clearGetBalance':
        this.companyName = '';
        this.companyBalance = '';
        break;
      case 'clearTransferBalance':
        this.fromCompanyName = '';
        this.toCompanyName = '';
        this.amountToBeTransferred = 1;
    }
  }
}
