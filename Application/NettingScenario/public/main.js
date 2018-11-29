(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carddemoBasicUsage .card-media {\r\n    background-color: #999999; \r\n}\r\n\r\n.example-form-field {\r\n    width: 200px;\r\n}\r\n\r\n.row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n}\r\n\r\n.col-md-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n}\r\n\r\n.col-md-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n}\r\n\r\n.col-md-4 {\r\n    flex: 0 0 33%;\r\n    max-width: 33%;\r\n}\r\n\r\n.col-md-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n}\r\n\r\n.error-help {\r\n    width: 90%;\r\n    padding-left: 5%;\r\n    text-align: right\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons\" />\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n\n<mat-card style=\"margin:2em;padding-top:0;padding-left:0;padding-right:0\" class=\"example-card\">\n  <mat-card-title style=\"background:rgba(0,0,0,.06); padding:10px 10px;\">Get Company Balance</mat-card-title>\n  <mat-card-content style=\"padding:1em;\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <mat-form-field class=\"example-form-field\" style=\"width: 90%;padding-left: 5%\">\n          <input matInput type=\"text\" placeholder=\"Company Name\" name=\"companyName\" [(ngModel)]=\"companyName\" (input)=\"disableError($event)\">\n        </mat-form-field>\n        <div class=\"example-form-field error-help\" *ngIf=\"!isCompanyNamePresent\">Company Name is Required</div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <mat-form-field class=\"example-form-field\" style=\"width: 90%;padding-left: 5%\">\n          <input [disabled]=\"true\" matInput type=\"text\" name=\"companyBalance\" [(ngModel)]=\"companyBalance\" placeholder=\"Balance will be auto-populated\">\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\" style=\"padding-left: 2.5%\">\n        <button mat-raised-button type=\"submit\" (click)=\"getBalance()\">Submit</button>\n        <button mat-raised-button type=\"submit\" name=\"clearGetBalance\" (click)=\"resetFields($event)\" style=\"margin-left: 2%\">Clear</button>\n      </div>\n    </div>\n    \n  </mat-card-content>\n</mat-card>\n\n\n<mat-card style=\"margin:2em;padding-top:0;padding-left:0;padding-right:0\" class=\"example-card\">\n  <mat-card-title style=\"background:rgba(0,0,0,.06); padding:10px 10px;\">Transfer Balance</mat-card-title>\n  <mat-card-content style=\"padding:1em;\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <mat-form-field class=\"example-form-field\" style=\"width: 90%;padding-left: 5%\">\n          <input matInput type=\"text\" placeholder=\"From Company Name\" name=\"fromCompanyName\" [(ngModel)]=\"fromCompanyName\" (input)=\"disableError($event)\">\n        </mat-form-field>\n        <div class=\"example-form-field error-help\" *ngIf=\"!isFromCompanyNamePresent\">From Company Name is Required</div>\n      </div>\n\n      <div class=\"col-md-4\">\n        <mat-form-field class=\"example-form-field\" style=\"width: 90%;padding-left: 5%\">\n          <input matInput type=\"text\" placeholder=\"To Company Name\" name=\"toCompanyName\" [(ngModel)]=\"toCompanyName\" (input)=\"disableError($event)\">\n        </mat-form-field>\n        <div class=\"example-form-field error-help\" *ngIf=\"!isToCompanyNamePresent\">To Company Name is Required</div>\n      </div>\n\n      <div class=\"col-md-4\">\n        <mat-form-field class=\"example-form-field\" style=\"width: 90%;padding-left: 5%\">\n          <input matInput type=\"number\" placeholder=\"Amount to be transferred\" name=\"amountToBeTransferred\" [(ngModel)]=\"amountToBeTransferred\" (input)=\"disableError($event)\">\n        </mat-form-field>\n        <div class=\"example-form-field error-help\" *ngIf=\"!isAmountPresent\">Amount to be transferred is Required, range is >0 & <=1000 </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\" style=\"padding-left: 0.5%\">\n      <button mat-raised-button type=\"submit\" (click)=\"transferBalance()\">Submit</button>\n      <button mat-raised-button type=\"submit\" name=\"clearTransferBalance\" (click)=\"resetFields($event)\" style=\"margin-left: 2%\">Clear</button>\n    </div>\n  </mat-card-content>\n</mat-card>\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"large\" color=\"#fff\" type=\"ball-newton-cradle\"></ngx-spinner>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./src/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(http, spinner) {
        this.http = http;
        this.spinner = spinner;
        this.title = "Netting Scenario";
        this.value = "";
        this.companyName = "";
        this.companyBalance = "";
        this.fromCompanyName = "";
        this.toCompanyName = "";
        this.amountToBeTransferred = 1;
        this.isAmountPresent = true;
        this.isToCompanyNamePresent = true;
        this.isFromCompanyNamePresent = true;
        this.isCompanyNamePresent = true;
    }
    AppComponent.prototype.getBalance = function () {
        var _this = this;
        if (this.companyName.trim().length > 0) {
            this.spinner.show();
            this.http.get(_global__WEBPACK_IMPORTED_MODULE_4__["Global"].SERVICE_ENDPOINT + '/getAmount/?companyName=' + this.companyName.trim()).subscribe(function (data) {
                _this.companyBalance = data.json();
                _this.spinner.hide();
            }, function (err) {
                console.log(err);
                var body = JSON.parse(err.text());
                console.log(body);
                console.log(body.error);
                console.log(body.error.message);
                _this.spinner.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: body.error.message,
                    text: "",
                    timer: 2000,
                    showConfirmButton: false
                }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
            });
        }
        else {
            this.isCompanyNamePresent = false;
        }
    };
    AppComponent.prototype.transferBalance = function () {
        var _this = this;
        (this.fromCompanyName.trim().length > 0) ? (this.isFromCompanyNamePresent = true) : (this.isFromCompanyNamePresent = false);
        (this.toCompanyName.trim().length > 0) ? (this.isToCompanyNamePresent = true) : (this.isToCompanyNamePresent = false);
        (this.amountToBeTransferred > 0 && this.amountToBeTransferred <= 1000) ? (this.isAmountPresent = true) : (this.isAmountPresent = false);
        if (this.fromCompanyName.trim().length > 0 && this.toCompanyName.trim().length > 0 && this.amountToBeTransferred > 0 && this.amountToBeTransferred <= 1000) {
            this.spinner.show();
            this.http.post(_global__WEBPACK_IMPORTED_MODULE_4__["Global"].SERVICE_ENDPOINT + '/transferAmount', { 'fromCompanyName': this.fromCompanyName.trim(), 'toCompanyName': this.toCompanyName.trim(), 'amount': this.amountToBeTransferred }).subscribe(function (data) {
                var body = JSON.parse(data.text());
                _this.spinner.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: body.message,
                    text: "",
                    timer: 2000,
                    showConfirmButton: false
                }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
            }, function (err) {
                console.log(err);
                var body = JSON.parse(err.text());
                console.log(body);
                console.log(body.error);
                console.log(body.error.message);
                _this.spinner.hide();
                if (body.isSettleUp === true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: body.message,
                        text: "Do you want to settle up the balance?",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Settle up'
                    }).then(function (result) {
                        if (result.value) {
                            _this.http.post(_global__WEBPACK_IMPORTED_MODULE_4__["Global"].SERVICE_ENDPOINT + '/settleUpBalance', { 'companyName': _this.fromCompanyName.trim() }).subscribe(function (data) {
                                console.log(data);
                            });
                        }
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: body.error.message,
                        text: "",
                        timer: 2000,
                        showConfirmButton: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                }
            });
        }
    };
    AppComponent.prototype.disableError = function (event) {
        switch (event.target.name) {
            case 'companyName':
                (this.companyName.trim().length > 0) ? (this.isCompanyNamePresent = true) : (this.isCompanyNamePresent = false);
                break;
            case 'fromCompanyName':
                (this.fromCompanyName.trim().length > 0) ? (this.isFromCompanyNamePresent = true) : (this.isFromCompanyNamePresent = false);
                break;
            case 'toCompanyName':
                (this.toCompanyName.trim().length > 0) ? (this.isToCompanyNamePresent = true) : (this.isToCompanyNamePresent = false);
                break;
            case 'amountToBeTransferred':
                (this.amountToBeTransferred > 0 && this.amountToBeTransferred <= 1000) ? (this.isAmountPresent = true) : (this.isAmountPresent = false);
        }
    };
    AppComponent.prototype.resetFields = function (event) {
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
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.SERVICE_ENDPOINT = 'http://localhost:3000';
    return Global;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\HyperLedgerApp\Application\NettingScenario\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map