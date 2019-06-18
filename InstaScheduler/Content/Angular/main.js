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
            console.log('Status (I-Service Profile):' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    InstagramService.prototype.retrievePosts = function () {
        var _this = this;
        return this.http.get(InstagramService_1.BASE_URL + '/api/instagram/posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log('Status(I-Service Posts):' + JSON.stringify(response));
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

module.exports = "<div class=\"page\">\n  <div class=\"flex-fill\">\n    <!--Navigation bar -->\n    <app-dashboard-navbar [profileData]=\"profileData\"></app-dashboard-navbar>\n    <!--Nav Options Area-->\n    <div class=\"header collapse d-lg-flex p-0\" id=\"headerMenuCollapse\">\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n\n          <div class=\"col-lg\">\n            <ul class=\"nav nav-tabs border-0 flex-column flex-lg-row\">\n              <li class=\"nav-item\">\n                <a href=\"javascript:void();\" routerLink=\"/dashboard\" class=\"nav-link\"><i class=\"fe fe-home\"></i>Home</a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"javascript:void(0);\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#create-post-modal\"><i\n                    class=\"fe fe-box\"></i> Post History</a>\n              </li>\n            </ul>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n\n\n    <!--Modal Area-->\n\n    <!--Create Instagram Post Modal-->\n    <div class=\"modal fade\" id=\"create-post-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\n      aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\"> Create an Instagram Post\n              <button id=\"joinmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </h5>\n          </div>\n          <div class=\"modal-body\">\n            <form action=\"javascript:void(0);\" action=\"post\">\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                    <div class=\"form-group\">\n                      <form action=\"javascript:void(0)\" class=\"dropzone dropzone-properties\" id=\"postimage\">\n                        <div class=\"fallback\">\n                          <input name=\"file\" type=\"file\" multiple />\n                        </div>\n                      </form>\n                    </div>\n\n                  \n                  </div>\n\n\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                    <div class=\"form-group\">\n                      <textarea attr.maxlength=\"{{MAX_DESCRIPTION_LIMIT}}\" id=\"post-description\"\n                      (input)=\"onUpdate($event,'post-content')\" (keyup)=\"onUpdate($event,'post-content')\"\n                      class=\"form-control\" name=\"group-description\" style=\"resize: none;\" rows=\"6\"\n                      placeholder=\"What would you like to share?\"></textarea>\n                      \n                      <div id=\"error-joingroup-code\" class=\"invalid-feedback\">{{error_create_group_code}}</div>\n                      <div id=\"error-joingroup-server\" class=\"invalid-feedback\">{{error_join_group_server}}</div>\n                    </div>\n\n                  </div>\n                </div>\n\n              \n              </div>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <div class=\"{{cssLoadingCreatePost}}\">\n              <div class=\"loader\"></div>\n              <div class=\"dimmer-content\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitPost($event)\" id=\"btn-postimage\">Submit Post\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--End Instagram Post Modal-->\n    <!-- End Modal Area -->\n\n    <div class=\"my-3 my-mid-5 animated bounceInLeft \">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-4\">\n            <div class=\"card card-profile card-expand-profile\">\n              <div class=\"card-header\"\n                style=\"background-image: url(/content/angular/assets/images/profilebg.jpg);\"></div>\n              <div class=\"card-body text-center\">\n                <img class=\"card-profile-img\" src=\"{{profileData ? profileData.ProfileImageUri : 'Undefined'}}\">\n                \n                <h3 class=\"mb-3\">Hi {{profileData ? profileData.FullName : ''}}!</h3>\n      \n                <button class=\"btn btn-secondary btn-pill\" data-toggle=\"modal\" data-target=\"#create-post-modal\">\n                    <a href=\"javascript:void(0)\" class=\"icon\"><i class=\"fa fa-calendar mr-2\"></i></a>Create Instagram\n                  Post!</button>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"col-lg-8\">\n            <div class=\"page-header\">\n              <h1 class=\"page-title\">\n                My Instagram Posts\n              </h1>\n              <div class=\"page-subtitle\"> <span *ngIf=\"totalPages == 0; then emptyPhotoCount else populatedPhotoCount\"></span> - {{currentPage + itemsPerPage < totalPosts ? currentPage + itemsPerPage : totalPosts}} of {{totalPosts}} photo(s)</div>  \n              <ng-template #emptyPhotoCount>0</ng-template>\n              <ng-template #populatedPhotoCount>{{currentPage * itemsPerPage + 1}}</ng-template>\n              \n              <div class=\"page-options d-flex\">\n                <select class=\"form-control custom-select w-auto\">\n                  <option value=\"asc\">Newest</option>\n                  <option value=\"desc\">Oldest</option>\n                </select>\n                <div class=\"input-icon ml-2\">\n                  <span class=\"input-icon-addon\">\n                    <i class=\"fe fe-search\"></i>\n                  </span>\n                  <input type=\"text\" class=\"form-control w-10\" placeholder=\"Search photo\">\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"alert alert-primary\">\n              First time here? It's simple! Get started and create a new post by clicking on the <b>\"Create Instagram\n                Post\"</b> button!\n            </div>\n\n            \n            <div *ngFor=\"let posts of displayedPostData;\" class=\"row animated fadeInDown delay-1s row-cards\">\n              <div *ngFor=\"let postitem of posts;\" class=\"col-sm-6 \">\n                <div class=\"card p-3\">\n                  <a href=\"javascript:void(0)\" class=\"mb-3\">\n                    <img src=\"{{postitem.ImageUriLarge}}\" alt=\"Photo by {{profileData.Username}} \"\n                      class=\"rounded img-thumbnail\">\n                  </a>\n                  <div class=\"d-flex align-items-center px-2\">\n                    <div>\n                      <small class=\"d-block text-muted\">{{postitem.DatePosted}}</small>\n                      <small class=\"d-block text-muted\">{{postitem.TimePosted}}</small>\n                    </div>\n                    <div class=\"ml-auto text-muted\">\n                      <a href=\"javascript:void(0)\" class=\"icon\"><i class=\"fe fe-eye mr-1\"></i>{{postitem.ViewCount}}</a>\n                      <a href=\"javascript:void(0)\" class=\"icon ml-3\"><i class=\"fe fe-message-square mr-1\"></i>{{postitem.CommentsCount}}</a>\n                      <a href=\"javascript:void(0)\" class=\"icon d-none d-md-inline-block ml-3\"><i\n                          class=\"fe fe-heart mr-1\"></i> {{postitem.LikesCount}}</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <nav *ngIf= \"totalPages > 0\">\n              <ul class=\"pagination justify-content-end\">\n                <li class=\"page-item\" (click)=\"changePage($event,-1)\">\n                  <a class=\"page-link\" href=\"javascript:void(0)\" >Previous</a>\n                </li>\n\n                <ng-container *ngFor=\"let item of totalPagesDom\">\n                <li *ngIf=\"item == currentPage + 1; else regPageNav\" (click)=\"changePage($event,item-1)\" id=\"postpage{{item}}\" class=\"page-item active\"><a class=\"page-link\" href=\"javascript:void(0)\">{{item}}</a></li>\n                <ng-template #regPageNav>\n                    <li (click)=\"changePage($event,item)\" id=\"postpage{{item}}\"class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">{{item}}</a></li>\n                </ng-template>\n                \n               </ng-container>\n                \n                \n                <li class=\"page-item\">\n                  <a class=\"page-link\" (click)=\"changePage($event,-2)\" href=\"javascript:void(0)\">Next</a>\n                </li>\n              </ul>\n            </nav>\n          </div>\n\n\n\n        </div>\n\n\n\n\n        <div class=\"row\">\n\n          <div class=\"col-12\">\n            <div class=\"card\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover table-outline table-vcenter text-nowrap card-table\">\n                  <thead>\n                    <tr>\n                      <th class=\"text-center w-1\"><i class=\"icon-people\"></i></th>\n                      <th>User</th>\n                      <th>Usage</th>\n                      <th class=\"text-center\">Payment</th>\n                      <th>Activity</th>\n                      <th class=\"text-center\">Satisfaction</th>\n                      <th class=\"text-center\"><i class=\"icon-settings\"></i></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/26.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Elizabeth Martin</div>\n                        <div class=\"small text-muted\">\n                          Registered: Mar 19, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>42%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-yellow\" role=\"progressbar\" style=\"width: 42%\" aria-valuenow=\"42\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-visa\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>4 minutes ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.42\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">42%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/17.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Michelle Schultz</div>\n                        <div class=\"small text-muted\">\n                          Registered: Mar 2, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>0%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-red\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-googlewallet\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>5 minutes ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.0\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">0%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/21.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Crystal Austin</div>\n                        <div class=\"small text-muted\">\n                          Registered: Apr 7, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>96%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" style=\"width: 96%\" aria-valuenow=\"96\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-mastercard\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>a minute ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.96\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">96%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/male/32.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Douglas Ray</div>\n                        <div class=\"small text-muted\">\n                          Registered: Jan 15, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>6%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-red\" role=\"progressbar\" style=\"width: 6%\" aria-valuenow=\"6\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-shopify\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>a minute ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.06\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">6%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/12.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Teresa Reyes</div>\n                        <div class=\"small text-muted\">\n                          Registered: Mar 4, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>36%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-red\" role=\"progressbar\" style=\"width: 36%\" aria-valuenow=\"36\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-ebay\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>2 minutes ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.36\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">36%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/4.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Emma Wade</div>\n                        <div class=\"small text-muted\">\n                          Registered: Mar 20, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>7%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-red\" role=\"progressbar\" style=\"width: 7%\" aria-valuenow=\"7\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-paypal\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>a minute ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.07\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">7%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/female/27.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Carol Henderson</div>\n                        <div class=\"small text-muted\">\n                          Registered: Feb 22, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>80%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-visa\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>9 minutes ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.8\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">80%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">\n                        <div class=\"avatar d-block\" style=\"background-image: url(demo/faces/male/20.jpg)\">\n                          <span class=\"avatar-status bg-green\"></span>\n                        </div>\n                      </td>\n                      <td>\n                        <div>Christopher Harvey</div>\n                        <div class=\"small text-muted\">\n                          Registered: Jan 22, 2018\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"clearfix\">\n                          <div class=\"float-left\">\n                            <strong>83%</strong>\n                          </div>\n                          <div class=\"float-right\">\n                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                          </div>\n                        </div>\n                        <div class=\"progress progress-xs\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" style=\"width: 83%\" aria-valuenow=\"83\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <i class=\"payment payment-googlewallet\"></i>\n                      </td>\n                      <td>\n                        <div class=\"small text-muted\">Last login</div>\n                        <div>8 minutes ago</div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"mx-auto chart-circle chart-circle-xs\" data-value=\"0.83\" data-thickness=\"3\"\n                          data-color=\"blue\">\n                          <div class=\"chart-circle-value\">83%</div>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"item-action dropdown\">\n                          <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\n                              class=\"fe fe-more-vertical\"></i></a>\n                          <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-tag\"></i>\n                              Action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\n                                class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-link\"></i>\n                              Separated link</a>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.itemsPerRow = 2;
        this.itemsPerPage = 4;
        this.totalPages = 0;
        this.totalPosts = 0;
        this.totalPagesDom = [];
        this.postData = [];
        this.displayedPostData = [];
        this.currentPage = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.initializeDropzoneComponents();
        this.initializeLayoutComponents();
        this.loadProfileData();
        this.loadPostData();
    };
    DashboardComponent.prototype.loadProfileData = function () {
        var _this = this;
        this.instagramService.retrieveProfileData().subscribe(function (data) {
            console.log('ProfileData(Dashboard): ' + JSON.stringify(data));
            _this.profileData = data;
        }, function (error) {
            console.log('An error occured while trying to load the profile data. Please try again or reload the page');
        });
    };
    DashboardComponent.prototype.loadPostData = function () {
        var _this = this;
        this.instagramService.retrievePosts().subscribe(function (data) {
            console.log('PostData(Dashboard): ' + JSON.stringify(data));
            _this.initializeTotalPages(data);
            if (_this.isPostDataChanged(data)) {
                _this.setupPostData();
            }
        }, function (errors) {
            console.log('An error occured while trying to load the post data. Please try again or reload the page');
        });
    };
    DashboardComponent.prototype.initializeTotalPages = function (data) {
        this.totalPages = Math.ceil(data.length / this.itemsPerPage);
        for (var i = 0; i < this.totalPages; i++) {
            this.totalPagesDom.push(i + 1);
        }
    };
    /*Returns true if the instagram post data has not changed; Returns false otherwise*/
    DashboardComponent.prototype.isPostDataChanged = function (data) {
        this.postData = [];
        if (this.postData.length === 0 || this.postData.length !== data.length) {
            this.postData = data;
            return true;
        }
        for (var i = 0; i < data.length; i++) {
            if (!this.isPostEqual(this.postData[i], data[i])) {
                return true;
            }
        }
        return false;
    };
    DashboardComponent.prototype.setupPostData = function () {
        var containerIndex = 0;
        var i = 0;
        var j = this.currentPage * this.itemsPerPage;
        this.displayedPostData = [];
        this.displayedPostData[containerIndex] = [];
        this.totalPosts = this.postData.length;
        while (i < this.itemsPerPage && j < this.postData.length) {
            if (i % this.itemsPerRow === 0 && i !== 0) {
                this.displayedPostData[++containerIndex] = [];
            }
            this.displayedPostData[containerIndex].push(this.postData[j]);
            i++;
            j++;
        }
        console.log('Results: ' + JSON.stringify(this.displayedPostData));
    };
    DashboardComponent.prototype.isPostEqual = function (a, b) {
        if (a.CommentsCount === b.CommentsCount &&
            a.DatePosted === b.DatePosted &&
            a.ImageUriLarge === b.ImageUriLarge &&
            a.ImageUriSmall === b.ImageUriSmall &&
            a.LikesCount === b.LikesCount &&
            a.TimePosted === b.TimePosted &&
            a.ViewCount === b.ViewCount &&
            a.Description === b.Description) {
            return true;
        }
        else {
            return false;
        }
    };
    DashboardComponent.prototype.changePage = function (event, position) {
        /*for ( let i = 0; i < this.totalPagesDom.length; i++) {
         document.getElementById('postpage' + (i + 1)).classList.remove('active');
        }*/
        console.log('current page' + this.currentPage);
        if (position >= 0 && position < this.totalPages) {
            //document.getElementById('postpage' + position).classList.add('active');
            this.currentPage = Math.floor(position);
            return;
        }
        if (position === -1) {
            this.currentPage = (this.currentPage - 1) > 0 ? (this.currentPage - 1) : 0;
            return;
        }
        if (position === -2) {
            this.currentPage = (this.currentPage + 1) < this.totalPages ? (this.currentPage + 1) : this.totalPages;
            return;
        }
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

module.exports = "\r\n.header-img{\r\n    /*padding: 0 5%;*/\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: bottom right;\r\n    \r\n}\r\n\r\n.center-items{\r\n    text-align: center;\r\n}\r\n\r\ndiv.landing-text h1{\r\n    font-size: 3.75rem;\r\n    font-weight: 100;\r\n    \r\n\r\n}\r\n\r\ndiv.landing-text{\r\n    width: 90%;\r\n}\r\n\r\ndiv.landing-text h2{\r\n    font-size: 2.06rem;\r\n    font-weight: 100;\r\n}\r\n\r\ndiv.landing-section {\r\n    padding-top: 2%;\r\n    padding-left: 8%;\r\n}\r\n\r\n.dark-pink{\r\n    color: white;\r\n    padding-left: 20%;\r\n    padding-right: 20%;\r\n    background-color: #E53167 !important;\r\n    border-color: #E53167 !important;\r\n    transition: background-color .5s ease-in-out, border-color .5s ease-in-out;\r\n}\r\n\r\n.no-container-gutters{\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n}\r\n\r\n.dark-pink:hover{\r\n    background-color: #AC254D !important;\r\n    border-color: #AC254D !important ;\r\n}\r\n\r\n.landing-login-area{\r\n     background-image: url(\"/content/angular/assets/images/faded-pink-oval.svg\");\r\n    /*position: absolute;\r\n    z-index: -1;*/\r\n    \r\n    background-repeat: no-repeat;\r\n    height: 15rem;\r\n    width: 15rem;\r\n    margin-top: 10%;\r\n}\r\n\r\n.card-height{\r\n    min-height: 520px;\r\n    \r\n}\r\n\r\n.about-bg{\r\n    /*background-image: url(\"/content/angular/assets/images/purpose-img.svg\");*/\r\n    /*position: absolute;\r\n    z-index: -1;*/\r\n    \r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: left;\r\n\r\n}\r\n\r\n.about-section{\r\n    margin-top: 15%;\r\n}\r\n\r\n.pricing-section{\r\n    margin-top: 15%;\r\n}\r\n\r\n.item-top-padding{\r\n    padding-top: 20%;\r\n}\r\n\r\n.first-card-settings{\r\n    background-image: url(\"/content/angular/assets/images/card1.svg\");\r\n    /*position: absolute;\r\n    z-index: -1;*/\r\n    background-repeat: no-repeat;\r\n  \r\n}\r\n\r\n.second-card-settings{\r\n    background-image: url(\"/content/angular/assets/images/card2.svg\");\r\n    /*position: absolute;\r\n    z-index: -1;*/\r\n    background-repeat: no-repeat;\r\n  \r\n}\r\n\r\n.card-category{\r\n    font-size: 1.5rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.about-des {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.about-statement{\r\n    \r\n}\r\n\r\n.about-statement{\r\n    padding-left: 8%;\r\n    background-image: url(\"/content/angular/assets/images/faded-pink-oval.svg\");\r\n    /*position: absolute;\r\n    z-index: -1;*/\r\n    \r\n    background-repeat: no-repeat;\r\n}\r\n\r\ndiv.about-statement h1{\r\n    font-size: 3.30rem;\r\n    font-weight: 100;\r\n    \r\n\r\n}\r\n\r\ndiv.about-statement h2{\r\n    font-size: 1.71rem;\r\n    font-weight: 100;\r\n}\r\n\r\n/*------footer------*/\r\n\r\nfooter{\r\n    padding: 30% 5% 0 5%;\r\n    margin-bottom: 40px;\r\n    color:  #AC254D;\r\n}\r\n\r\nfooter p, .footerpages{\r\n    display: inline-block;\r\n}\r\n\r\n.footerpages{\r\n    float: right;\r\n}\r\n\r\n.footerpages a{\r\n    text-decoration: none;\r\n    font-weight: 200;\r\n    color:  #AC254D;\r\n    margin-left: 30px;\r\n}\r\n\r\n.card-position{\r\n    height: 100%;\r\n}\r\n\r\n/*-----responsive-----*/\r\n\r\n@media only screen and (max-width: 1000px){\r\n \r\n    .card-category{\r\n        font-size: 1.5rem;\r\n        font-weight: 300;\r\n    }\r\n\r\n    .pricing-section {\r\n        padding-left: 8%;\r\n        padding-right: 8%;\r\n    }\r\n   \r\n\r\n\r\n    div.landing-text h1{\r\n        font-size: 3.30rem;\r\n        font-weight: 100; \r\n        margin-top: 10% \r\n    }\r\n    \r\n    div.landing-text{\r\n        width: 90%;\r\n    }\r\n    \r\n    div.landing-text h2{\r\n        font-size: 1.76rem;\r\n        font-weight: 100;\r\n    }\r\n\r\n    .about-statement{\r\n        padding-left: 8%;\r\n        text-align: center;\r\n    }\r\n    \r\n    .card-height{\r\n        min-height: 1px;\r\n    }\r\n\r\n    footer{\r\n        text-align: center;\r\n    }\r\n\r\n    .footerpages{\r\n        visibility: hidden;\r\n    }\r\n\r\n    footer p, .footerpages{\r\n        display: block;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 600px){\r\n    div.landing-text h1{\r\n        font-size: 2.75rem;\r\n        font-weight: 100;\r\n        \r\n    \r\n    }\r\n\r\n    .card-height{\r\n        min-height: 1px;\r\n    }\r\n\r\n    .pricing-section {\r\n        padding-left: 8%;\r\n        padding-right: 8%;\r\n    }\r\n\r\n    .about-statement{\r\n        padding-left: 8%;\r\n        padding-top: 10%;\r\n        text-align: center;\r\n    }\r\n    \r\n    div.landing-text{\r\n        width: 90%;\r\n    }\r\n    \r\n    div.landing-text h2{\r\n        font-size: 1.31rem;\r\n        font-weight: 100;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lY29tcG9uZW50L2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjs7O0FBR3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBSWhDLDBFQUEwRTtBQUM5RTs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsaUNBQWlDO0FBQ3JDOztBQUVBO0tBQ0ssMkVBQTJFO0lBQzVFO2lCQUNhOztJQUViLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCOztBQUdBO0lBQ0ksMkVBQTJFO0lBQzNFO2lCQUNhOztJQUViLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUVBQWlFO0lBQ2pFO2lCQUNhO0lBQ2IsNEJBQTRCOztBQUVoQzs7QUFJQTtJQUNJLGlFQUFpRTtJQUNqRTtpQkFDYTtJQUNiLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUlBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBS0E7O0FBRUE7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMkVBQTJFO0lBQzNFO2lCQUNhOztJQUViLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7OztBQUdwQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUlBLHVCQUF1Qjs7QUFDdkI7O0lBRUk7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7OztJQUlBO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQjtJQUNKOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFSjs7QUFHQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjs7O0lBR3BCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZWNvbXBvbmVudC9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRlci1pbWd7XHJcbiAgICAvKnBhZGRpbmc6IDAgNSU7Ki9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XHJcbiAgICBcclxufVxyXG5cclxuLmNlbnRlci1pdGVtc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2LmxhbmRpbmctdGV4dCBoMXtcclxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmRpdi5sYW5kaW5nLXRleHR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5kaXYubGFuZGluZy10ZXh0IGgye1xyXG4gICAgZm9udC1zaXplOiAyLjA2cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuZGl2LmxhbmRpbmctc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG59XHJcblxyXG4uZGFyay1waW5re1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTUzMTY3ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNFNTMxNjcgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAgLjVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5uby1jb250YWluZXItZ3V0dGVyc3tcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFyay1waW5rOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FDMjU0RCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjQUMyNTREICFpbXBvcnRhbnQgO1xyXG59XHJcblxyXG4ubGFuZGluZy1sb2dpbi1hcmVhe1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9jb250ZW50L2FuZ3VsYXIvYXNzZXRzL2ltYWdlcy9mYWRlZC1waW5rLW92YWwuc3ZnXCIpO1xyXG4gICAgLypwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTsqL1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmNhcmQtaGVpZ2h0e1xyXG4gICAgbWluLWhlaWdodDogNTIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5hYm91dC1iZ3tcclxuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2NvbnRlbnQvYW5ndWxhci9hc3NldHMvaW1hZ2VzL3B1cnBvc2UtaW1nLnN2Z1wiKTsqL1xyXG4gICAgLypwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTsqL1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuXHJcbn1cclxuXHJcbi5hYm91dC1zZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG59XHJcblxyXG4ucHJpY2luZy1zZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG59XHJcblxyXG4uaXRlbS10b3AtcGFkZGluZ3tcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5maXJzdC1jYXJkLXNldHRpbmdze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2NvbnRlbnQvYW5ndWxhci9hc3NldHMvaW1hZ2VzL2NhcmQxLnN2Z1wiKTtcclxuICAgIC8qcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7Ki9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuLnNlY29uZC1jYXJkLXNldHRpbmdze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2NvbnRlbnQvYW5ndWxhci9hc3NldHMvaW1hZ2VzL2NhcmQyLnN2Z1wiKTtcclxuICAgIC8qcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7Ki9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgXHJcbn1cclxuXHJcbi5jYXJkLWNhdGVnb3J5e1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5cclxuXHJcbi5hYm91dC1kZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmFib3V0LXN0YXRlbWVudHtcclxuICAgIFxyXG59XHJcblxyXG4uYWJvdXQtc3RhdGVtZW50e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9jb250ZW50L2FuZ3VsYXIvYXNzZXRzL2ltYWdlcy9mYWRlZC1waW5rLW92YWwuc3ZnXCIpO1xyXG4gICAgLypwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTsqL1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbmRpdi5hYm91dC1zdGF0ZW1lbnQgaDF7XHJcbiAgICBmb250LXNpemU6IDMuMzByZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuZGl2LmFib3V0LXN0YXRlbWVudCBoMntcclxuICAgIGZvbnQtc2l6ZTogMS43MXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi8qLS0tLS0tZm9vdGVyLS0tLS0tKi9cclxuZm9vdGVye1xyXG4gICAgcGFkZGluZzogMzAlIDUlIDAgNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgY29sb3I6ICAjQUMyNTREO1xyXG59XHJcblxyXG5mb290ZXIgcCwgLmZvb3RlcnBhZ2Vze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZm9vdGVycGFnZXN7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVycGFnZXMgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogICNBQzI1NEQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLmNhcmQtcG9zaXRpb257XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLXJlc3BvbnNpdmUtLS0tLSovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcclxuIFxyXG4gICAgLmNhcmQtY2F0ZWdvcnl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJpY2luZy1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDglO1xyXG4gICAgfVxyXG4gICBcclxuXHJcblxyXG4gICAgZGl2LmxhbmRpbmctdGV4dCBoMXtcclxuICAgICAgICBmb250LXNpemU6IDMuMzByZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDsgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYubGFuZGluZy10ZXh0e1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi5sYW5kaW5nLXRleHQgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc2cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LXN0YXRlbWVudHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtaGVpZ2h0e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXJwYWdlc3tcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyIHAsIC5mb290ZXJwYWdlc3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIGRpdi5sYW5kaW5nLXRleHQgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjc1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1oZWlnaHR7XHJcbiAgICAgICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljaW5nLXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogOCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LXN0YXRlbWVudHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYubGFuZGluZy10ZXh0e1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi5sYW5kaW5nLXRleHQgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjMxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/homecomponent/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/home/homecomponent/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page animated fadeIn\">\n  <div class=\"flex-fill\">\n    <!--Navigation bar -->\n    <app-home-navbar></app-home-navbar>\n     <!--Nav Options Area\n    <div class=\"header collapse d-lg-flex p-0\" id=\"headerMenuCollapse\">\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n\n          <div class=\"col-lg\">\n            <ul class=\"nav nav-tabs border-0 flex-column flex-lg-row\">\n              <li class=\"nav-item\">\n                <a href=\"javascript:void();\" routerLink=\"/dashboard\" class=\"nav-link\"><i\n                    class=\"fe fe-home\"></i>Dashboard</a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"javascript:void(0);\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#create-post-modal\"><i\n                    class=\"fe fe-box\"></i> Create Post</a>\n              </li>\n            </ul>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div> -->\n\n    <div class=\"\">\n      <div class=\"container-fluid no-container-gutters\">\n        <div class=\"row landing-section\">\n          <div class=\"col-lg-6 col-md-6 col-md-6 col-sm-12\">\n            <div class=\"landing-text\">\n              <h1>Take your instagram account to the next level!</h1>\n              <h2> Use it when you need it. This application gives influencers and business owners the ability to fully control every post.</h2>\n              <div class=\"landing-login-area\">\n                <button type=\"button\" class=\"btn btn-lg dark-pink\" routerLink=\"/login\" >Login</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-6  col-sm-12 center-items\">\n            <img class=\"header-img\" src=\"/content/angular/assets/images/social.svg\"/>\n          </div>\n        </div>\n\n\n        <div class = \"row pricing-section\">\n          <div class=\"col-lg-6 col-md-12 col-sm-12 first-card-settings\">\n              \n            <div class=\"row item-top-padding\">\n              <div class=\"offset-lg-4  col-lg-7 col-md-12 col-sm-12\">\n                  <div class=\"card card-height\">\n                      <div class=\"card-body text-center\">\n                        <div class=\"card-category\">Free</div>\n                        <div class=\"card-category\">Early Access</div>\n                        <div class=\"my-4\">To thank you for being an early user of InstagramPost, your account will be free forever! No monthly payments - you will always have full access to all features for free.</div>\n                        <ul class=\"list-unstyled leading-loose\">\n                          <li><strong>1</strong> User per account</li>\n                          <li><i class=\"fe fe-check text-success mr-2\" aria-hidden=\"true\"></i> Unlimited Posts</li>\n                          <li><i class=\"fe fe-check text-success mr-2\" aria-hidden=\"true\"></i> Instagram API</li>\n                          <li><i class=\"fe fe-x text-danger mr-2\" aria-hidden=\"true\"></i> Watermarked Posts</li>\n                        </ul>\n                        <div class=\"text-center card-position mt-6\">\n                          <a href=\"javascript:void(0);\" routerLink=\"/login\" class=\"btn btn-secondary btn-block\">Get Started</a>\n                        </div>\n                      </div>\n                    </div>\n              </div>\n              <div class=\"offset-lg-1 \"></div>\n            </div>\n\n           \n\n\n          </div>\n\n          <div class=\"col-lg-6 col-md-12 col-sm-12 second-card-settings\">\n\n              <div class=\"row item-top-padding \">\n                  <div class=\"offset-lg-1  col-lg-7 col-md-12 col-sm-12\">\n                      <div class=\"card card-height\">\n                          <div class=\"card-body text-center\">\n                            <div class=\"card-category\">Pro</div>\n                            <div class=\"display-3 my-4 bottom-padding\">$9</div>\n                            <ul class=\"list-unstyled leading-loose\">\n                              <li><strong>1</strong> User per account</li>\n                              <li><i class=\"fe fe-check text-success mr-2\" aria-hidden=\"true\"></i> Unlimited Posts</li>\n                              <li><i class=\"fe fe-check text-success mr-2\" aria-hidden=\"true\"></i> Only 9$ per month</li>\n                              <li><i class=\"fe fe-check text-success mr-2\" aria-hidden=\"true\"></i> Instagram API</li>\n                              <li><i class=\"fe fe-x text-danger mr-2\" aria-hidden=\"true\"></i> Watermarked Posts</li>\n                            </ul>\n                            <div class=\"text-center card-position mt-6\">\n                              \n                            </div>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"offset-lg-4\"></div>\n                </div>\n      \n          </div>\n        </div>\n\n        <div class=\"row about-section\" >\n          <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <div class=\"about-bg\">\n                <img class=\"header-img\" src=\"/content/angular/assets/images/purpose-img.svg\"/>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-12 about-des\">\n            <div class=\"about-statement\">\n              <h1>Easy to use</h1>\n              <h2>It only takes two steps to start scheduling posts on InstagramPost. First, sign in \n                with your Instagram account. And finally, you are ready to create a post by uploading a photo and\n                writing a caption.\n              </h2>\n            </div>\n          </div>\n\n        </div>\n\n\n        \n            <footer class=\"footer-section\">\n                <p>&copy; 2019 InstagramPost</p>\n                <div class=\"footerpages\">\n                    <a href=\"#\">Home</a>\n                    <a href=\"#\">Resources</a>\n                    <a href=\"#\">Terms</a>\n                    <a href=\"#\">Privacy</a>\n                </div>\n            </footer>\n      \n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"page\">\n    <div class=\"page-single\">\n      <div class=\"container animated bounceInUp\">\n        <div class=\"row\">\n          <div class=\"col col-login mx-auto\">\n            <div class=\"text-center mb-6\">\n                <nav>\n                    <img src=\"/content/angular/assets/images/logo.png\" class=\"h-6\" alt=\"\"> \n                    <a class=\"image-pad-left\" href=\"#\">InstaScheduler <span>Beta</span></a>      \n                </nav>   \n            </div>\n            <form class=\"card\" action=\"\" method=\"post\">\n              <div class=\"card-body p-6\">\n                <div class=\"card-title\">Login to your account</div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\">Email address or Username</label>\n                  <input type=\"email\" class=\"form-control\" id=\"input-email\" (input)=\"onUpdate($event,'username')\" (keyup)=\"onUpdate($event,'username')\"  placeholder=\"Enter email or username\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\">\n                    Password\n                  </label>\n                  <input type=\"password\" class=\"form-control\" id=\"input-password\" (input)=\"onUpdate($event,'password')\" (keyup)=\"onUpdate($event,'password')\" placeholder=\"Password\">\n                  <div id=\"lbl-error\"class=\"invalid-feedback\">{{errorMessage}}</div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" />\n                    <span class=\"custom-control-label\">Remember me</span>\n                  </label>\n                </div>\n                <div class=\"form-footer\">\n                  <div class=\"{{cssLoadingLogin}}\">\n                    <div class=\"loader\"></div>\n                    <div class=\"dimmer-content\">\n                      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"onLogin($event)\" id=\"btn-login\">Login\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

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

module.exports = "<div class=\"header py-4\">\n  <div class=\"container\">\n    <div class=\"d-flex\">\n      <a class=\"header-brand\" href=\"/\">\n        <nav>\n          <img src=\"/content/angular/assets/images/logo.png\" class=\"h-6\" alt=\"\"> <a class=\"image-pad-left\"\n            href=\"#\">InstaScheduler <span>Beta</span></a>\n        </nav>\n      </a>\n      <div class=\"d-flex order-lg-2 ml-auto\">\n\n        <div class=\"dropdown d-none d-md-flex\">\n          <a class=\"nav-link icon\" data-toggle=\"dropdown\">\n            <i class=\"fe fe-bell\"></i>\n            <span class=\"nav-unread\"></span>\n          </a>\n        </div>\n        <div class=\"dropdown\">\n          <a href=\"#\" class=\"nav-link pr-0 leading-none\" data-toggle=\"dropdown\">\n            <span class=\"avatar\" [ngStyle]=\"{ 'background-image': 'url(' + profileImageLocation + ')'}\"></span>\n            <span class=\"ml-2 d-none d-lg-block\">\n              <span class=\"text-default\">{{profileData ? profileData.Username : \"Undefined\"}}</span>\n              <small class=\"text-muted d-block mt-1\">Member</small>\n            </span>\n          </a>\n\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">\n              <i class=\"dropdown-icon fe fe-help-circle\"></i> Need help?\n            </a>\n            <a class=\"dropdown-item\" href=\"#\">\n              <i class=\"dropdown-icon fe fe-log-out\"></i> Sign out\n            </a>\n          </div>\n        </div>\n      </div>\n      <a href=\"#\" class=\"header-toggler d-lg-none ml-3 ml-lg-0\" data-toggle=\"collapse\"\n        data-target=\"#headerMenuCollapse\">\n        <span class=\"header-toggler-icon\"></span>\n      </a>\n    </div>\n  </div>\n</div>"

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
        this.profileImageLocation = '';
    }
    DashboardNavbarComponent.prototype.ngOnInit = function () {
    };
    DashboardNavbarComponent.prototype.ngOnChanges = function () {
        if (this.profileData) {
            console.log('Nav:' + JSON.stringify(this.profileData));
            this.profileImageLocation = this.profileData.ProfileImageUri;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardNavbarComponent.prototype, "profileData", void 0);
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

module.exports = ".header{\r\n    background:none !important;\r\n    border-bottom: none !important;\r\n}\r\n\r\nbody{\r\n    background-color: white !important;\r\n}\r\n\r\nnav {\r\n    text-align: right;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: #495057;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n}\r\n\r\nnav a:first-child {\r\n    float: left;\r\n}\r\n\r\n.image-pad-left{\r\n    padding-left: 5%;\r\n}\r\n\r\n.avatar{\r\n    background-color: #2B9DFF !important;\r\n}\r\n\r\nnav a img{\r\n    vertical-align: middle;\r\n}\r\n\r\nnav a span{\r\n    background-color: #E53167;\r\n    padding: 5px 15px;\r\n    border-radius: 1000px;\r\n    font-weight: 100;\r\n    color: white;\r\n    margin-left: 7;\r\n}\r\n\r\n.nav-left-padding{\r\n    padding: 1% 20% 3% 0;\r\n}\r\n\r\n.nav-right-padding{\r\n    padding: 1% 5% 3% 0;\r\n}\r\n\r\n.heading-left{\r\n    /*background-image: url(\"/content/angular/assets/images/bgheader.svg\");\r\n    position: absolute;\r\n    z-index: -1;*/\r\n    \r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.svg-container{\r\n    max-width:200px;\r\n    max-height: 200px;\r\n    display: inline-block;\r\n}\r\n\r\n.override-padding{\r\n    padding-left: 0 !important;\r\n}\r\n\r\n/*-----responsive-----*/\r\n\r\n@media only screen and (max-width: 1100px){\r\n \r\n   nav a {\r\n       font-size: 16px;\r\n   }\r\n\r\n   nav a img {\r\n       height: 25px;\r\n       width: 25px;\r\n   }\r\n\r\n    \r\n\r\n}\r\n\r\n@media only screen and (max-width: 600px){\r\n    nav a {\r\n        font-size: 14px;\r\n    }\r\n\r\n    nav a img {\r\n        height: 20px;\r\n        width: 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hvbWUtbmF2YmFyL2hvbWUtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7O2lCQUVhOztJQUViLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUtBLHVCQUF1Qjs7QUFDdkI7O0dBRUc7T0FDSSxlQUFlO0dBQ25COztHQUVBO09BQ0ksWUFBWTtPQUNaLFdBQVc7R0FDZjs7OztBQUlIOztBQUdBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hvbWUtbmF2YmFyL2hvbWUtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbm5hdiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxubmF2IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5uYXYgYTpmaXJzdC1jaGlsZCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmltYWdlLXBhZC1sZWZ0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG4uYXZhdGFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCOURGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5uYXYgYSBpbWd7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5uYXYgYSBzcGFue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1MzE2NztcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3O1xyXG59XHJcblxyXG4ubmF2LWxlZnQtcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDElIDIwJSAzJSAwO1xyXG59XHJcblxyXG4ubmF2LXJpZ2h0LXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nOiAxJSA1JSAzJSAwO1xyXG59XHJcblxyXG4uaGVhZGluZy1sZWZ0e1xyXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvY29udGVudC9hbmd1bGFyL2Fzc2V0cy9pbWFnZXMvYmdoZWFkZXIuc3ZnXCIpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7Ki9cclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc3ZnLWNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDoyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ub3ZlcnJpZGUtcGFkZGluZ3tcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKi0tLS0tcmVzcG9uc2l2ZS0tLS0tKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpe1xyXG4gXHJcbiAgIG5hdiBhIHtcclxuICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgfVxyXG5cclxuICAgbmF2IGEgaW1nIHtcclxuICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICB9XHJcblxyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICBuYXYgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiBhIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/home-navbar/home-navbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/home-navbar/home-navbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"\">\n  <div class=\"container-fluid override-padding \">\n      \n    <div class=\"d-flex\">\n      \n      <div class=\"svg-container\">\n      <img class=\"heading-left\" src=\"/content/angular/assets/images/bgheader2.svg\"  alt=\"\"> \n      </div>\n      <a class=\"header-brand nav-left-padding\" href=\"/\">\n        <nav>\n            <!--<span class=\"heading-left\"></span>-->\n            <img src=\"/content/angular/assets/images/logo.png\" class=\"h-6\" alt=\"\"> <a class=\"image-pad-left\" href=\"#\">InstagramPost <span>Beta</span></a>      \n        </nav>\n      </a>\n      \n      <div class=\"d-flex order-lg-2 ml-auto nav-right-padding\">\n        \n        <div class=\"dropdown\">\n          <a href=\"#\" class=\"nav-link pr-0 leading-none\" data-toggle=\"dropdown\">\n            <span class=\"avatar\" style=\"background-image: url(/content/angular/assets/images/nav-icon.svg)\"></span>\n            \n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n              <a class=\"dropdown-item\" routerLink=\"/login\" routerLinkActive=\"active\" >\n                <i class=\"dropdown-icon fe fe-log-out\"></i> Login\n              </a>\n            \n            <a class=\"dropdown-item\" href=\"\">\n              <i class=\"dropdown-icon fe fe-help-circle\"></i> Need help?\n            </a>     \n          </div>\n        </div>\n      </div>\n     \n    </div>\n  </div>\n</div>"

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