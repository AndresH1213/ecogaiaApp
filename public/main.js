(self["webpackChunkecogaia_shop"] = self["webpackChunkecogaia_shop"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pages_pages_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pages.routes */ 974);
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.module */ 2943);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _auth_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/log-in/log-in.component */ 3007);
/* harmony import */ var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nopagefound/nopagefound.component */ 9149);
/* harmony import */ var _auth_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/admin-products/admin-products.component */ 6408);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/admin.guard */ 1896);
/* harmony import */ var _auth_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/admin-orders/admin-orders.component */ 7006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);












const routes = [
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__.CartComponent
    },
    {
        path: 'admin/login',
        component: _auth_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__.LogInComponent
    },
    {
        path: 'admin/products',
        component: _auth_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__.AdminProductsComponent,
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__.AdminGuard],
        canLoad: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__.AdminGuard]
    },
    {
        path: 'admin/orders',
        component: _auth_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_8__.AdminOrdersComponent,
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__.AdminGuard],
        canLoad: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__.AdminGuard]
    },
    {
        path: '**',
        component: _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_5__.NopagefoundComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes),
            _pages_pages_routes__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
            _cart_cart_module__WEBPACK_IMPORTED_MODULE_1__.CartModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule
        ], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _pages_pages_routes__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
        _cart_cart_module__WEBPACK_IMPORTED_MODULE_1__.CartModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'EcogaiaShop';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [""] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nopagefound/nopagefound.component */ 9149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_4__.NopagefoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 593:
/*!***********************************************************!*\
  !*** ./src/app/auth/admin-combo/admin-combo.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComboComponent": () => (/* binding */ AdminComboComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_combos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/combos.service */ 4614);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4207);








function AdminComboComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Armar el combo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComboComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.deleteMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Eliminar Combo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminComboComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Eliminar un Combo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComboComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.deleteMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Armar un combo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminComboComponent_form_4_h4_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComboComponent_form_4_h4_10_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const comboProd_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.removeProd(comboProd_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comboProd_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", comboProd_r9.name, " ");
} }
function AdminComboComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Combo title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminComboComponent_form_4_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p-dropdown", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminComboComponent_form_4_Template_p_dropdown_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.addCombo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComboComponent_form_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.pushCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AdminComboComponent_form_4_h4_10_Template, 4, 1, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminComboComponent_form_4_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminComboComponent_form_4_Template_input_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.onImageChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComboComponent_form_4_Template_p_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.saveCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.products)("ngModel", ctx_r2.addCombo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.newCombo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.price);
} }
function AdminComboComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-dropdown", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminComboComponent_form_5_Template_p_dropdown_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.comboRemoveId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComboComponent_form_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.removeCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Eliminar el Combo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r3.combos)("ngModel", ctx_r3.comboRemoveId);
} }
class AdminComboComponent {
    constructor(comboService) {
        this.comboService = comboService;
        this.products = [];
        this.newCombo = [];
        this.price = 0;
        this.title = 'Combo Espectacular'; //default
        this.combos = [];
        this.deleting = false;
    }
    ngOnInit() {
        this.comboService.getCombos().subscribe(({ combos }) => this.combos = combos);
    }
    onImageChange(target) {
        this.imageCombo = target.files[0];
    }
    pushCombo() {
        if (!this.addCombo) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Falta algo', 'No hay producto', 'info');
            return;
        }
        this.newCombo.push(this.addCombo);
    }
    removeProd(prodId) {
        const indexProduct = this.newCombo.findIndex(product => product._id === prodId);
        this.newCombo.splice(indexProduct, 1);
    }
    saveCombo() {
        if (this.price < 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('error', 'Precio no puede ser menor a 0', 'error');
        }
        const productsId = this.newCombo.map(product => product._id);
        const comboData = {
            title: this.title,
            products: productsId,
            price: this.price,
            image: this.imageCombo
        };
        this.comboService.createCombo(comboData).subscribe((resp) => {
            if (resp.ok) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Existo', 'Se ha agregado el combo a la base de datos', 'success');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Warning', resp.msg, 'warning');
            }
        });
    }
    deleteMode() {
        this.deleting = this.deleting ? false : true;
    }
    removeCombo() {
        if (!this.comboRemoveId) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Seleccionar un combo para remover', 'error');
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Eliminar Combo?',
            text: `Estas a punto de eleminar el ${this.comboRemoveId.title}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
        }).then((result) => {
            if (result.isConfirmed) {
                this.comboService.removeCombo(this.comboRemoveId._id).subscribe((resp) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Deleted!', `${resp.msg}`, 'success');
                    this.comboRemoveId = undefined;
                });
            }
        });
    }
}
AdminComboComponent.ɵfac = function AdminComboComponent_Factory(t) { return new (t || AdminComboComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_combos_service__WEBPACK_IMPORTED_MODULE_1__.CombosService)); };
AdminComboComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminComboComponent, selectors: [["app-admin-combo"]], inputs: { products: "products" }, decls: 6, vars: 4, consts: [["class", "header-combos", 4, "ngIf"], [4, "ngIf"], [1, "header-combos"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-control", "mb-2", "mt-1", "p-inputgroup"], [1, "p-inputgroup-addon"], ["type", "text", "name", "title", 3, "ngModel", "ngModelChange"], [1, "form-control"], ["optionLabel", "name", "name", "newItem", "placeholder", "Products to add", 3, "options", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-light", "ms-1", "mb-1", 3, "click"], [1, "pi", "pi-plus-circle"], [1, "card", "mt-3"], ["class", "ms-2", 4, "ngFor", "ngForOf"], [1, "p-col-12", "p-md-4"], [1, "p-inputgroup"], ["type", "number", "placeholder", "Price", "name", "price", 3, "ngModel", "ngModelChange"], ["type", "file", 1, "form-control", "file-input", "mt-1", "ms-1", 2, "width", "300px", 3, "change"], ["icon", "pi pi-save", "label", "Guardar Combo", 1, "ms-4", 3, "click"], [1, "ms-2"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "pi", "pi-minus-circle"], ["optionLabel", "title", "name", "title", "placeholder", "Combo to Remove", 3, "options", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-danger", "ms-1", "mt-3", 3, "click"]], template: function AdminComboComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminComboComponent_div_1_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AdminComboComponent_div_2_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdminComboComponent_form_4_Template, 22, 5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AdminComboComponent_form_5_Template, 5, 2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.deleting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.deleting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.deleting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.deleting);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_3__.Card, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button], styles: [".header-combos[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between\n    }"] });


/***/ }),

/***/ 7006:
/*!*************************************************************!*\
  !*** ./src/app/auth/admin-orders/admin-orders.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminOrdersComponent": () => (/* binding */ AdminOrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/admin.service */ 7501);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ 9531);
/* harmony import */ var _services_combos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/combos.service */ 4614);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





function AdminOrdersComponent_div_5_tr_18_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminOrdersComponent_div_5_tr_18_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.seeProducts(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.showMore ? "Ver menos..." : "Ver productos...", " ");
} }
function AdminOrdersComponent_div_5_tr_18_span_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", item_r10.product, " (", item_r10.quantity, ") ");
} }
function AdminOrdersComponent_div_5_tr_18_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AdminOrdersComponent_div_5_tr_18_span_17_div_1_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.prodsToShow);
} }
function AdminOrdersComponent_div_5_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AdminOrdersComponent_div_5_tr_18_button_16_Template, 2, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AdminOrdersComponent_div_5_tr_18_span_17_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", order_r2.orderNumber || "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r2.orderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r2.delivered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r2.payment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 8, order_r2.address));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 10, order_r2.totalPrice), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r2.products.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showMore && i_r3 === ctx_r1.showMoreOrder);
} }
function AdminOrdersComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "# Orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Fecha del pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Direcci\u00F3n del pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Precio Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AdminOrdersComponent_div_5_tr_18_Template, 18, 12, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.orders);
} }
class AdminOrdersComponent {
    constructor(adminService, productService, comboService) {
        this.adminService = adminService;
        this.productService = productService;
        this.comboService = comboService;
        this.orders = [];
        this.prodsToShow = [];
        this.showMore = false;
    }
    ngOnInit() {
        this.adminService.getAllOrders().subscribe((orders) => {
            console.log(orders);
            this.orders = orders.map((order) => {
                const { orderNumber, totalPrice, orderDate, shippingAddress, delivered, payment } = order;
                const address = `${shippingAddress.state}, ${shippingAddress.city} - ${shippingAddress.address}`;
                let products = order.cart.map((prod) => ({ product: prod.product, type: prod.onModel, quantity: prod.quantity }));
                return { orderNumber, products, totalPrice, delivered, payment, orderDate, address };
            });
            console.log(this.orders);
        });
    }
    searchNames(type, prodId) {
        return new Promise((resolve, reject) => {
            if (type === 'Combo') {
                this.comboService.getOneCombo('comboId', prodId).subscribe((combo) => {
                    resolve(combo.name);
                });
            }
            else if (type === 'Product') {
                this.productService.getSingleProduct(prodId).subscribe(prod => {
                    resolve(prod.name);
                });
            }
        });
    }
    seeProducts(index) {
        const search = this.fshowMore(index);
        if (!search)
            return;
        for (let i = 0; i < this.orders[index].products.length; i++) {
            const { type, product, quantity } = this.orders[index].products[i];
            this.searchNames(type, product).then((resp) => {
                this.prodsToShow.push({ product: resp, quantity });
            });
        }
        console.log(this.prodsToShow);
    }
    fshowMore(index) {
        this.showMoreOrder = +index;
        if (this.showMore) {
            this.showMore = false;
            this.showMoreOrder = undefined;
            this.prodsToShow = [];
            return false;
        }
        else {
            this.showMore = true;
            return true;
        }
    }
}
AdminOrdersComponent.ɵfac = function AdminOrdersComponent_Factory(t) { return new (t || AdminOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_combos_service__WEBPACK_IMPORTED_MODULE_2__.CombosService)); };
AdminOrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdminOrdersComponent, selectors: [["app-admin-orders"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "container", "row", "mt-4"], [1, "col-8"], ["class", "table-responsive mt-5", 4, "ngIf"], [1, "table-responsive", "mt-5"], [1, "table"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "btn", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "btn", 3, "click"]], template: function AdminOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Ordenes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AdminOrdersComponent_div_5_Template, 19, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orders.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe], encapsulation: 2 });


/***/ }),

/***/ 6408:
/*!*****************************************************************!*\
  !*** ./src/app/auth/admin-products/admin-products.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminProductsComponent": () => (/* binding */ AdminProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/Product */ 4206);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ 7501);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ 9531);
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/file-upload.service */ 162);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 9287);
/* harmony import */ var _admin_combo_admin_combo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-combo/admin-combo.component */ 593);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 4207);














function AdminProductsComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", product_r8._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", product_r8.name, " ");
} }
function AdminProductsComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Image Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminProductsComponent_input_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "input", 33);
} }
function AdminProductsComponent_input_48_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AdminProductsComponent_input_48_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.onImageChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminProductsComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminProductsComponent_div_51_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.uploadFileImage(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminProductsComponent_div_51_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.uploadFileImage(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminProductsComponent_div_58_li_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", property_r17, " ");
} }
function AdminProductsComponent_div_58_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " | -- | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AdminProductsComponent_div_58_li_5_span_4_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", key_r15, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r14.characteristic[key_r15]);
} }
function AdminProductsComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Characteristicas disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AdminProductsComponent_div_58_li_5_Template, 5, 2, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.characteristicKeys);
} }
function AdminProductsComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminProductsComponent_div_59_Template_p_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r18.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminProductsComponent_div_59_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r20.deleteProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r6.productForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r6.selectedProductID);
} }
function AdminProductsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminProductsComponent_div_60_Template_p_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.createProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r7.productForm.valid);
} }
class AdminProductsComponent {
    constructor(fb, admin, productService, uploadFile) {
        this.fb = fb;
        this.admin = admin;
        this.productService = productService;
        this.uploadFile = uploadFile;
        this.products = [];
        this.selectedProductID = "";
        this.productForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)]],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1)]],
            image: [null],
            characteristicName: [''],
            characteristicValue: ['']
        });
        this.characteristic = {};
        this.characteristicKeys = [];
        this.showCharacteristics = false;
        this.inputFileImage = false;
        this.inputImageStateText = 'Subir';
        this.tooltipImageStateText = 'Subir imagen desde PC';
    }
    ngOnInit() {
        this.loadProducts();
    }
    loadProducts() {
        this.productService.getProducts().subscribe((products) => {
            this.products = products.map(({ _id, name, code, price, imageUrl, characteristics }) => {
                return new src_app_models_Product__WEBPACK_IMPORTED_MODULE_0__.Product(_id, name, price, imageUrl, characteristics, code);
            });
        });
    }
    loadProductData(prodId) {
        // reset previuos product data
        this.characteristicKeys = [];
        this.characteristic = {};
        this.characteristicKeys = [];
        this.showCharacteristics = false;
        if (!prodId) {
            this.selectedProduct = undefined;
            return this.productForm.reset();
        }
        // When a product is selected for modification
        this.productService.getSingleProduct(prodId).subscribe((product) => {
            const { name, code, price, imageUrl, characteristics: characteristicsDB } = product;
            this.selectedProduct = product;
            // Atributes of the form, these are set this way for DIV representation of the characteristics in the HTML
            let characteristicKey = '';
            let characteristicValue = [];
            // check for characteristic of the product and assign to the global variable in case of future modifications made by user
            if (!!Object.keys(characteristicsDB).length) {
                // assign the characteristicDB to the global variable and returns the key and value in order to fill the form inputs
                [characteristicKey, characteristicValue] = this.setCharacteristicGlobalVariable(characteristicsDB);
            }
            this.productForm.setValue({
                name,
                code,
                price,
                image: imageUrl[0] || 'no-image',
                characteristicName: characteristicKey,
                characteristicValue: characteristicValue
            });
        });
    }
    setCharacteristicGlobalVariable(characteristicsDB) {
        // if the product has characteristcis, load with the first one for UX
        let characteristicKey = Object.keys(characteristicsDB)[0];
        let characteristicValue = characteristicsDB[characteristicKey];
        // if characteristic value is retrieve as string is coverted to array because it can be more than one option
        if (!Array.isArray(characteristicValue)) {
            characteristicValue = [characteristicValue];
        }
        // set every characteristic of the product retrieve from DB to the characteristiv memory variable
        this.characteristic = characteristicsDB;
        return [characteristicKey, characteristicValue];
    }
    addCharacteristic() {
        var _a, _b, _c, _d;
        if (!((_a = this.productForm.get('characteristicName')) === null || _a === void 0 ? void 0 : _a.value) || !((_b = this.productForm.get('characteristicValue')) === null || _b === void 0 ? void 0 : _b.value)) {
            return; // do nothing if there no value in one of the input key or value
        }
        this.showCharacteristics = true;
        const characteristicKey = (_c = this.productForm.get('characteristicName')) === null || _c === void 0 ? void 0 : _c.value;
        const characteristicValue = (_d = this.productForm.get('characteristicValue')) === null || _d === void 0 ? void 0 : _d.value;
        // if characteristic >1 the values must be provided separate by comas
        let characteristicSet = characteristicValue;
        if (typeof (characteristicValue) === typeof ('string')) {
            characteristicSet = characteristicValue.split(',');
        }
        // add this new characteristics to the characteristic object
        this.characteristic = Object.assign(Object.assign({}, this.characteristic), { [characteristicKey]: characteristicSet });
        this.characteristicKeys = Object.keys(this.characteristic);
    }
    createProduct() {
        const productData = this.productForm.value;
        // if theres a characteristic in the characteristicObject add to the productData
        // this because in the produc form we store only charcName and charcValue
        if (this.characteristic) {
            productData.characteristics = JSON.stringify(this.characteristic);
        }
        this.productService.addProduct(productData).subscribe((resp) => {
            if (resp.ok) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('New product added!', `New Product ${productData.name}`, 'success');
                this.productForm.reset();
                this.characteristic = {};
                this.characteristicKeys = [];
                this.loadProducts();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Opps', 'A error ocurrs', 'error');
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('err', err.error.msg, 'error');
        });
    }
    edit() {
        const prodId = this.selectedProductID;
        const { name, price, image } = this.productForm.value;
        let data = {
            name,
            price,
            image
        };
        if (this.characteristic) {
            data.characteristics = JSON.stringify(this.characteristic);
        }
        this.productService.updateProduct(prodId, data).subscribe(resp => {
            if (resp.ok) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Updated!', resp.msg, 'success');
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', `Ups something happend`, 'error');
        });
    }
    deleteProduct() {
        var _a;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Delete User?',
            text: `You are going to delete the product with name: ${(_a = this.selectedProduct) === null || _a === void 0 ? void 0 : _a.name}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                this.productService.deleteProduct(this.selectedProductID).subscribe((resp) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Deleted!', `${resp.msg}`, 'success');
                    this.loadProducts();
                    this.selectedProduct = undefined;
                });
            }
        });
    }
    showIputFileImage() {
        var _a;
        this.inputFileImage = this.inputFileImage ? false : true;
        this.inputImageStateText = this.inputImageStateText === 'URL' ? 'Subir' : 'URL';
        this.tooltipImageStateText = this.inputImageStateText === 'URL' ? 'Asignar imagen por URL' : 'Subir imagen desde PC';
        // reset the previuos input value
        (_a = this.productForm.get('image')) === null || _a === void 0 ? void 0 : _a.reset();
    }
    onImageChange(target) {
        const [file] = target.files;
        if (file) {
            this.productForm.patchValue({ image: file });
        }
    }
    uploadFileImage(toUpdate) {
        var _a;
        const file = (_a = this.productForm.get('image')) === null || _a === void 0 ? void 0 : _a.value;
        if (!file) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('No file', 'No has subido ningún archivo todavía', 'warning');
            return;
        }
        // to update replace the first image (cover image)
        if (toUpdate) {
            this.uploadFile.updatePhoto(file, 'product', this.selectedProductID, true).then(resp => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Success', `imagen con el nombre ${resp} agregada`, 'success');
            }).catch(err => sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Ups', `Ocurrio el siguiente error: ${err} `, 'error'));
            return;
        }
        this.uploadFile.updatePhoto(file, 'product', this.selectedProductID).then(resp => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Success', `imagen con el nombre ${resp} agregada`, 'success');
        }).catch(err => sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Ups', `Ocurrio el siguiente error: ${err} `, 'error'));
    }
    logOut() {
        this.admin.logOut();
    }
}
AdminProductsComponent.ɵfac = function AdminProductsComponent_Factory(t) { return new (t || AdminProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_3__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_file_upload_service__WEBPACK_IMPORTED_MODULE_4__.FileUploadService)); };
AdminProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AdminProductsComponent, selectors: [["app-admin-products"]], decls: 63, vars: 13, consts: [["id", "wrapper", 1, "container", "mt-3"], [1, "row", "container"], [1, "col"], ["routerLink", "/", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-outline-dark", "float-end", "mb-3", 3, "click"], [1, "pi", "pi-sign-out"], [1, "title"], [1, "row"], [1, "col-7"], ["name", "productList", 1, "form-control", "product-selector", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "p-grid", "p-fluid"], [1, "p-col-12", "p-md-4"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], ["type", "text", "pInputText", "", "placeholder", "name", "formControlName", "name"], [1, "p-inputgroup-addon", "ms-2"], ["type", "text", "pInputText", "", "placeholder", "Code", "formControlName", "code"], ["type", "number", "pInputText", "", "placeholder", "Price", "formControlName", "price"], ["class", "p-inputgroup-addon", 4, "ngIf"], ["type", "text", "pInputText", "", "placeholder", "url", "formControlName", "image", 4, "ngIf"], ["type", "file", "style", "width: 300px;", "class", "form-control file-input mt-1 ms-1", 3, "change", 4, "ngIf"], ["type", "button", "tooltipPosition", "top", 1, "btn", "btn-outline-dark", "ms-1", 3, "pTooltip", "click"], ["class", "ms-5", 4, "ngIf"], ["type", "button", "pTooltip", "Add new product's characteristic", "tooltipPosition", "top", 1, "btn", "btn-light", 3, "click"], ["type", "text", "pInputText", "", "placeholder", "characteristic", "formControlName", "characteristicName"], ["type", "text", "pInputText", "", "placeholder", "value", "formControlName", "characteristicValue"], ["class", "card mb-1", 4, "ngIf"], ["class", "p-col-6 p-md-6", 4, "ngIf"], [3, "products"], [3, "value"], ["type", "text", "pInputText", "", "placeholder", "url", "formControlName", "image"], ["type", "file", 1, "form-control", "file-input", "mt-1", "ms-1", 2, "width", "300px", 3, "change"], [1, "ms-5"], ["type", "button", "pTooltip", "Add image to product", "tooltipPosition", "top", 1, "btn", "btn-outline-dark", 3, "click"], [1, "uil", "uil-image-plus"], ["type", "button", "pTooltip", "Replace cover Image", "tooltipPosition", "top", 1, "btn", "btn-outline-dark", "ms-3", 3, "click"], [1, "uil", "uil-image-edit"], [1, "card", "mb-1"], [1, "card-title"], [1, "card-body"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "btn", "btn-outline-dark", "mt-3", 2, "cursor", "default"], ["style", "cursor: default;", "class", "btn btn-outline-info ms-4", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-info", "ms-4", 2, "cursor", "default"], [1, "p-col-6", "p-md-6"], [1, "ms-4"], ["label", "Edit", "type", "button", "icon", "pi pi-check", 3, "disabled", "click"], ["type", "button", 1, "float-end", "btn", "btn-danger", 3, "disabled", "click"], ["label", "Add Product", "type", "button", "icon", "pi pi-check", 3, "disabled", "click"]], template: function AdminProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Back to Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminProductsComponent_Template_button_click_5_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Log Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Administraci\u00F3n de productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Select product for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " it");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminProductsComponent_Template_select_ngModelChange_20_listener($event) { return ctx.selectedProductID = $event; })("ngModelChange", function AdminProductsComponent_Template_select_ngModelChange_20_listener($event) { return ctx.loadProductData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " --- Select if wanna update --- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, AdminProductsComponent_option_23_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Propiedades");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Nombre Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, AdminProductsComponent_span_46_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, AdminProductsComponent_input_47_Template, 1, 0, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, AdminProductsComponent_input_48_Template, 1, 0, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminProductsComponent_Template_button_click_49_listener() { return ctx.showIputFileImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, AdminProductsComponent_div_51_Template, 5, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminProductsComponent_Template_button_click_54_listener() { return ctx.addCharacteristic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, AdminProductsComponent_div_58_Template, 6, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, AdminProductsComponent_div_59_Template, 6, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, AdminProductsComponent_div_60_Template, 3, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "app-admin-combo", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.selectedProductID);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.inputFileImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.inputFileImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.inputFileImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx.tooltipImageStateText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.inputImageStateText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showCharacteristics);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.selectedProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("products", ctx.products);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, primeng_card__WEBPACK_IMPORTED_MODULE_9__.Card, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip, _admin_combo_admin_combo_component__WEBPACK_IMPORTED_MODULE_5__.AdminComboComponent, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button], styles: [".title[_ngcontent-%COMP%] {\r\n    text-shadow: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    color: grey;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n.product-selector[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    margin: auto;\r\n}"] });


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-in/log-in.component */ 3007);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-products/admin-products.component */ 6408);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 9287);
/* harmony import */ var _admin_combo_admin_combo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-combo/admin-combo.component */ 593);
/* harmony import */ var _admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-orders/admin-orders.component */ 7006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);












class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            // PrimeNG
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.DropdownModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_9__.CardModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.TooltipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_0__.LogInComponent,
        _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_1__.AdminProductsComponent,
        _admin_combo_admin_combo_component__WEBPACK_IMPORTED_MODULE_2__.AdminComboComponent,
        _admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_3__.AdminOrdersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        // PrimeNG
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.DropdownModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_9__.CardModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.TooltipModule] }); })();


/***/ }),

/***/ 3007:
/*!*************************************************!*\
  !*** ./src/app/auth/log-in/log-in.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInComponent": () => (/* binding */ LogInComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ 7501);






class LogInComponent {
    constructor(router, fb, adminService) {
        this.router = router;
        this.fb = fb;
        this.adminService = adminService;
        this.formSubmitted = false;
        this.loginForm = this.fb.group({
            email: [localStorage.getItem('email') || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            remember: [false]
        });
    }
    ngOnInit() {
    }
    login() {
        var _a, _b;
        this.formSubmitted = true;
        const email = (_a = this.loginForm.get('email')) === null || _a === void 0 ? void 0 : _a.value;
        const password = (_b = this.loginForm.get('password')) === null || _b === void 0 ? void 0 : _b.value;
        const dataAuth = { email, password };
        this.adminService.loginUser(dataAuth).subscribe(resp => {
            if (this.loginForm.get('remeber')) {
                localStorage.setItem('email', email);
            }
            else {
                localStorage.removeItem('email');
            }
            // Navigate to the route
            this.router.navigateByUrl('/admin/products');
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', err.msg, 'error');
        });
    }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) { return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService)); };
LogInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LogInComponent, selectors: [["app-log-in"]], decls: 31, vars: 1, consts: [[1, "login-container"], [1, "card", "login-box"], [1, "card-body"], [1, "logo-img"], ["src", "assets/images/logo.png", "alt", ""], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-control"], ["for", "username"], [1, "pi", "pi-user"], ["name", "username", "formControlName", "email", "type", "text", "placeholder", "username", 1, "input-form"], ["for", "password"], [1, "pi", "pi-unlock"], ["name", "password", "type", "password", "formControlName", "password", "placeholder", "password", 1, "input-form"], [1, "form-group", "row"], [1, "col-md-12"], [1, "checkbox", "checkbox-primary", "pull-left", "p-t-0"], ["id", "checkbox-signup", "type", "checkbox", "formControlName", "remember", 1, "filled-in", "chk-col-light-blue"], ["for", "checkbox-signup"], ["type", "submit", 1, "btn", "btn-login"], [1, "form-group", "m-b-0"], [1, "col-sm-12", "text-center"], ["routerLink", "register", 1, "text-primary", "m-l-5"], ["routerLink", "/", 1, "btn", "back-products"], [1, "pi", "pi-angle-double-left"]], template: function LogInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LogInComponent_Template_form_ngSubmit_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".login-container[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 100vh;\r\n    background-image: url('https://p4.wallpaperbetter.com/wallpaper/954/61/97/sunrise-reflection-nature-sky-wallpaper-preview.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.login-box[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: transparent;\r\n    -webkit-backdrop-filter: blur(4px);\r\n            backdrop-filter: blur(4px);\r\n}\r\n\r\n.logo-img[_ngcontent-%COMP%] {\r\n    display:flex;\r\n    justify-content: center;\r\n    height: 10vh;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    background-color: rgba(62, 71, 73, 0.459);\r\n    margin-top: 10px;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    height: 35px;\r\n}\r\n\r\n.input-form[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 100%;\r\n    color: black;\r\n    margin-left: 5px;\r\n    background-color: transparent;\r\n}\r\n\r\n.input-form[_ngcontent-%COMP%]::placeholder, i[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    background-color: tomato;\r\n    border-radius: 15px;\r\n    height: 35px;\r\n}\r\n\r\n.back-products[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5vh;\r\n    color: black;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    opacity: 0.8;\r\n    background-color: tomato;\r\n    left: 5vh;\r\n}\r\n\r\n.btn-goolge[_ngcontent-%COMP%] {\r\n    background-color:  #dd4b39;\r\n    color: white;\r\n    width: 100%;\r\n}"] });


/***/ }),

/***/ 4918:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Product */ 4206);
/* harmony import */ var _models_Combo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Combo */ 2681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_helpers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helpers.service */ 4063);
/* harmony import */ var _services_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shop.service */ 635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/navbar/navbar.component */ 4696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 9287);













function CartComponent_div_8_p_card_16_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r6.characteristicTags[i_r5]), " ");
} }
function CartComponent_div_8_p_card_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_8_p_card_16_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const i_r5 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.removeItem(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CartComponent_div_8_p_card_16_p_10_Template, 3, 3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_8_p_card_16_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const i_r5 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r10.changeCantProduct(i_r5, -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_8_p_card_16_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const i_r5 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r11.changeCantProduct(i_r5, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.products[i_r5].oneImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", product_r4.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", product_r4.item.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", product_r4.characteristics && !product_r4.combo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 7, product_r4.item.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](product_r4.cant);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 9, product_r4.item.price * product_r4.cant), " ");
} }
function CartComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, CartComponent_div_8_p_card_16_Template, 27, 11, "p-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.cart.products);
} }
function CartComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " No tienes ning\u00FAn producto en el carrito a\u00FAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CartComponent_div_10_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", state_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", state_r14, " ");
} }
function CartComponent_div_10_div_29_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", city_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", city_r16, " ");
} }
function CartComponent_div_10_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Municipio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "-- Seleccione Municipio -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CartComponent_div_10_div_29_option_6_Template, 2, 2, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.cities);
} }
function CartComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Resumen del pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Celular");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Solo envios nacionales a Colombia**");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Departamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "-- Seleccione Departamento -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CartComponent_div_10_option_28_Template, 2, 2, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CartComponent_div_10_div_29_Template, 7, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Codigo Postal (ZIP): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Direcci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Informaci\u00F3n adicional (Casa, apto, etc): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_10_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Items ", ctx_r2.products.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total: $ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 5, ctx_r2.theresCart ? ctx_r2.cart.totalValue : 0), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.orderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.states);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.cities.length > 0);
} }
class CartComponent {
    constructor(fb, helper, shopService, router) {
        this.fb = fb;
        this.helper = helper;
        this.shopService = shopService;
        this.router = router;
        this.states = [];
        this.cities = [];
        this.theresCart = false;
        this.products = [];
        this.characteristicTags = [];
        this.orderForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            addressExtra: ['']
        });
        // UI loading box
        this.loading = false;
    }
    ngOnInit() {
        var _a;
        this.states = ['Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó',
            'Córdoba', 'Cundinamarca', 'Guainía', 'La Guajira', 'Guaviare', 'Huila', 'Magdalena', 'Meta', 'Norte de Santander', 'Nariño', 'Putumayo',
            'Quindío', 'Risaralda', 'San Andrés', 'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'];
        (_a = this.orderForm.get('state')) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => {
            var _a;
            (_a = this.orderForm.get('city')) === null || _a === void 0 ? void 0 : _a.reset('');
            this.loading = true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(state => this.helper.getCities(state))).subscribe((cities) => {
            this.cities = cities;
            this.loading = false;
        });
        this.initializatedCart();
    }
    initializatedCart() {
        var _a;
        this.theresCart = this.getCart();
        if (this.theresCart) {
            this.productsInstaces(this.cart);
            (_a = this.cart) === null || _a === void 0 ? void 0 : _a.products.forEach(product => {
                const values = Object.values(product.characteristics).join(', ');
                this.characteristicTags.push(values);
            });
        }
        ;
    }
    removeItem(index) {
        this.theresCart = this.shopService.deleteProductCart(index);
        // if empty cart reset the variables
        if (!this.theresCart) {
            this.cart = undefined;
            this.products = [];
            this.characteristicTags = [];
        }
        window.location.reload();
    }
    getCart() {
        this.cart = this.shopService.getCart;
        return this.cart ? true : false;
    }
    productsInstaces(cart) {
        for (let i = 0; i < cart.products.length; i++) {
            const item = cart.products[i].item;
            if (item.code) {
                const { _id, name, price, imageUrl, characteristics, code } = item;
                const productCart = new _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product(_id, name, price, imageUrl, characteristics, code);
                productCart.combo = false;
                this.products.push(productCart);
            }
            if (cart.products[i].combo) {
                const { _id, name, price, image, products } = item;
                const productCart = new _models_Combo__WEBPACK_IMPORTED_MODULE_1__.Combo(_id, name, price, image, products);
                productCart.combo = true;
                this.products.push(productCart);
            }
        }
    }
    changeCantProduct(index, value) {
        var _a;
        const findProduct = (_a = this.cart) === null || _a === void 0 ? void 0 : _a.products[index];
        if ((findProduct === null || findProduct === void 0 ? void 0 : findProduct.cant) === 1 && value !== 1) {
            return;
        }
        this.cart.totalValue += value * findProduct.item.price;
        findProduct.cant += value;
    }
    setOrderData() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const products = (_a = this.cart) === null || _a === void 0 ? void 0 : _a.products.map(product => {
            let description = 'No description';
            if (product.characteristics) {
                description = JSON.stringify(product.characteristics);
            }
            return { productId: product.item._id,
                quantity: product.cant,
                combo: product.combo,
                description };
        });
        const cartData = {
            products: products,
            totalValue: (_b = this.cart) === null || _b === void 0 ? void 0 : _b.totalValue
        };
        const userData = {
            email: (_c = this.orderForm.get('email')) === null || _c === void 0 ? void 0 : _c.value,
            phoneNumber: (_d = this.orderForm.get('phoneNumber')) === null || _d === void 0 ? void 0 : _d.value,
            state: (_e = this.orderForm.get('state')) === null || _e === void 0 ? void 0 : _e.value,
            city: (_f = this.orderForm.get('city')) === null || _f === void 0 ? void 0 : _f.value,
            zip_code: (_g = this.orderForm.get('zip')) === null || _g === void 0 ? void 0 : _g.value,
            address: (_h = this.orderForm.get('address')) === null || _h === void 0 ? void 0 : _h.value,
            addressExtraInfo: (_j = this.orderForm.get('addressExtra')) === null || _j === void 0 ? void 0 : _j.value
        };
        return [cartData, userData];
    }
    confirm() {
        const [cartData, userData] = this.setOrderData();
        const orderData = {
            cartData,
            userData
        };
        this.shopService.postOrder(orderData).subscribe((resp) => {
            if (resp.ok) {
                window.open(resp.init_point);
            }
        });
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_helpers_service__WEBPACK_IMPORTED_MODULE_2__.HelpersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_shop_service__WEBPACK_IMPORTED_MODULE_3__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 11, vars: 3, consts: [[1, "container", "cart-page-container"], [1, "row"], [1, "col-lg-8", "col-md-12"], [1, "container", "row", "mt-4"], [1, "col-8"], ["class", "products-cart-container", 4, "ngIf"], [4, "ngIf"], ["class", "col-lg-4 col-md-8 col-sm-12", 4, "ngIf"], [1, "products-cart-container"], [1, "row", "cart-title-container"], [1, "col-3", "cart-title-image"], [1, "col-3", "cart-title-product"], [1, "col-2", "cart-title-price"], [1, "col-2", "cart-title-quantity", "text-center"], [1, "col-2", "cart-title-subtotal", "text-center"], ["class", "row mt-1 mb-2", 4, "ngFor", "ngForOf"], [1, "row", "mt-1", "mb-2"], [1, "row", "cart-info-container"], [1, "col-1", "remove_container"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "uil", "uil-trash-alt"], [1, "col-2", "col-sm-0", "cart-img-div"], [1, "cart-img", 3, "src", "alt"], [1, "col-3"], [1, "product-name"], ["class", "characteristics-tags", 4, "ngIf"], [1, "col-2"], [1, "col-2", "m"], [1, "cant-product"], ["type", "button", 1, "cant-btn", 3, "click"], [1, "pi", "pi-minus"], [1, "cant-num"], [1, "pi", "pi-plus"], [1, "col-2", "text-center"], [1, "characteristics-tags"], ["src", "https://img.icons8.com/external-bearicons-outline-color-bearicons/64/000000/external-empty-cart-essential-collection-bearicons-outline-color-bearicons.png", 1, "image-empty-cart"], [1, "col-lg-4", "col-md-8", "col-sm-12"], [1, "container", "mt-4", "order-sumary"], [1, "order-sumary_data", "row"], [1, "col-6"], [1, "order-shipping"], [3, "formGroup"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", "mb-2"], ["for", "phoneNumber"], ["type", "tel", "id", "phoneNumber", "formControlName", "phoneNumber", 1, "form-control", "mb-2"], [1, "row", "mb-2"], [1, "form-label"], ["formControlName", "state", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "row mb-2", 4, "ngIf"], ["href", "http://visor.codigopostal.gov.co/472/visor/", "target", "_blank"], ["pTooltip", "Buscar el codigo postal", "tooltipPosition", "top", 1, "pi", "pi-search-plus", "float-end"], ["type", "text", "formControlName", "zip", 1, "form-control"], ["type", "text", "formControlName", "address", 1, "form-control"], ["type", "text", "formControlName", "addressExtra", 1, "form-control"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", "mt-3", "float-end", 3, "click"], [3, "value"], ["formControlName", "city", 1, "form-control"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Carrito de compras");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CartComponent_div_8_Template, 17, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CartComponent_div_9_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CartComponent_div_10_Template, 48, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cart);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.cart);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.theresCart);
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_card__WEBPACK_IMPORTED_MODULE_11__.Card, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.Tooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe], styles: [".input-cant-cart[_ngcontent-%COMP%]{\r\n    width: 50px\r\n}\r\n.cart-page-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.cart-img[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 10px;\r\n    margin: auto;\r\n}\r\n.remove_container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.products-cart-container[_ngcontent-%COMP%] {\r\n    margin-top: var(--font-size-md);\r\n}\r\n.image-empty-cart[_ngcontent-%COMP%] {\r\n    height: 20vh;\r\n    width: 20vh;\r\n}\r\n.characteristics-tags[_ngcontent-%COMP%] {\r\n    border: 3px lightblue solid;\r\n    margin: auto;\r\n    padding: 0 0.6rem;\r\n    width: max-content;\r\n    border-radius: 10px;\r\n    opacity: 90%;\r\n}\r\n.product-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.cant-product[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n.cant-num[_ngcontent-%COMP%] {\r\n    font-size: var(--font-size-md);\r\n    margin: 0;\r\n}\r\n.cant-btn[_ngcontent-%COMP%] {\r\n    border: none;\r\n    background-color: white;\r\n    color: var(--color-button);\r\n    height: 100%;\r\n    margin: 0px;\r\n}\r\n.cart-title-image[_ngcontent-%COMP%], .cart-title-product[_ngcontent-%COMP%], .cart-title-price[_ngcontent-%COMP%], .cart-title-quantity[_ngcontent-%COMP%], .cart-title-subtotal[_ngcontent-%COMP%] {\r\n    font-size: var(--font-size-md);\r\n    padding: 0\r\n}\r\np[_ngcontent-%COMP%] {\r\n    font-size: var(--font-size-sm)\r\n}\r\n.cho-container[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    position: relative;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n    .cart-title-image[_ngcontent-%COMP%], .cart-img-div[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .cart-title-container[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding: 0;\r\n        margin: -5px;\r\n    }\r\n\r\n    .cart-title-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        font-size: var(--font-size-sm);\r\n    }\r\n\r\n    .cart-info-container[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding: 0px;\r\n        margin: 0;\r\n    }\r\n\r\n    .cart-info-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        font-size: var(--font-size-sm);\r\n        padding: 0;\r\n        margin: 0\r\n    }\r\n    .col-3[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n}"] });


/***/ }),

/***/ 2943:
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModule": () => (/* binding */ CartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 9287);
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.component */ 4918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);







class CartModule {
}
CartModule.ɵfac = function CartModule_Factory(t) { return new (t || CartModule)(); };
CartModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_5__.CardModule,
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_1__.CartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_5__.CardModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule], exports: [_cart_component__WEBPACK_IMPORTED_MODULE_1__.CartComponent] }); })();


/***/ }),

/***/ 1896:
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 7501);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




class AdminGuard {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.adminService.validateToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((isAuth) => {
            if (!isAuth) {
                this.router.navigateByUrl('/');
            }
        }));
    }
    canLoad(route, segments) {
        return this.adminService.validateToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((isAuth) => {
            if (!isAuth) {
                this.router.navigateByUrl('/');
            }
        }));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2681:
/*!*********************************!*\
  !*** ./src/app/models/Combo.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Combo": () => (/* binding */ Combo)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);

const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
class Combo {
    constructor(_id, name, price, image, products, code) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.products = products;
        this.code = code;
    }
    get oneImage() {
        return `${baseUrl}/products/image/combo/${this.image}`;
    }
}


/***/ }),

/***/ 4206:
/*!***********************************!*\
  !*** ./src/app/models/Product.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);

const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
class Product {
    constructor(_id, name, price, imageUrl, characteristics, code) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.characteristics = characteristics;
        this.code = code;
        this.characteristics = characteristics || {};
    }
    get getCharacteristics() {
        return this.characteristics;
    }
    get allImages() {
        let imagesArray = [];
        for (let i = 0; i < this.imageUrl.length; i++) {
            //upload/products/no-image
            if (!this.imageUrl[i]) {
                imagesArray.push(`${baseUrl}/products/image/product/no-image`);
            }
            else if (this.imageUrl[i].includes('http')) {
                imagesArray.push(this.imageUrl[i]);
            }
            else {
                imagesArray.push(`${baseUrl}/products/image/product/${this.imageUrl[i]}`);
            }
        }
        return imagesArray;
    }
    get oneImage() {
        if (!this.imageUrl[0]) {
            return `${baseUrl}/products/image/product/no-image`;
        }
        else if (this.imageUrl[0].includes('http')) {
            return this.imageUrl[0];
        }
        else {
            return `${baseUrl}/products/image/product/${this.imageUrl[0]}`;
        }
    }
}


/***/ }),

/***/ 5860:
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(email, role, uid, cart, phoneNumber, address) {
        this.email = email;
        this.role = role;
        this.uid = uid;
        this.cart = cart;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}
;


/***/ }),

/***/ 9149:
/*!******************************************************!*\
  !*** ./src/app/nopagefound/nopagefound.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NopagefoundComponent": () => (/* binding */ NopagefoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class NopagefoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NopagefoundComponent.ɵfac = function NopagefoundComponent_Factory(t) { return new (t || NopagefoundComponent)(); };
NopagefoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NopagefoundComponent, selectors: [["app-nopagefound"]], decls: 13, vars: 0, consts: [[1, "container"], [1, "text-uppercase"], ["src", "assets/images/notfound.png", "alt", "notfoundImage", 1, "notfound-image"], [1, "text-muted", "m-t-30", "m-b-30"], ["routerLink", "/", 1, "btn", "btn-info", "btn-rounded"], [1, "pi", "pi-angle-double-left"]], template: function NopagefoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page Not Found !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lo sentimos la p\u00E1gina que est\u00E1s intentando acceder no existe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "YOU SEEM TO BE TRYING TO FIND HIS WAY HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Back to home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".container[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.notfound-image[_ngcontent-%COMP%] {\r\n    width: 35vw;\r\n    align-self: center;\r\n    justify-self: end;\r\n}\r\n\r\n.btn-info[_ngcontent-%COMP%] {\r\n    background-color: #324149;\r\n    color: whitesmoke;\r\n    width: 40%;\r\n    justify-self: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.btn-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    position: relative;\r\n    top: 3px;\r\n    left: 0;\r\n}"] });


/***/ }),

/***/ 1534:
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsComponent": () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 28, vars: 0, consts: [[1, "about_us"], [1, "about-us_description"], [1, "contact_ribbon"], ["href", "https://api.whatsapp.com/send?phone=573152842614", "target", "_blank"], [1, "contact_phone"], [1, "uil", "uil-whatsapp"], ["href", "https://www.instagram.com/ecogaia.co/", "target", "_blank"], [1, "uil", "uil-instagram"], [1, "localization"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sobre nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ecogaia nace con el objetivo de reducir el impacto ambiental de la contaminacion y te ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "invitamos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " a que nos acompa\u00F1es en el camino teniendo un estilo de vida mas sostenible con el medio ambiente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Traeremos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "conscientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " y amigables con tu cuerpo y con la Tierra.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CONTACTANOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " + 57 3152842614 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " @ecogaia.co ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Bucaramanga, Colombia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&display=swap');\n\n\n\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none; \n  text-decoration: underline; \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; \n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n}\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n    \n    --bg-first: transparent;\n    --bg-first-linear: transparent;\n    --bg-nav: #F4E5D7;\n    --bg-second: #E9E5E1;\n    --color-text-primary: #896F5A;\n    --color-text-secondary: whitesmoke;\n    --color-button: #91785A;\n    --color-button-hover: #bbb6b1;\n    --color-ribbon-bg: rgba(219, 179, 105, 0.6);\n    --page-height: calc(100vh - 12vh);\n\n    \n    --font-titles: 'Libre Baskerville', Verdana, Serif;\n    --font-size-lg: 1.5rem; \n    --font-size-md: 1rem; \n    --font-size-sm: 0.8rem; \n\n\t--logo-size: 5rem;\n    \n}\n\n@media screen and (min-width: 1024px) {\n\t\t[_ngcontent-%COMP%]:root {\n\t\t\t\n\t\t\t--font-size-lg: 2rem;\n\t\t\t--font-size-md: 1.5rem; \n\t\t\t--font-size-sm: 1.1rem; \n\n\t\t\t--logo-size: 6rem;\n\t\t}\n\t}\nbody[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin: 0px;\n    height: max-content;\n    box-sizing: border-box;\n\tbackground: linear-gradient(-45deg, #fae5d3ef,#fef9e7ef, rgb(255, 252, 252),white);\n\toverflow-x: hidden;\n\tbackground-size: 400% 400%;\n\tanimation: gradient 8s ease infinite;\n}\n\n.center-spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 45vh;\n    left: 45vw;\n}\n.preloader[_ngcontent-%COMP%]{\n    width: 100px; height: 100px;\n\tbackground-size: contain;\n\tanimation: spin 2s linear infinite;\n}\n@keyframes spin {\n\tto { transform: rotate(360deg) }\n}\n.animate__fadeIn[_ngcontent-%COMP%] {\n\tanimation-delay: .3s;\n}\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n.about_us[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    margin: auto;\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-image: url('https://www.yourtrainingedge.com/wp-content/uploads/2019/05/background-calm-clouds-747964.jpg');\r\n    background-size: 100% 100%;\r\n    background-repeat: repeat; \r\n}\n.about-us_description[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    color: var(--color-text-secondary);\r\n    font-family: var(--font-titles);\r\n}\n.contact_ribbon[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    background-color: var(--color-ribbon-bg);\r\n    height: 270px;\r\n    width: 380px;\r\n    justify-content: center;\r\n    padding: 10px;\r\n    position: relative;\r\n    border-radius: 5% 5% 0 0;\r\n}\n.contact_ribbon[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    transform: rotate(180deg);\r\n    background: linear-gradient(-44deg, var(--color-ribbon-bg) 10px, transparent 0),\r\n    linear-gradient(44deg, var(--color-ribbon-bg) 10px, transparent 0 );\r\n    background-position: left bottom;\r\n    background-repeat: repeat-x;\r\n    background-size: 29px 32px;\r\n    display: block;\r\n    position: absolute;\r\n    bottom: -20px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 20px;\r\n}\n.contact_ribbon[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-family: var(--font-titles);\r\n    \r\n    color: black;\r\n    font-size: var(--font-size-lg);\r\n    font-weight: 600;\r\n    letter-spacing: 2px;\r\n    padding: 5px;\r\n    margin-top: 10px;\r\n    text-decoration: underline;\r\n}\n.contact_ribbon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-size: 2rem\r\n}\n.contact_ribbon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\n.contact_ribbon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: 400;\r\n    font-size: var(--font-size-lg);\r\n}\n.localization[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    font-size: 1rem !important;\r\n}\n@media only screen and (max-width: 770px) {\r\n    .about_us[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .about-us_description[_ngcontent-%COMP%] {\r\n        color: black;\r\n        align-self: flex-end;\r\n        font-weight: 550;\r\n    }\r\n\r\n    .about-us_description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        color: rgb(90, 90, 83);\r\n        font-weight: bold;\r\n    }\r\n}"] });


/***/ }),

/***/ 8680:
/*!***********************************************************************!*\
  !*** ./src/app/pages/components/combos-link/combos-link.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CombosLinkComponent": () => (/* binding */ CombosLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_combos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/combos.service */ 4614);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class CombosLinkComponent {
    constructor(combosService) {
        this.combosService = combosService;
        this.routesLinkCombos = [];
    }
    ngOnInit() {
        this.combosService.getCombos().subscribe(({ combos }) => {
            combos.forEach((combo) => {
                const route = `/combo/${combo.title}`;
                this.routesLinkCombos.push(route);
            });
        });
    }
}
CombosLinkComponent.ɵfac = function CombosLinkComponent_Factory(t) { return new (t || CombosLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_combos_service__WEBPACK_IMPORTED_MODULE_0__.CombosService)); };
CombosLinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CombosLinkComponent, selectors: [["app-combos-link"]], decls: 22, vars: 1, consts: [[1, "center", 3, "routerLink"], [1, "icon-click"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet"], ["transform", "translate(0.000000,512.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M2005 5106 c-40 -18 -73 -56 -85 -97 -6 -19 -10 -113 -10 -209 0\n            -199 12 -242 72 -280 47 -30 137 -24 174 11 51 47 54 63 54 282 0 195 -1 205\n            -23 238 -40 61 -117 84 -182 55z"], ["d", "M1217 4788 c-39 -23 -77 -86 -77 -128 0 -49 43 -109 163 -228 158\n            -156 207 -178 291 -129 65 37 92 114 65 184 -13 36 -263 288 -305 308 -44 21\n            -92 18 -137 -7z"], ["d", "M2780 4799 c-30 -12 -286 -263 -306 -301 -44 -83 10 -197 101 -214\n            70 -13 93 1 238 145 76 75 145 148 153 163 8 15 14 47 14 71 0 102 -105 173\n            -200 136z"], ["d", "M1995 4188 c-125 -16 -264 -116 -328 -235 -55 -104 -57 -123 -57\n            -910 l0 -723 -25 10 c-52 20 -148 22 -219 6 -183 -43 -316 -184 -347 -368 -7\n            -45 -9 -208 -6 -510 5 -488 6 -501 73 -687 61 -171 153 -310 295 -446 184\n            -176 410 -284 661 -315 65 -8 278 -10 698 -7 571 3 610 5 690 24 231 57 402\n            153 571 322 170 171 267 350 325 601 14 64 17 152 21 587 3 351 1 534 -6 585\n            -28 180 -151 326 -319 378 -76 24 -197 26 -264 6 l-45 -13 -21 72 c-40 136\n            -156 254 -290 295 -76 24 -188 26 -256 6 -43 -13 -48 -13 -53 2 -51 148 -165\n            259 -307 297 -65 18 -217 18 -258 0 -17 -7 -18 12 -18 323 0 296 -2 337 -19\n            391 -66 212 -268 338 -496 309z m174 -342 l36 -36 5 -993 c5 -973 5 -993 25\n            -1027 43 -74 136 -95 211 -49 64 39 64 38 64 551 0 430 2 466 19 504 27 60 77\n            88 147 82 39 -3 61 -11 80 -29 55 -51 54 -41 54 -541 0 -461 0 -464 23 -508\n            51 -102 191 -114 253 -23 17 26 19 55 24 363 5 312 6 337 25 368 54 89 170 97\n            245 17 l25 -27 5 -336 c6 -385 6 -387 90 -430 69 -35 149 -14 188 50 17 28 21\n            55 24 179 3 138 5 148 30 186 67 101 228 96 286 -10 16 -29 17 -77 17 -562 -1\n            -515 -2 -532 -23 -610 -94 -341 -354 -585 -691 -649 -70 -13 -175 -16 -655\n            -16 -522 0 -579 2 -663 19 -331 69 -588 315 -675 646 -20 74 -22 113 -25 506\n            -3 288 -1 439 6 467 14 49 67 98 116 108 49 9 119 -19 147 -59 22 -31 23 -40\n            28 -342 5 -289 6 -312 25 -345 28 -47 76 -73 133 -72 48 0 82 19 116 66 21 27\n            21 35 26 1259 l5 1232 22 35 c54 86 160 98 232 26z"], ["d", "M870 4069 c-70 -28 -110 -106 -90 -178 12 -47 66 -97 112 -106 18 -4\n            117 -5 220 -3 203 3 213 6 260 69 48 64 23 166 -51 207 -36 21 -51 22 -232 21\n            -107 0 -205 -5 -219 -10z"], ["d", "M2811 4062 c-55 -27 -76 -64 -76 -132 0 -67 20 -102 75 -131 30 -17\n            59 -19 230 -19 171 0 200 2 230 19 50 27 73 62 78 123 3 44 0 59 -20 88 -43\n            64 -68 70 -288 70 -166 0 -200 -3 -229 -18z"]], template: function CombosLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routesLinkCombos[0]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: [".center[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 18%;\r\n    left: 70%;\r\n}\r\n.center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size:3rem;\r\n    color:#555;\r\n    transition: all 1s ease-in-out;\r\n    display: inline-block;\r\n    animation: animate 4s 3;\r\n}\r\n.icon-click[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n}\r\n.center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){\r\n    animation-delay:0.4s\r\n}\r\n.center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\n    animation-delay:0.6s\r\n}\r\n.center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\n    animation-delay:0.7s\r\n}\r\n.center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){\r\n    animation-delay:0.8s\r\n}\r\n.center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5){\r\n    animation-delay:0.9s\r\n}\r\n.center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6){\r\n    animation-delay:1s\r\n}\r\n.center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7){\r\n    animation-delay:1.1s\r\n}\r\n@keyframes animate {\r\n    0%{\r\n        transform:translatey(0);\r\n         margin-left:0;\r\n    }\r\n    50%{\r\n        transform:translatey(-15px);\r\n        color:var(--color-primary);\r\n        margin-left:10px;\r\n        text-shadow: 0 15px 5px rgba(0,0,0,1) \r\n    }\r\n    100%{\r\n        transform:translatey(0);\r\n         margin-left:0;\r\n    }\r\n}\r\n@media only screen and (max-width: 1150px) {\r\n    .center[_ngcontent-%COMP%]{\r\n        top: 16%;\r\n        left: 70%;\r\n    }\r\n    .center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    .icon-click[_ngcontent-%COMP%] {\r\n        width: 75px;\r\n    }\r\n}\r\n@media only screen and (max-width: 650px) {\r\n    .center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .icon-click[_ngcontent-%COMP%] {\r\n        width: 50px;\r\n    }\r\n}"] });


/***/ }),

/***/ 7315:
/*!*************************************************************************!*\
  !*** ./src/app/pages/components/image-window/image-window.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageWindowComponent": () => (/* binding */ imageWindowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function imageWindowComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
} }
class imageWindowComponent {
    constructor() {
        this.loading = true;
    }
    ngOnInit() {
    }
    onLoad() {
        this.loading = false;
    }
}
imageWindowComponent.ɵfac = function imageWindowComponent_Factory(t) { return new (t || imageWindowComponent)(); };
imageWindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: imageWindowComponent, selectors: [["app-image-window"]], inputs: { imageUrl: "imageUrl" }, decls: 3, vars: 3, consts: [[1, "image-window"], ["alt", "product image", 1, "img", "animate__animated", "animate__fadeIn", 3, "hidden", "src", "load"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2rem", 4, "ngIf"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"]], template: function imageWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function imageWindowComponent_Template_img_load_1_listener() { return ctx.onLoad(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, imageWindowComponent_i_2_Template, 1, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loading)("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".image-window[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 1rem 0 0 0;\r\n    border: .15rem solid hsl(35, 100%, 15%, 70%);\r\n    border-radius: 100px 100px 0 0;\r\n    height: 335px;\r\n    width: 215px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    border-radius: 100px 100px 0 0;\r\n    height: 310px;\r\n    width: 190px;\r\n}\r\n\r\n@media screen and (min-width: 1504px) {\r\n    .image-window[_ngcontent-%COMP%] {\r\n        border-radius: 140px 140px 0 0;\r\n        height: 40vh;\r\n        width: 12vw;\r\n    }\r\n\r\n    .img[_ngcontent-%COMP%] {\r\n        border-radius: 135px 135px 0 0;\r\n        height: 36vh;\r\n        width: 10.2vw;\r\n    }\r\n}"] });


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_helpers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/helpers.service */ 4063);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ 9531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_combos_link_combos_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/combos-link/combos-link.component */ 8680);
/* harmony import */ var _components_image_window_image_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/image-window/image-window.component */ 7315);







function HomeComponent_div_0_div_11_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 14);
} }
function HomeComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-image-window", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomeComponent_div_0_div_11_i_2_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("imageUrl", image_r3.path)("routerLink", image_r3.productUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !image_r3.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](image_r3.name);
} }
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00A1Bienvenidos!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "A un consumo consciente, sostenible y responsable. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " siguenos en instagram :). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, HomeComponent_div_0_div_11_Template, 5, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "ECO TIENDA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-combos-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(help, productService) {
        this.help = help;
        this.productService = productService;
        this.images = [];
    }
    ngOnInit() {
        this.productService.getProducts().subscribe(products => {
            this.images = products.map(product => {
                return { name: product.name, path: product.oneImage, productUrl: `/product/${product.code}` };
            });
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_helpers_service__WEBPACK_IMPORTED_MODULE_0__.HelpersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 2, consts: [["class", "container-home animate__animated animate__fadeIn", 4, "ngIf"], ["class", "center-spinner animate__animated animate__fadeOut", 4, "ngIf"], [1, "container-home", "animate__animated", "animate__fadeIn"], ["href", "https://www.instagram.com/ecogaia.co/", "target", "_blank"], [1, "uil", "uil-instagram"], [1, "img-container"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-center"], [1, "col-3", "container-button"], ["routerLink", "/products", 1, "btn"], [1, "uil", "uil-arrow-circle-right"], [1, "image-home", 3, "imageUrl", "routerLink"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2rem", 4, "ngIf"], [1, "text-center"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "center-spinner", "animate__animated", "animate__fadeOut"], ["src", "assets/images/preloader-image.png", 1, "preloader"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 18, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.images.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.images.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _components_combos_link_combos_link_component__WEBPACK_IMPORTED_MODULE_2__.CombosLinkComponent, _components_image_window_image_window_component__WEBPACK_IMPORTED_MODULE_3__.imageWindowComponent], styles: ["h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  color: #786F5A;\r\n  margin:  0;\r\n  padding: 0;\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: var(--font-size-md);\r\n}\r\n\r\na[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\r\n  color: #786F5A;\r\n  text-decoration: none;\r\n  font-style: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n  font-size: var(--font-size-lg);\r\n  cursor: pointer;\r\n}\r\n\r\na[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\r\n  color: #786f5a80;\r\n}\r\n\r\n.container-home[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding-bottom: 1.5rem;\r\n    width: 90vw;\r\n    margin: auto;\r\n    height: max-content;\r\n  }\r\n\r\n.container-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content:center;\r\n    margin-top: 1.5rem;\r\n  }\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    background-color: #91785A;\r\n    color: white;\r\n\r\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n    background: #786F5A;\r\n    transform: translateX(2px);\r\n  }\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n    height: max-content;\r\n    flex-wrap: wrap-reverse;\r\n  }\r\n\r\n.image-home[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    min-width: 300px;\r\n  }\r\n\r\n@media only screen and (max-width: 980px) {\r\n    .img-container[_ngcontent-%COMP%] {\r\n      align-content: center;\r\n    }\r\n    .container-home[_ngcontent-%COMP%] {\r\n      height: max-content;\r\n    }\r\n  }\r\n\r\n@media screen and (min-width: 1024px) {\r\n    .img-container[_ngcontent-%COMP%] {\r\n      align-content: center;\r\n      justify-content: space-evenly;\r\n    }\r\n}"] });


/***/ }),

/***/ 8159:
/*!**************************************************!*\
  !*** ./src/app/pages/orders/orders.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_shop_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shop.service */ 635);
/* harmony import */ var _services_combos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/combos.service */ 4614);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ 9531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/divider */ 669);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 4207);









function OrdersComponent_h5_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.hits, " items");
} }
function OrdersComponent_div_18_tr_14_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrdersComponent_div_18_tr_14_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.seeProducts(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.showMore ? "Ver menos..." : "Ver productos...", " ");
} }
function OrdersComponent_div_18_tr_14_span_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", item_r11.product, " (", item_r11.quantity, ") ");
} }
function OrdersComponent_div_18_tr_14_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OrdersComponent_div_18_tr_14_span_12_div_1_Template, 2, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.prodsToShow);
} }
function OrdersComponent_div_18_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, OrdersComponent_div_18_tr_14_button_11_Template, 2, 1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, OrdersComponent_div_18_tr_14_span_12_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", order_r3.orderNumber || "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 6, order_r3.orderDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r3.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r3.totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r3.products.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.showMore && i_r4 === ctx_r2.showMoreOrder);
} }
function OrdersComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "# Orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Fecha del pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Direcci\u00F3n del pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Precio Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, OrdersComponent_div_18_tr_14_Template, 13, 8, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.orders);
} }
class OrdersComponent {
    constructor(shopService, comboService, productService) {
        this.shopService = shopService;
        this.comboService = comboService;
        this.productService = productService;
        this.ordersTest = [];
        this.orders = [];
        this.hits = 0;
        this.queryParam = "";
        this.prodsToShow = [];
        this.showMore = false;
    }
    ngOnInit() {
    }
    search() {
        this.shopService.getOrder('email', this.queryParam).subscribe((resp) => {
            this.hits = resp.hits;
            this.orders = resp.orders.map((order) => {
                const { orderNumber, totalPrice, orderDate, shippingAddress } = order;
                const address = `${shippingAddress.state}, ${shippingAddress.city} - ${shippingAddress.address}`;
                let products = order.cart.map((prod) => ({ product: prod.product, type: prod.onModel, quantity: prod.quantity }));
                return { orderNumber, products, totalPrice, orderDate, address };
            });
        });
    }
    searchNames(type, prodId) {
        return new Promise((resolve, reject) => {
            if (type === 'Combo') {
                this.comboService.getOneCombo('comboId', prodId).subscribe((combo) => {
                    resolve(combo.name);
                });
            }
            else if (type === 'Product') {
                this.productService.getSingleProduct(prodId).subscribe(prod => {
                    resolve(prod.name);
                });
            }
        });
    }
    seeProducts(index) {
        const search = this.fshowMore(index);
        if (!search)
            return;
        for (let i = 0; i < this.orders[index].products.length; i++) {
            const { type, product, quantity } = this.orders[index].products[i];
            this.searchNames(type, product).then((resp) => {
                this.prodsToShow.push({ product: resp, quantity });
            });
        }
        console.log(this.prodsToShow);
    }
    fshowMore(index) {
        this.showMoreOrder = +index;
        if (this.showMore) {
            this.showMore = false;
            this.showMoreOrder = undefined;
            this.prodsToShow = [];
            return false;
        }
        else {
            this.showMore = true;
            return true;
        }
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_shop_service__WEBPACK_IMPORTED_MODULE_0__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_combos_service__WEBPACK_IMPORTED_MODULE_1__.CombosService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService)); };
OrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 19, vars: 3, consts: [[1, "container"], [1, "container", "row", "mt-4"], [1, "col-8"], [1, "col"], ["class", " mt-3 float-end", 4, "ngIf"], [1, "search-container"], [1, "col-12", "col-sm-5"], [1, "search-msg"], [1, "col-sm-2"], ["layout", "vertical", "type", "dashed"], [1, "col-12", "col-sm-5", "input-container"], [1, "p-inputgroup"], ["type", "text", "pInputText", "", "placeholder", "Keyword", 3, "ngModel", "ngModelChange"], ["type", "button", "pButton", "", "pRipple", "", "label", "Search", 3, "click"], ["class", "table-responsive mt-5", 4, "ngIf"], [1, "mt-3", "float-end"], [1, "table-responsive", "mt-5"], [1, "table"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "btn", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "btn", 3, "click"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Ordenes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, OrdersComponent_h5_6_Template, 3, 1, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Ingresa el n\u00FAmero de orden o t\u00FA email para buscar una orden realizada. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "p-divider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function OrdersComponent_Template_input_ngModelChange_16_listener($event) { return ctx.queryParam = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrdersComponent_Template_button_click_17_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, OrdersComponent_div_18_Template, 15, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orders.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.queryParam);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orders.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_card__WEBPACK_IMPORTED_MODULE_5__.Card, primeng_divider__WEBPACK_IMPORTED_MODULE_6__.Divider, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: [".search-msg[_ngcontent-%COMP%] {\n        font-size: 16px;\n        padding-bottom: 0px\n      }\n      .input-container[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .search-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n      }\n      @media screen and (min-width: 1024px) {\n        .search-msg[_ngcontent-%COMP%] {\n          font-size: 22px\n        }\n      }"] });


/***/ }),

/***/ 7664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/navbar/navbar.component */ 4696);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 2, vars: 0, template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/carousel */ 566);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/divider */ 669);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us/about-us.component */ 1534);
/* harmony import */ var _components_image_window_image_window_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/image-window/image-window.component */ 7315);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5245);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ 7664);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ 7539);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders/orders.component */ 8159);
/* harmony import */ var _components_combos_link_combos_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/combos-link/combos-link.component */ 8680);
/* harmony import */ var _webhooks_sucess_sucess_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webhooks/sucess/sucess.component */ 594);
/* harmony import */ var _webhooks_failed_failed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./webhooks/failed/failed.component */ 9555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);



















class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_14__.CardModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule,
            primeng_carousel__WEBPACK_IMPORTED_MODULE_16__.CarouselModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_18__.DividerModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__.AboutUsComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _products_products_component__WEBPACK_IMPORTED_MODULE_5__.ProductsComponent,
        _components_image_window_image_window_component__WEBPACK_IMPORTED_MODULE_2__.imageWindowComponent,
        _pages_component__WEBPACK_IMPORTED_MODULE_4__.PagesComponent,
        _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__.OrdersComponent,
        _components_combos_link_combos_link_component__WEBPACK_IMPORTED_MODULE_7__.CombosLinkComponent,
        _webhooks_sucess_sucess_component__WEBPACK_IMPORTED_MODULE_8__.SucessComponent,
        _webhooks_failed_failed_component__WEBPACK_IMPORTED_MODULE_9__.FailedComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_14__.CardModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_16__.CarouselModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_18__.DividerModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [_pages_component__WEBPACK_IMPORTED_MODULE_4__.PagesComponent,
        _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__.AboutUsComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _products_products_component__WEBPACK_IMPORTED_MODULE_5__.ProductsComponent] }); })();


/***/ }),

/***/ 974:
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ 7664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_childs-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./childs-routing.module */ 6434)).then(m => m.ChildRoutingModule)
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7539:
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/products.service */ 9531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_combos_link_combos_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/combos-link/combos-link.component */ 8680);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);





const _c0 = function (a0) { return { "background": a0, "background-repeat": "no-repeat", "background-size": "cover" }; };
function ProductsComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, "url(" + product_r3.oneImage + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, product_r3.price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", product_r3.code, "");
} }
function ProductsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-combos-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductsComponent_div_0_div_3_Template, 15, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.products);
} }
function ProductsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ProductsComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
    }
    ngOnInit() {
        this.productService.getProducts().subscribe(products => {
            this.products = products;
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService)); };
ProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-catalog"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], ["class", "center-spinner animate__animated animate__fadeOut", 4, "ngIf"], [1, "container"], [1, "row", "container-box"], ["class", "col-lg-3 col-sm-6 columns-description", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-sm-6", "columns-description"], [1, "space-image"], [1, "description-box"], [1, "description-img", 3, "ngStyle"], [1, "description-content"], [1, "description-buttons"], [1, "btn", 3, "routerLink"], [1, "pi", "pi-plus-circle"], ["routerLink", "/cart", 1, "btn"], [1, "pi", "pi-shopping-cart"], [1, "center-spinner", "animate__animated", "animate__fadeOut"], ["src", "assets/images/preloader-image.png", 1, "preloader"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductsComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductsComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.products.length >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.products.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _components_combos_link_combos_link_component__WEBPACK_IMPORTED_MODULE_1__.CombosLinkComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe], styles: ["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&display=swap');\n\n\n\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none; \n  text-decoration: underline; \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; \n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n}\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n    \n    --bg-first: transparent;\n    --bg-first-linear: transparent;\n    --bg-nav: #F4E5D7;\n    --bg-second: #E9E5E1;\n    --color-text-primary: #896F5A;\n    --color-text-secondary: whitesmoke;\n    --color-button: #91785A;\n    --color-button-hover: #bbb6b1;\n    --color-ribbon-bg: rgba(219, 179, 105, 0.6);\n    --page-height: calc(100vh - 12vh);\n\n    \n    --font-titles: 'Libre Baskerville', Verdana, Serif;\n    --font-size-lg: 1.5rem; \n    --font-size-md: 1rem; \n    --font-size-sm: 0.8rem; \n\n\t--logo-size: 5rem;\n    \n}\n\n@media screen and (min-width: 1024px) {\n\t\t[_ngcontent-%COMP%]:root {\n\t\t\t\n\t\t\t--font-size-lg: 2rem;\n\t\t\t--font-size-md: 1.5rem; \n\t\t\t--font-size-sm: 1.1rem; \n\n\t\t\t--logo-size: 6rem;\n\t\t}\n\t}\nbody[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin: 0px;\n    height: max-content;\n    box-sizing: border-box;\n\tbackground: linear-gradient(-45deg, #fae5d3ef,#fef9e7ef, rgb(255, 252, 252),white);\n\toverflow-x: hidden;\n\tbackground-size: 400% 400%;\n\tanimation: gradient 8s ease infinite;\n}\n\n.center-spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 45vh;\n    left: 45vw;\n}\n.preloader[_ngcontent-%COMP%]{\n    width: 100px; height: 100px;\n\tbackground-size: contain;\n\tanimation: spin 2s linear infinite;\n}\n@keyframes spin {\n\tto { transform: rotate(360deg) }\n}\n.animate__fadeIn[_ngcontent-%COMP%] {\n\tanimation-delay: .3s;\n}\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n.container[_ngcontent-%COMP%] {\r\n    height: var(--page-height);\r\n    padding: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    position: initial;\r\n}\n.space-image[_ngcontent-%COMP%] {\r\n    height: 7.5rem;\r\n}\n.container-box[_ngcontent-%COMP%] {\r\n    justify-content: space-around;\r\n}\n.description-box[_ngcontent-%COMP%] {\r\n    border-radius: 100px 100px 0 0;\r\n    height: 400px;\r\n    width: 295px;\r\n    max-width: -moz-fit-content;\r\n    max-width: fit-content;\r\n    box-sizing: content-box;\r\n    border: 2px solid var(--color-text-primary);\r\n    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;\r\n    transition: ease-in 0.2s;\r\n}\n.description-box[_ngcontent-%COMP%]:hover{\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px;\r\n}\n.description-img[_ngcontent-%COMP%] {\r\n    height: 15rem;\r\n    width: 15rem;\r\n    border-radius: 50%;\r\n    margin: auto;\r\n    margin-top: -50%;\r\n    box-shadow: rgba(0, 0, 0.1, 0.3) 0px 1px 2px 0px;\r\n}\n.description-content[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    height: 200px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\n.description-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.6rem;\r\n    text-align: center;\r\n    width: 80%;\r\n    color: var(--color-text-primary);\r\n    font-family: var(--font-titles);\r\n    font-weight: bold;\r\n}\n.description-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: var(--color-text-primary);\r\n    font-size: 1.5rem;\r\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    color: var(--color-button);\r\n    margin: 0;\r\n    padding: 0;\r\n}\n.btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    \r\n    color: var(--color-button-hover);\r\n}\n@media only screen and (max-width: 1150px) {\r\n    \r\n    .description-box[_ngcontent-%COMP%] {\r\n        height: 320px;\r\n        width: 215px;\r\n    }\r\n    \r\n    .description-img[_ngcontent-%COMP%] {\r\n        height: 12rem;\r\n        width: 12rem;\r\n    }\r\n    \r\n    .description-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 1.4rem;\r\n        text-align: center;\r\n        width: 80%;\r\n        color: var(--color-text-primary);\r\n        font-family: var(--font-titles);\r\n        font-weight: bold;\r\n    }\r\n    \r\n    .description-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        color: var(--color-text-primary);\r\n        font-size: 1.5rem;\r\n    }\r\n    \r\n    \r\n    .btn[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0 15px;\r\n    }\r\n    \r\n    .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n        color: var(--color-button);\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n}\n@media only screen and (max-width: 989px) {\r\n     \r\n    \r\n    .container[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n        background: var(--bg-first);\r\n        background: var(--bg-first-linear);\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: max-content;\r\n    }\r\n    .container-box[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-content: center;\r\n        margin-bottom: 50px;\r\n    }\r\n\r\n    .columns-description[_ngcontent-%COMP%] {\r\n        height: 420px;\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n}\n@media only screen and (max-width: 565px) {\r\n     \r\n    .container-box[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-content: center;\r\n    }\r\n\r\n    .columns-description[_ngcontent-%COMP%] {\r\n        height: 420px;\r\n    }\r\n    .description-box[_ngcontent-%COMP%] {\r\n        align-self: center;\r\n    }\r\n}"] });


/***/ }),

/***/ 9555:
/*!***********************************************************!*\
  !*** ./src/app/pages/webhooks/failed/failed.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FailedComponent": () => (/* binding */ FailedComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class FailedComponent {
    constructor(router) {
        this.router = router;
        this.counter = 15;
        this.interval$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(1000);
    }
    ngOnInit() {
        this.interval$.subscribe((value) => {
            this.counter = 15 - value;
            if (this.counter === 0) {
                this.router.navigateByUrl('/');
            }
        });
    }
}
FailedComponent.ɵfac = function FailedComponent_Factory(t) { return new (t || FailedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
FailedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FailedComponent, selectors: [["app-failed"]], decls: 7, vars: 1, consts: [[1, "container"], [1, "title-failure"], ["src", "assets/images/logo-failure.svg", "alt", "logo error pago", 1, "image-failure"]], template: function FailedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "El proceso de pago ha finalizado...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ser\u00E1s redireccionado a la p\u00E1gina principal en ", ctx.counter, " segundos...");
    } }, styles: [".container[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 80vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n  .title-failure[_ngcontent-%COMP%] {\n    color: #896F5A;\n    font-family: 'Libre Baskerville', Verdana, Serif;\n    font-size: 2rem\n  }\n  .image-failure[_ngcontent-%COMP%] {\n    width: 600px;\n    height: 400px\n  }\n  h2[_ngcontent-%COMP%] {\n    color: #896F5A;\n  }"] });


/***/ }),

/***/ 594:
/*!***********************************************************!*\
  !*** ./src/app/pages/webhooks/sucess/sucess.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SucessComponent": () => (/* binding */ SucessComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class SucessComponent {
    constructor(router) {
        this.router = router;
        this.counter = 15;
        this.interval$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(1000);
    }
    ngOnInit() {
        this.interval$.subscribe((value) => {
            this.counter = 15 - value;
            if (this.counter === 0) {
                this.router.navigateByUrl('/');
            }
        });
    }
}
SucessComponent.ɵfac = function SucessComponent_Factory(t) { return new (t || SucessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
SucessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SucessComponent, selectors: [["app-sucess"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "title-success"], ["src", "assets/images/logo-success.svg", "alt", "logo compra exitosa", 1, "image-success"]], template: function SucessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "El proceso de pago ha finalizado...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ser\u00E1s redireccionado a la p\u00E1gina principal en ", ctx.counter, " segundos...");
    } }, styles: [".container[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 80vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n  .title-success[_ngcontent-%COMP%] {\n    color: #896F5A;\n    font-family: 'Libre Baskerville', Verdana, Serif;\n    font-size: 2rem\n  }\n  .image-success[_ngcontent-%COMP%] {\n    width: 600px;\n    height: 400px\n  }\n  h2[_ngcontent-%COMP%] {\n    color: #896F5A;\n  }"] });


/***/ }),

/***/ 7501:
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ 5860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);







const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
class AdminService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    get token() {
        return localStorage.getItem('tokenEGS') || '';
    }
    get headers() {
        return {
            headers: {
                'x-token': this.token
            }
        };
    }
    ;
    get getRole() {
        return this.user.role;
    }
    saveLocalStorage(token) {
        localStorage.setItem('tokenEGS', token);
    }
    loginUser(formData) {
        return this.http.post(`${baseUrl}/auth/login`, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((resp) => {
            this.saveLocalStorage(resp.token);
        }));
    }
    logOut() {
        localStorage.removeItem('tokenEGS');
        this.router.navigateByUrl('/');
    }
    getAllOrders() {
        const url = `${baseUrl}/shop/orders`;
        return this.http.get(url, this.headers).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(resp => {
            return resp.orders;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => err.msg));
    }
    validateToken() {
        return this.http.get(`${baseUrl}/auth/renew`, this.headers).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            const { email, role, uid } = data.user;
            this.user = new _models_User__WEBPACK_IMPORTED_MODULE_1__.User(email, role, uid);
            this.saveLocalStorage(data.token);
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
            console.log(err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
        }));
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
AdminService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4614:
/*!********************************************!*\
  !*** ./src/app/services/combos.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CombosService": () => (/* binding */ CombosService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _models_Combo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Combo */ 2681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.service */ 7501);
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.service */ 635);







const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
class CombosService {
    constructor(http, admin, shopService) {
        this.http = http;
        this.admin = admin;
        this.shopService = shopService;
    }
    createCombo(comboData) {
        const url = `${baseUrl}/combos`;
        const formData = new FormData();
        const { title, price, products, image } = comboData;
        formData.append('title', title);
        formData.append('price', price);
        formData.append('products', products);
        formData.append('image', image);
        return this.http.post(url, formData, this.admin.headers);
    }
    getCombos() {
        const url = `${baseUrl}/combos`;
        return this.http.get(url);
    }
    getOneCombo(query, value) {
        const url = `${baseUrl}/combos/one?${query}=${value}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({ combo }) => {
            const comboInstance = new _models_Combo__WEBPACK_IMPORTED_MODULE_1__.Combo(combo._id, combo.title, combo.price, combo.image, combo.products);
            return comboInstance;
        }));
    }
    removeCombo(id) {
        const url = `${baseUrl}/combos/${id}`;
        console.log(this.admin.headers);
        return this.http.patch(url, 'nothing', this.admin.headers);
    }
    addComboCart(comboData) {
        console.log(comboData);
        this.shopService.addProductCart(comboData);
    }
}
CombosService.ɵfac = function CombosService_Factory(t) { return new (t || CombosService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shop_service__WEBPACK_IMPORTED_MODULE_3__.ShopService)); };
CombosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CombosService, factory: CombosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 162:
/*!*************************************************!*\
  !*** ./src/app/services/file-upload.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadService": () => (/* binding */ FileUploadService)
/* harmony export */ });
/* harmony import */ var C_Users_57318_Desktop_Projects_EcogaiaShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
class FileUploadService {
  constructor() {}

  updatePhoto(file, type, id, updateCoverImage = false) {
    return (0,C_Users_57318_Desktop_Projects_EcogaiaShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        const url = `${baseUrl}/products/image/${type}/${id}`;
        const formData = new FormData();
        formData.append('image', file);

        if (updateCoverImage) {
          formData.append('forUpdate', 'true');
        }

        const resp = yield fetch(url, {
          method: 'PUT',
          headers: {
            'x-token': localStorage.getItem('token') || ''
          },
          body: formData
        });
        const data = yield resp.json();

        if (data.ok) {
          return data.filename;
        } else {
          console.log(data.msg);
          return false;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    })();
  }

}

FileUploadService.ɵfac = function FileUploadService_Factory(t) {
  return new (t || FileUploadService)();
};

FileUploadService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FileUploadService,
  factory: FileUploadService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4063:
/*!*********************************************!*\
  !*** ./src/app/services/helpers.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpersService": () => (/* binding */ HelpersService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);




class HelpersService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    getTitle() {
        return this.router.events;
    }
    getCities(state) {
        const url = `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${state}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((dataCities) => {
            return dataCities.map(data => data.municipio);
        }));
    }
}
HelpersService.ɵfac = function HelpersService_Factory(t) { return new (t || HelpersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
HelpersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HelpersService, factory: HelpersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9531:
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Product */ 4206);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.service */ 7501);






const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
class ProductsService {
    constructor(http, admin) {
        this.http = http;
        this.admin = admin;
    }
    productImage(imageUrl, type) {
        const url = `${baseUrl}/products/image/${type}/${imageUrl}`;
        return this.http.get(url);
    }
    toProductData(productForm) {
        const formData = new FormData();
        // setting all the productform values to formData, in case that a file come in the form can be
        // send as file and not as json;
        const { name, code, image, price, characteristics } = productForm;
        // append the values
        formData.append('name', name);
        if (code) {
            formData.append('code', code);
        }
        if (image) {
            formData.append('imageUrl', image);
        }
        formData.append('price', price);
        if (characteristics) {
            formData.append('characteristics', characteristics);
        }
        return formData;
    }
    /* CRUD OPERATIONS */
    getProducts() {
        const url = `${baseUrl}/products/all`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(({ products }) => products), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(products => {
            const productsIntances = products.map(product => {
                const { _id, code, name, price, imageUrl, characteristics } = product;
                const newProduct = new _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product(_id, name, price, imageUrl, characteristics, code);
                return newProduct;
            });
            return productsIntances;
        }));
    }
    getSingleProduct(query) {
        let url = `${baseUrl}/products?code=${query}`;
        if (query.length > 3) {
            url = `${baseUrl}/products?id=${query}`;
            ;
        }
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(({ product }) => {
            return new _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product(product._id, product.name, product.price, product.imageUrl, product.characteristics, product.code);
        }));
    }
    addProduct(productForm) {
        const url = `${baseUrl}/products`;
        const formData = this.toProductData(productForm);
        return this.http.post(url, formData, this.admin.headers);
    }
    deleteProduct(id) {
        const url = `${baseUrl}/products/${id}`;
        return this.http.delete(url, this.admin.headers);
    }
    updateProduct(id, productForm) {
        const url = `${baseUrl}/products/${id}`;
        const formData = this.toProductData(productForm);
        return this.http.put(url, formData, this.admin.headers);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService)); };
ProductsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 635:
/*!******************************************!*\
  !*** ./src/app/services/shop.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopService": () => (/* binding */ ShopService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
class ShopService {
    constructor(http) {
        this.http = http;
    }
    get getCart() {
        if (localStorage.getItem('cart')) {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
        return this.cart;
    }
    getOrder(query, value) {
        const url = `${baseUrl}/shop/order?${query}=${value}`;
        return this.http.get(url);
    }
    postOrder(orderData) {
        const url = `${baseUrl}/shop/order`;
        return this.http.post(url, orderData);
    }
    addProductCart(selectedData) {
        /* Update cart in the localStorage of the user */
        const newProduct = selectedData.item;
        const newCharacteristics = selectedData.characteristics;
        // upload the previous cart on the LS
        let newCartData = this.getCart;
        let newCant = selectedData.cant;
        // If there is no cart create the cart
        if (!this.getCart) {
            const totalValue = newProduct.price * newCant;
            newCartData = {
                products: [{
                        item: newProduct,
                        cant: newCant,
                        characteristics: newCharacteristics,
                        combo: selectedData.combo
                    }],
                totalValue
            };
            const cartDataStringify = JSON.stringify(newCartData);
            localStorage.setItem('cart', cartDataStringify);
            return;
        }
        // Search for products that are already in the cart, the match has to be in _id and characteristics
        const oldCartProducts = this.getCart.products.map(product => product.item._id);
        const matchProducIndex = newCartData.products.findIndex(({ item, characteristics }) => {
            return item._id === newProduct._id &&
                JSON.stringify(characteristics) === JSON.stringify(newCharacteristics);
        });
        // If theres already that product (with the same characteristics) in the cart upload it
        if (oldCartProducts.includes(newProduct._id) && matchProducIndex >= 0) {
            // found the product in cart and put the new quantity/cant
            const productInCart = newCartData === null || newCartData === void 0 ? void 0 : newCartData.products[matchProducIndex];
            productInCart.cant += newCant;
            // replace again and change the totalValue of the cart
            newCartData === null || newCartData === void 0 ? void 0 : newCartData.products.splice(matchProducIndex, 1, productInCart);
            newCartData.totalValue += newProduct.price * newCant;
            // save cart
            const newCartDataStringity = JSON.stringify(newCartData);
            localStorage.setItem('cart', newCartDataStringity);
            return;
        }
        // if the new product hasn't found in the cart push it to the cart and change totalValue
        newCartData === null || newCartData === void 0 ? void 0 : newCartData.products.push({
            item: newProduct,
            cant: newCant,
            characteristics: newCharacteristics,
            combo: selectedData.combo
        });
        newCartData.totalValue += newProduct.price * newCant;
        const newCartDataStringity = JSON.stringify(newCartData);
        localStorage.setItem('cart', newCartDataStringity);
    }
    deleteProductCart(index) {
        /* Delete and entire product in the cart */
        const cartData = this.getCart;
        const productRemoved = cartData.products.splice(index, 1);
        if ((cartData === null || cartData === void 0 ? void 0 : cartData.products.length) === 0) {
            localStorage.removeItem('cart');
            this.cart = undefined;
            return false;
        }
        if (productRemoved.length > 0) {
            cartData.totalValue -= productRemoved[0].cant * productRemoved[0].item.price;
            localStorage.setItem('cart', JSON.stringify(cartData));
            return true;
        }
        return false;
    }
}
ShopService.ɵfac = function ShopService_Factory(t) { return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ShopService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShopService, factory: ShopService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_shop_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shop.service */ 635);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/menu */ 7791);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/badge */ 3422);









function NavbarComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Productos ecol\u00F3gicos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(router, shopService) {
        this.router = router;
        this.shopService = shopService;
        this.title = 'ECOGAIA';
        this.subtitle = true;
        this.itemsInCart = '0';
        this.role = '';
    }
    ngOnInit() {
        var _a;
        // Change the title of the navbar depending on the route
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(eventdata => {
            this.subtitle = false;
            switch (eventdata.url) {
                case '/products':
                    return 'PRODUCTOS';
                case '/about-us':
                    return 'NOSOTROS';
                case '/carrito':
                    return 'CART';
                default:
                    this.subtitle = true;
                    return 'ECOGAIA';
            }
        })).subscribe(data => {
            this.title = data;
        });
        this.itemsInCart = ((_a = this.shopService.getCart) === null || _a === void 0 ? void 0 : _a.products.length.toString()) || '0';
        this.itemsMenu = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                routerLink: '/'
            },
            {
                label: 'Productos',
                icon: 'pi pi-fw pi-slack',
                routerLink: '/products'
            },
            {
                label: 'Ordenes',
                icon: 'pi pi-ticket',
                routerLink: '/orders'
            },
            {
                label: 'Sobre Nosotros',
                icon: 'pi pi-globe',
                routerLink: '/about-us'
            }
        ];
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shop_service__WEBPACK_IMPORTED_MODULE_0__.ShopService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 14, vars: 7, consts: [[1, "navbar", "navbar-expand-lg"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/logo.png", "alt", "", 1, "navbar-logo"], [1, "navbar-title"], [4, "ngIf"], [1, "navbar_buttons-container"], ["appendTo", "body", 1, "menu", 3, "showTransitionOptions", "hideTransitionOptions", "popup", "model"], ["menu", ""], ["type", "button", "pButton", "", "icon", "pi pi-list", "label", "Menu", 1, "navbar-button", 3, "click"], ["routerLink", "/cart", 1, "navbar-button", "button-cart"], ["pBadge", "", "severity", "danger", 1, "uil", "uil-shopping-cart-alt", 3, "value"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavbarComponent_p_7_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return _r1.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showTransitionOptions", "0ms")("hideTransitionOptions", "0ms")("popup", true)("model", ctx.itemsMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsInCart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.Menu, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, primeng_badge__WEBPACK_IMPORTED_MODULE_8__.BadgeDirective], styles: ["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&display=swap');\n\n\n\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none; \n  text-decoration: underline; \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; \n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n}\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n    \n    --bg-first: transparent;\n    --bg-first-linear: transparent;\n    --bg-nav: #F4E5D7;\n    --bg-second: #E9E5E1;\n    --color-text-primary: #896F5A;\n    --color-text-secondary: whitesmoke;\n    --color-button: #91785A;\n    --color-button-hover: #bbb6b1;\n    --color-ribbon-bg: rgba(219, 179, 105, 0.6);\n    --page-height: calc(100vh - 12vh);\n\n    \n    --font-titles: 'Libre Baskerville', Verdana, Serif;\n    --font-size-lg: 1.5rem; \n    --font-size-md: 1rem; \n    --font-size-sm: 0.8rem; \n\n\t--logo-size: 5rem;\n    \n}\n\n@media screen and (min-width: 1024px) {\n\t\t[_ngcontent-%COMP%]:root {\n\t\t\t\n\t\t\t--font-size-lg: 2rem;\n\t\t\t--font-size-md: 1.5rem; \n\t\t\t--font-size-sm: 1.1rem; \n\n\t\t\t--logo-size: 6rem;\n\t\t}\n\t}\nbody[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin: 0px;\n    height: max-content;\n    box-sizing: border-box;\n\tbackground: linear-gradient(-45deg, #fae5d3ef,#fef9e7ef, rgb(255, 252, 252),white);\n\toverflow-x: hidden;\n\tbackground-size: 400% 400%;\n\tanimation: gradient 8s ease infinite;\n}\n\n.center-spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 45vh;\n    left: 45vw;\n}\n.preloader[_ngcontent-%COMP%]{\n    width: 100px; height: 100px;\n\tbackground-size: contain;\n\tanimation: spin 2s linear infinite;\n}\n@keyframes spin {\n\tto { transform: rotate(360deg) }\n}\n.animate__fadeIn[_ngcontent-%COMP%] {\n\tanimation-delay: .3s;\n}\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n.navbar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 15px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-around;\r\n    height: 12vh;\r\n    width: 95vw;\r\n    background-color: var(--bg-nav);\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\r\n    z-index: 999;\r\n}\n.navbar-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-family: var(--font-titles);\r\n    font-size: 2.5em;\r\n    letter-spacing: 5px;\r\n    color: var(--color-text-primary);\r\n    font-weight: bold;\r\n    margin: 0px;\r\n}\n.navbar-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: var(--color-text-primary);\r\n    font-family: var(--font-titles);\r\n    font-style: italic;\r\n    margin: 0px;\r\n    text-align: center;\r\n}\n.navbar-title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    border: 2px solid var(--color-text-primary);\r\n    width: 120%;\r\n    transform: translateX(-10%);\r\n}\n.navbar-button[_ngcontent-%COMP%] {\r\n    padding: 0.5rem;\r\n    margin: 0 0.5rem;\r\n    background-color: var(--bg-nav);\r\n    color: var(--color-button);\r\n    border: none;\r\n    font-size: 1.5rem;\r\n}\n.navbar-button[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--color-button);\r\n    color: var(--color-text-secondary);\r\n}\n.navbar-button[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 1px 0.15rem var(--color-text-primary);\r\n}\n.navbar-logo[_ngcontent-%COMP%] {\r\n    height: var(--logo-size);\r\n}\n.button-cart[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--bg-nav);\r\n    color: var(--color-text-primary);\r\n    opacity: 60%;\r\n    transform: translateY(-5%);\r\n}\n.menu[_ngcontent-%COMP%] {\r\n    z-index: 111;\r\n}\n@media only screen and (max-width: 670px) {\r\n    .navbar-title[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tieredmenu */ 6566);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menu */ 7791);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/badge */ 3422);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 4696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


// Prime NG






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_3__.TieredMenuModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_4__.MenuModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule,
            primeng_badge__WEBPACK_IMPORTED_MODULE_6__.BadgeModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_3__.TieredMenuModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_4__.MenuModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule,
        primeng_badge__WEBPACK_IMPORTED_MODULE_6__.BadgeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: '143.198.236.202/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);