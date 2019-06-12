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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'InstaSchedulerFrontEnd';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/core/auth/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        //
        return this.authService.isAuth().toPromise().then(function (response) {
            if (response === true) {
                console.log('Hello from AuthGuard: true');
                return true;
            }
            else {
                console.log('Hello from AuthGuard: false');
                _this.router.navigate(['/login']);
                return false;
            }
        }).catch(function (error) {
            console.log('Hello from AuthGuard: catch(false)');
            _this.router.navigate(['/login']);
            return false;
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");
/* harmony import */ var _services_instagram_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/instagram.service */ "./src/app/core/services/instagram.service.ts");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"],
                _services_instagram_service__WEBPACK_IMPORTED_MODULE_5__["InstagramService"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService_1 = AuthService;
    AuthService.prototype.isAuth = function () {
        var _this = this;
        return this.http.get(AuthService_1.BASE_URL + '/api/instagram/isauth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    AuthService.prototype.login = function (password, username) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.set('username', username);
        params = params.set('password', password);
        return this.http.post(AuthService_1.BASE_URL + '/api/instagram/auth', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log('Auth: Login');
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    AuthService.prototype.errorHandler = function (err) {
        if (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Server Error');
    };
    var AuthService_1;
    AuthService.BASE_URL = document.getElementById('baseurl-asp').innerHTML;
    AuthService = AuthService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/instagram.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/instagram.service.ts ***!
  \****************************************************/
/*! exports provided: InstagramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramService", function() { return InstagramService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var InstagramService = /** @class */ (function () {
    function InstagramService(http) {
        this.http = http;
    }
    InstagramService_1 = InstagramService;
    InstagramService.prototype.createPost = function (file, content) {
        var _this = this;
        var formparams = new FormData();
        formparams.append(file.name, file);
        formparams.append('content', content);
        var paramsOpt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        paramsOpt = paramsOpt.set('content', content);
        return this.http.post(InstagramService_1.BASE_URL + '/api/instagram/createpost', formparams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    InstagramService.prototype.retrieveProfileData = function () {
        var _this = this;
        return this.http.get(InstagramService_1.BASE_URL + '/api/instagram/profile')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log('Status:' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    InstagramService.prototype.errorHandler = function (err) {
        if (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Server Error');
    };
    var InstagramService_1;
    InstagramService.BASE_URL = document.getElementById('baseurl-asp').innerHTML;
    InstagramService = InstagramService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InstagramService);
    return InstagramService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");
/* harmony import */ var _dashboardcomponent_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboardcomponent/dashboard.component */ "./src/app/dashboard/dashboardcomponent/dashboard.component.ts");





var dashboardRoutes = [
    { path: 'dashboard', component: _dashboardcomponent_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(dashboardRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboardcomponent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboardcomponent/dashboard.component */ "./src/app/dashboard/dashboardcomponent/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboardcomponent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            exports: [
                _dashboardcomponent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboardcomponent/dashboard.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboardcomponent/dashboard.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-expand-profile{\r\n    min-height: 500px;\r\n}\r\n\r\n.modal-title-settings{\r\n    text-align: center; \r\n}\r\n\r\n.dropzone-properties{\r\n    border-style:dashed;\r\n    text-align:center;\r\n    border-color: #467fcf;\r\n}\r\n\r\n.dz-progress{\r\n    display:none;\r\n}\r\n\r\n.card-header{\r\n    height: 10.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZGNvbXBvbmVudC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkY29tcG9uZW50L2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZXhwYW5kLXByb2ZpbGV7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlLXNldHRpbmdze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLmRyb3B6b25lLXByb3BlcnRpZXN7XHJcbiAgICBib3JkZXItc3R5bGU6ZGFzaGVkO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXItY29sb3I6ICM0NjdmY2Y7XHJcbn1cclxuXHJcbi5kei1wcm9ncmVzc3tcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVye1xyXG4gICAgaGVpZ2h0OiAxMC41cmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboardcomponent/dashboard.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/dashboardcomponent/dashboard.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"flex-fill\">\n    <!--Navigation bar -->\n    <app-dashboard-navbar></app-dashboard-navbar>\n    <!--Nav Options Area-->\n    <div class=\"header collapse d-lg-flex p-0\" id=\"headerMenuCollapse\">\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n\n          <div class=\"col-lg\">\n            <ul class=\"nav nav-tabs border-0 flex-column flex-lg-row\">\n              <li class=\"nav-item\">\n                <a href=\"javascript:void();\" routerLink=\"/dashboard\" class=\"nav-link\"><i class=\"fe fe-home\"></i>Home</a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"javascript:void(0);\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#create-post-modal\"><i\n                    class=\"fe fe-box\"></i> Post History</a>\n              </li>\n            </ul>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n\n\n    <!--Modal Area-->\n\n    <!--Create Instagram Post Modal-->\n    <div class=\"modal fade\" id=\"create-post-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\n      aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\"> Create an Instagram Post\n              <button id=\"joinmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </h5>\n          </div>\n          <div class=\"modal-body\">\n            <form action=\"javascript:void(0);\" action=\"post\">\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                    <div class=\"form-group\">\n                      <form action=\"javascript:void(0)\" class=\"dropzone dropzone-properties\" id=\"postimage\">\n                        <div class=\"fallback\">\n                          <input name=\"file\" type=\"file\" multiple />\n                        </div>\n                      </form>\n                    </div>\n\n                  \n                  </div>\n\n\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                    <div class=\"form-group\">\n                      <textarea attr.maxlength=\"{{MAX_DESCRIPTION_LIMIT}}\" id=\"post-description\"\n                      (input)=\"onUpdate($event,'post-content')\" (keyup)=\"onUpdate($event,'post-content')\"\n                      class=\"form-control\" name=\"group-description\" style=\"resize: none;\" rows=\"6\"\n                      placeholder=\"What would you like to share?\"></textarea>\n                      \n                      <div id=\"error-joingroup-code\" class=\"invalid-feedback\">{{error_create_group_code}}</div>\n                      <div id=\"error-joingroup-server\" class=\"invalid-feedback\">{{error_join_group_server}}</div>\n                    </div>\n\n                  </div>\n                </div>\n\n              \n              </div>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <div class=\"{{cssLoadingCreatePost}}\">\n              <div class=\"loader\"></div>\n              <div class=\"dimmer-content\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitPost($event)\" id=\"btn-postimage\">Submit Post\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--End Instagram Post Modal-->\n    <!-- End Modal Area -->\n\n    <div class=\"my-3 my-mid-5 animated bounceInLeft \">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-4\">\n            <div class=\"card card-profile card-expand-profile\">\n              <div class=\"card-header\"\n                style=\"background-image: url(/content/angular/assets/images/profilebg.jpg);\"></div>\n              <div class=\"card-body text-center\">\n                <img class=\"card-profile-img\" src=\"{{profileData.ProfileImageUri}}\">\n                <h3 class=\"mb-3\">{{profileData.FullName ? profileData.FullName : 'Undefined'}}</h3>\n                <p class=\"mb-4\">\n                  {{profileData.Username ? profileData.Username : 'Undefined'}}\n                </p>\n                <button class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#create-post-modal\">Create Instagram\n                  Post!</button>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"col-lg-8\">\n            <div class=\"page-header\">\n              <h1 class=\"page-title\">\n                My Instagram Posts\n              </h1>\n              <div class=\"page-subtitle\">1 - 12 of 1713 photos</div>\n              <div class=\"page-options d-flex\">\n                <select class=\"form-control custom-select w-auto\">\n                  <option value=\"asc\">Newest</option>\n                  <option value=\"desc\">Oldest</option>\n                </select>\n                <div class=\"input-icon ml-2\">\n                  <span class=\"input-icon-addon\">\n                    <i class=\"fe fe-search\"></i>\n                  </span>\n                  <input type=\"text\" class=\"form-control w-10\" placeholder=\"Search photo\">\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"alert alert-primary\">\n              First time here? It's simple! Get started and create a new post by clicking on the <b>\"Create Instagram\n                Post\"</b> button!\n            </div>\n\n\n            <div class=\"row row-cards\">\n              <div class=\"col-sm-6 \">\n                <div class=\"card p-3\">\n                  <a href=\"javascript:void(0)\" class=\"mb-3\">\n                    <img src=\"./demo/photos/grant-ritchie-338179-500.jpg\" alt=\"Photo by Nathan Guerrero\"\n                      class=\"rounded\">\n                  </a>\n                  <div class=\"d-flex align-items-center px-2\">\n                    <div class=\"avatar avatar-md mr-3\" style=\"background-image: url(demo/faces/male/41.jpg)\"></div>\n                    <div>\n                      <div>Nathan Guerrero</div>\n                      <small class=\"d-block text-muted\">12 days ago</small>\n                    </div>\n                    <div class=\"ml-auto text-muted\">\n                      <a href=\"javascript:void(0)\" class=\"icon\"><i class=\"fe fe-eye mr-1\"></i> 112</a>\n                      <a href=\"javascript:void(0)\" class=\"icon d-none d-md-inline-block ml-3\"><i\n                          class=\"fe fe-heart mr-1\"></i> 42</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"card p-3\">\n                  <a href=\"javascript:void(0)\" class=\"mb-3\">\n                    <img src=\"./demo/photos/grant-ritchie-338179-500.jpg\" alt=\"Photo by Nathan Guerrero\"\n                      class=\"rounded\">\n                  </a>\n                  <div class=\"d-flex align-items-center px-2\">\n                    <div class=\"avatar avatar-md mr-3\" style=\"background-image: url(demo/faces/male/41.jpg)\"></div>\n                    <div>\n                      <div>Nathan Guerrero</div>\n                      <small class=\"d-block text-muted\">12 days ago</small>\n                    </div>\n                    <div class=\"ml-auto text-muted\">\n                      <a href=\"javascript:void(0)\" class=\"icon\"><i class=\"fe fe-eye mr-1\"></i> 112</a>\n                      <a href=\"javascript:void(0)\" class=\"icon d-none d-md-inline-block ml-3\"><i\n                          class=\"fe fe-heart mr-1\"></i> 42</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n        </div>\n\n\n\n\n        <div class=\"row\">\n\n          <div class=\"col-12\">\n            <div class=\"card\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover table-outline table-vcenter text-nowrap card-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"text-center w-1\"><i class=\"icon-people\"></i></th>\n                      <th>User</th>\n                      <th>Usage</th>\n                      <th class=\"text-center\">Payment</th>\n                      <th>Activity</th>\n                      <th class=\"text-center\">Satisfaction</th>\n                      <th class=\"text-center\"><i class=\"icon-settings\"></i></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/26.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Elizabeth Martin</div>\n                        <div class=\"small text-muted\">\n                          Registered: Mar 19, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>42%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-yellow\" role=\"progressbar\" style=\"width: 42%\" aria-valuenow=\"42\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-visa\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>4 minutes ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.42\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">42%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/17.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Michelle Schultz</div>\n                        <div class=\"small text-muted\">\n                          Registered: Mar 2, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>0%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-red\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-googlewallet\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>5 minutes ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.0\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">0%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/21.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Crystal Austin</div>\n                        <div class=\"small text-muted\">\n                          Registered: Apr 7, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>96%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" style=\"width: 96%\" aria-valuenow=\"96\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-mastercard\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>a minute ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.96\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">96%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/male/32.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Douglas Ray</div>\n                        <div class=\"small text-muted\">\n                          Registered: Jan 15, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>6%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-red\" role=\"progressbar\" style=\"width: 6%\" aria-valuenow=\"6\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-shopify\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>a minute ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.06\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">6%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/12.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Teresa Reyes</div>\n                        <div class=\"small text-muted\">\n                          Registered: Mar 4, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>36%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-red\" role=\"progressbar\" style=\"width: 36%\" aria-valuenow=\"36\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-ebay\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>2 minutes ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.36\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">36%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/4.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Emma Wade</div>\n                        <div class=\"small text-muted\">\n                          Registered: Mar 20, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>7%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-red\" role=\"progressbar\" style=\"width: 7%\" aria-valuenow=\"7\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-paypal\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>a minute ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.07\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">7%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/27.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Carol Henderson</div>\n                        <div class=\"small text-muted\">\n                          Registered: Feb 22, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>80%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-visa\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>9 minutes ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.8\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">80%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/male/20.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Christopher Harvey</div>\n                        <div class=\"small text-muted\">\n                          Registered: Jan 22, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>83%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" style=\"width: 83%\" aria-valuenow=\"83\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-googlewallet\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>8 minutes ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.83\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">83%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboardcomponent/dashboard.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/dashboardcomponent/dashboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_instagram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/instagram.service */ "./src/app/core/services/instagram.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(instagramService) {
        this.instagramService = instagramService;
        this.MAX_DESCRIPTION_LIMIT = 2200;
        this.cssLoadingCreatePost = 'dimmer';
        this.postImage = null;
        this.postContent = null;
        this.profileData = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.initializeDropzoneComponents();
        this.initializeLayoutComponents();
        this.loadProfileData();
    };
    DashboardComponent.prototype.loadProfileData = function () {
        var _this = this;
        this.instagramService.retrieveProfileData().subscribe(function (data) {
            console.log('ProfileData(Dashboard): ' + JSON.stringify(data));
            _this.profileData = data;
        }, function (error) {
            console.log('An error occured while trying to load the data. Please try again or reload the page');
        });
    };
    DashboardComponent.prototype.initializeLayoutComponents = function () {
        document.getElementById('btn-postimage').setAttribute('disabled', '');
    };
    DashboardComponent.prototype.initializeDropzoneComponents = function () {
        var _this = this;
        var postDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_2__('form#postimage', {
            autoProcessQueue: false,
            uploadMultiple: false,
            addRemoveLinks: true,
            thumbnailWidth: 350,
            thumbnailHeight: 350,
            acceptedFiles: 'image/jpeg,image/png,image/gif',
            maxFiles: 1
        });
        postDropzone.on('addedfile', function (file) {
            if (postDropzone.files.length > 1) {
                postDropzone.removeFile(postDropzone.files[0]);
            }
            var validImage = new RegExp('(\.png|\.jpg|\.jpeg|\.gif)$').test(file.name);
            if (validImage) {
                _this.postImage = file;
                document.getElementById('btn-postimage').removeAttribute('disabled');
            }
            else {
                _this.postImage = null;
                document.getElementById('btn-postimage').setAttribute('disabled', '');
            }
        });
        postDropzone.on('removedfile', function (file) {
            document.getElementById('btn-postimage').setAttribute('disabled', '');
        });
        postDropzone.on('complete', function (data) {
            console.log('Complete: ' + JSON.stringify(data));
        });
    };
    DashboardComponent.prototype.onSubmitPost = function () {
        var _this = this;
        this.cssLoadingCreatePost = 'dimmer active';
        if (this.postImage === null) {
            this.cssLoadingCreatePost = 'dimmer';
            return;
        }
        if (this.postContent === null || this.postContent.length === 0) {
            this.postContent = '';
        }
        this.instagramService.createPost(this.postImage, this.postContent).subscribe(function (data) {
            console.log(data);
            _this.postContent = '';
            _this.postImage = null;
            _this.cssLoadingCreatePost = 'dimmer';
        }, function (error) {
            console.log(error);
            _this.cssLoadingCreatePost = 'dimmer';
        });
    };
    DashboardComponent.prototype.onUpdate = function (event, itemId) {
        if (event === null || event === undefined) {
            return;
        }
        switch (itemId) {
            case 'post-content':
                var content = event.target.value;
                if (content.length === 0 || content.trim().length === 0) {
                    this.postContent = '';
                }
                else {
                    this.postContent = content.trim();
                }
                break;
            default:
                console.log('(Dasboard: OnUpdate) Item ID not found');
                break;
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboardcomponent/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboardcomponent/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_instagram_service__WEBPACK_IMPORTED_MODULE_3__["InstagramService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homecomponent_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homecomponent/home.component */ "./src/app/home/homecomponent/home.component.ts");
/* harmony import */ var _login_logincomponent_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/logincomponent/login.component */ "./src/app/login/logincomponent/login.component.ts");





var homeRoutes = [
    { path: 'home', component: _homecomponent_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_logincomponent_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(homeRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _homecomponent_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homecomponent/home.component */ "./src/app/home/homecomponent/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_homecomponent_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [
                _homecomponent_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/homecomponent/home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/home/homecomponent/home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZWNvbXBvbmVudC9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/homecomponent/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/home/homecomponent/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"flex-fill\">\n    <!--Navigation bar -->\n    <app-home-navbar></app-home-navbar>\n     <!--Nav Options Area\n    <div class=\"header collapse d-lg-flex p-0\" id=\"headerMenuCollapse\">\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n\n          <div class=\"col-lg\">\n            <ul class=\"nav nav-tabs border-0 flex-column flex-lg-row\">\n              <li class=\"nav-item\">\n                <a href=\"javascript:void();\" routerLink=\"/dashboard\" class=\"nav-link\"><i\n                    class=\"fe fe-home\"></i>Dashboard</a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"javascript:void(0);\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#create-post-modal\"><i\n                    class=\"fe fe-box\"></i> Create Post</a>\n              </li>\n            </ul>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div> -->\n\n    <div class=\"my-3 my-mid-5\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <p>Home Page</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/homecomponent/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home/homecomponent/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/homecomponent/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/homecomponent/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logincomponent_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logincomponent/login.component */ "./src/app/login/logincomponent/login.component.ts");




var loginRoutes = [
    { path: 'login', component: _logincomponent_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(loginRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _logincomponent_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logincomponent/login.component */ "./src/app/login/logincomponent/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_logincomponent_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]
            ],
            exports: [
                _logincomponent_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/logincomponent/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/login/logincomponent/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav a span{\r\n    background-color: rgba(248, 4, 37, 0.87);\r\n    padding: 5px 15px;\r\n    border-radius: 1000px;\r\n    font-weight: 100;\r\n    color: white;\r\n    margin-left: 7;\r\n}\r\n\r\nnav {\r\n    \r\n}\r\n\r\n.image-pad-left{\r\n    padding-left: 5%;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: #495057;\r\n    font-size: 1.15rem;\r\n    font-weight: 700;\r\n}\r\n\r\nnav a:first-child {\r\nfloat:left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW5jb21wb25lbnQvbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtBQUNBLFVBQVU7QUFDViIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luY29tcG9uZW50L2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYgYSBzcGFue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDQsIDM3LCAwLjg3KTtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3O1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgXHJcbn1cclxuXHJcbi5pbWFnZS1wYWQtbGVmdHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxubmF2IGE6Zmlyc3QtY2hpbGQge1xyXG5mbG9hdDpsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/logincomponent/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/login/logincomponent/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page animated bounceInDown\">\n    <div class=\"page-single\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col col-login mx-auto\">\n            <div class=\"text-center mb-6\">\n                <nav>\n                    <img src=\"/content/angular/assets/images/logo.png\" class=\"h-6\" alt=\"\"> \n                    <a class=\"image-pad-left\" href=\"#\">InstaScheduler <span>Beta</span></a>      \n                </nav>   \n            </div>\n            <form class=\"card\" action=\"\" method=\"post\">\n              <div class=\"card-body p-6\">\n                <div class=\"card-title\">Login to your account</div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\">Email address or Username</label>\n                  <input type=\"email\" class=\"form-control\" id=\"input-email\" (input)=\"onUpdate($event,'username')\" (keyup)=\"onUpdate($event,'username')\"  placeholder=\"Enter email or username\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\">\n                    Password\n                  </label>\n                  <input type=\"password\" class=\"form-control\" id=\"input-password\" (input)=\"onUpdate($event,'password')\" (keyup)=\"onUpdate($event,'password')\" placeholder=\"Password\">\n                  <div id=\"lbl-error\"class=\"invalid-feedback\">{{errorMessage}}</div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" />\n                    <span class=\"custom-control-label\">Remember me</span>\n                  </label>\n                </div>\n                <div class=\"form-footer\">\n                  <div class=\"{{cssLoadingLogin}}\">\n                    <div class=\"loader\"></div>\n                    <div class=\"dimmer-content\">\n                      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"onLogin($event)\" id=\"btn-login\">Login\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/login/logincomponent/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/login/logincomponent/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.cssLoadingLogin = 'dimmer';
        this.username = null;
        this.validUsername = false;
        this.errorMessage = '';
        this.password = null;
        this.validPassword = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isAuthenticated()];
                    case 1:
                        _a.sent();
                        this.initializeComponents();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.onUpdate = function (event, fieldName) {
        if (event === null || fieldName === null) {
            return;
        }
        switch (fieldName) {
            case 'username':
                var currentUsername = event.target.value;
                if (currentUsername === null || currentUsername.trim().length === 0) {
                    this.username = '';
                    this.validUsername = false;
                }
                else {
                    this.username = currentUsername.trim();
                    this.validUsername = true;
                }
                break;
            case 'password':
                var currentPassword = event.target.value;
                if (currentPassword === null || currentPassword.trim().length === 0) {
                    this.password = '';
                    this.validPassword = false;
                }
                else {
                    this.password = currentPassword.trim();
                    this.validPassword = true;
                }
                break;
            default:
                console.log('Error Switch(Login):  ');
                break;
        }
        if (this.validPassword && this.validUsername) {
            this.changeLoginButtonStatus(true);
        }
    };
    LoginComponent.prototype.changeLoginButtonStatus = function (status) {
        if (!status) {
            document.getElementById('btn-login').setAttribute('disabled', '');
        }
        else {
            document.getElementById('btn-login').removeAttribute('disabled');
        }
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.cssLoadingLogin = 'dimmer active';
        if (!this.validPassword || !this.validUsername) {
            this.cssLoadingLogin = 'dimmer';
            return;
        }
        this.authservice.login(this.password, this.username).subscribe(function (data) {
            _this.cssLoadingLogin = 'dimmer';
            document.getElementById('lbl-error').style.display = 'none';
            //redirect
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            //show error message
            _this.cssLoadingLogin = 'dimmer';
            _this.errorMessage = 'The username and/or password is incorrect. Please try again.';
            document.getElementById('lbl-error').style.display = 'block';
        });
    };
    LoginComponent.prototype.initializeComponents = function () {
        this.validPassword = false;
        this.validUsername = false;
        document.getElementById('btn-login').setAttribute('disabled', '');
        document.getElementById('lbl-error').style.display = 'none';
    };
    LoginComponent.prototype.isAuthenticated = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.authservice.isAuth().toPromise())];
                    case 1:
                        res = _a.sent();
                        console.log('IsAuthenticated: ' + res);
                        if (res === true) {
                            this.router.navigateByUrl('/dashboard');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/logincomponent/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/logincomponent/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/dashboard-navbar/dashboard-navbar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shared/dashboard-navbar/dashboard-navbar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nnav a span{\r\n    background-color: rgba(248, 4, 37, 0.87);\r\n    padding: 5px 15px;\r\n    border-radius: 1000px;\r\n    font-weight: 100;\r\n    color: white;\r\n    margin-left: 7;\r\n}\r\n\r\nnav {\r\n    text-align: right;\r\n}\r\n\r\n.image-pad-left{\r\n    padding-left: 5%;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: #495057;\r\n    font-size: 1.05rem;\r\n    font-weight: 700;\r\n}\r\n\r\nnav a:first-child {\r\nfloat:left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Rhc2hib2FyZC1uYXZiYXIvZGFzaGJvYXJkLW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtBQUNBLFVBQVU7QUFDViIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kYXNoYm9hcmQtbmF2YmFyL2Rhc2hib2FyZC1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5uYXYgYSBzcGFue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDQsIDM3LCAwLjg3KTtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3O1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbWFnZS1wYWQtbGVmdHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxubmF2IGE6Zmlyc3QtY2hpbGQge1xyXG5mbG9hdDpsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/dashboard-navbar/dashboard-navbar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/dashboard-navbar/dashboard-navbar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header py-4\">\n  <div class=\"container\">\n    <div class=\"d-flex\">\n      <a class=\"header-brand\" href=\"/\">\n        <nav>\n            <img src=\"/content/angular/assets/images/logo.png\" class=\"h-6\" alt=\"\"> <a class=\"image-pad-left\" href=\"#\">InstaScheduler <span>Beta</span></a>      \n        </nav>\n      </a>\n      <div class=\"d-flex order-lg-2 ml-auto\">\n  \n        <div class=\"dropdown d-none d-md-flex\">\n          <a class=\"nav-link icon\" data-toggle=\"dropdown\">\n            <i class=\"fe fe-bell\"></i>\n            <span class=\"nav-unread\"></span>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n            <a href=\"#\" class=\"dropdown-item d-flex\">\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(demo/faces/male/41.jpg)\"></span>\n              <div>\n                <strong>Nathan</strong> pushed new commit: Fix page load performance issue.\n                <div class=\"small text-muted\">10 minutes ago</div>\n              </div>\n            </a>\n            <a href=\"#\" class=\"dropdown-item d-flex\">\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(demo/faces/female/1.jpg)\"></span>\n              <div>\n                <strong>Alice</strong> started new task: Tabler UI design.\n                <div class=\"small text-muted\">1 hour ago</div>\n              </div>\n            </a>\n            <a href=\"#\" class=\"dropdown-item d-flex\">\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(demo/faces/female/18.jpg)\"></span>\n              <div>\n                <strong>Rose</strong> deployed new version of NodeJS REST Api V3\n                <div class=\"small text-muted\">2 hours ago</div>\n              </div>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a href=\"#\" class=\"dropdown-item text-center text-muted-dark\">Mark all as read</a>\n          </div>\n        </div>\n        <div class=\"dropdown\">\n          <a href=\"#\" class=\"nav-link pr-0 leading-none\" data-toggle=\"dropdown\">\n            <span class=\"avatar\" style=\"background-image: url(./demo/faces/female/25.jpg)\"></span>\n            <span class=\"ml-2 d-none d-lg-block\">\n              <span class=\"text-default\">Jane Pearson</span>\n              <small class=\"text-muted d-block mt-1\">Administrator</small>\n            </span>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n            <a class=\"dropdown-item\" href=\"#\">\n              <i class=\"dropdown-icon fe fe-user\"></i> Profile\n            </a>\n            <a class=\"dropdown-item\" href=\"#\">\n              <i class=\"dropdown-icon fe fe-settings\"></i> Settings\n            </a>\n            <a class=\"dropdown-item\" href=\"#\">\n              <span class=\"float-right\"><span class=\"badge badge-primary\">6</span></span>\n              <i class=\"dropdown-icon fe fe-mail\"></i> Inbox\n            </a>\n            <a class=\"dropdown-item\" href=\"#\">\n              <i class=\"dropdown-icon fe fe-send\"></i> Message\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">\n              <i class=\"dropdown-icon fe fe-help-circle\"></i> Need help?\n            </a>\n            <a class=\"dropdown-item\" href=\"#\">\n              <i class=\"dropdown-icon fe fe-log-out\"></i> Sign out\n            </a>\n          </div>\n        </div>\n      </div>\n      <a href=\"#\" class=\"header-toggler d-lg-none ml-3 ml-lg-0\" data-toggle=\"collapse\" data-target=\"#headerMenuCollapse\">\n        <span class=\"header-toggler-icon\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/dashboard-navbar/dashboard-navbar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/dashboard-navbar/dashboard-navbar.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardNavbarComponent", function() { return DashboardNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardNavbarComponent = /** @class */ (function () {
    function DashboardNavbarComponent() {
    }
    DashboardNavbarComponent.prototype.ngOnInit = function () {
    };
    DashboardNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-navbar',
            template: __webpack_require__(/*! ./dashboard-navbar.component.html */ "./src/app/shared/dashboard-navbar/dashboard-navbar.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-navbar.component.css */ "./src/app/shared/dashboard-navbar/dashboard-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardNavbarComponent);
    return DashboardNavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/home-navbar/home-navbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/home-navbar/home-navbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background:none !important;\r\n    border-bottom: none !important;\r\n}\r\n\r\nbody{\r\n    background-color: white !important;\r\n}\r\n\r\nnav {\r\n    text-align: right;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: #495057;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n}\r\n\r\nnav a:first-child {\r\n    float: left;\r\n}\r\n\r\n.image-pad-left{\r\n    padding-left: 5%;\r\n}\r\n\r\n.avatar{\r\n    background-color: #2B9DFF !important;\r\n}\r\n\r\nnav a img{\r\n    vertical-align: middle;\r\n}\r\n\r\nnav a span{\r\n    background-color: rgba(248, 4, 37, 0.87);\r\n    padding: 5px 15px;\r\n    border-radius: 1000px;\r\n    font-weight: 100;\r\n    color: white;\r\n    margin-left: 7;\r\n}\r\n\r\n.nav-padding{\r\n    padding: 0 5% 0 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hvbWUtbmF2YmFyL2hvbWUtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hvbWUtbmF2YmFyL2hvbWUtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbm5hdiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxubmF2IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5uYXYgYTpmaXJzdC1jaGlsZCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmltYWdlLXBhZC1sZWZ0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG4uYXZhdGFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCOURGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5uYXYgYSBpbWd7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5uYXYgYSBzcGFue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDQsIDM3LCAwLjg3KTtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3O1xyXG59XHJcblxyXG4ubmF2LXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nOiAwIDUlIDAgNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/home-navbar/home-navbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/home-navbar/home-navbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header py-4\">\n  <div class=\"container-fluid nav-padding\">\n    <div class=\"d-flex\">\n      <a class=\"header-brand\" href=\"/\">\n        <nav>\n            <img src=\"/content/angular/assets/images/logo.png\" class=\"h-6\" alt=\"\"> <a class=\"image-pad-left\" href=\"#\">InstaScheduler <span>Beta</span></a>      \n        </nav>\n      </a>\n      <div class=\"d-flex order-lg-2 ml-auto\">\n        \n        <div class=\"dropdown\">\n          <a href=\"#\" class=\"nav-link pr-0 leading-none\" data-toggle=\"dropdown\">\n            <span class=\"avatar\" style=\"background-image: url(/content/angular/assets/images/nav_icon.png)\"></span>\n            \n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n              <a class=\"dropdown-item\" routerLink=\"/login\" routerLinkActive=\"active\" >\n                <i class=\"dropdown-icon fe fe-log-out\"></i> Login\n              </a>\n            \n            <a class=\"dropdown-item\" href=\"\">\n              <i class=\"dropdown-icon fe fe-help-circle\"></i> Need help?\n            </a>     \n          </div>\n        </div>\n      </div>\n     \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/home-navbar/home-navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/home-navbar/home-navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNavbarComponent", function() { return HomeNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeNavbarComponent = /** @class */ (function () {
    function HomeNavbarComponent() {
    }
    HomeNavbarComponent.prototype.ngOnInit = function () {
    };
    HomeNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-navbar',
            template: __webpack_require__(/*! ./home-navbar.component.html */ "./src/app/shared/home-navbar/home-navbar.component.html"),
            styles: [__webpack_require__(/*! ./home-navbar.component.css */ "./src/app/shared/home-navbar/home-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeNavbarComponent);
    return HomeNavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-navbar/home-navbar.component */ "./src/app/shared/home-navbar/home-navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-navbar/dashboard-navbar.component */ "./src/app/shared/dashboard-navbar/dashboard-navbar.component.ts");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_3__["HomeNavbarComponent"], _dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_5__["DashboardNavbarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            exports: [_home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_3__["HomeNavbarComponent"], _dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_5__["DashboardNavbarComponent"]]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Karl\source\repos\InstaScheduler\InstaScheduler\FrontEndClient\InstaSchedulerFrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map