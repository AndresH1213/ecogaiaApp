(self["webpackChunkecogaia_shop"] = self["webpackChunkecogaia_shop"] || []).push([["src_app_pages_catalog_catalog_module_ts"],{

/***/ 3621:
/*!******************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-progressspinner.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressSpinner": () => (/* binding */ ProgressSpinner),
/* harmony export */   "ProgressSpinnerModule": () => (/* binding */ ProgressSpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);





class ProgressSpinner {
  constructor() {
    this.strokeWidth = "2";
    this.fill = "none";
    this.animationDuration = "2s";
  }

}

ProgressSpinner.ɵfac = function ProgressSpinner_Factory(t) {
  return new (t || ProgressSpinner)();
};

ProgressSpinner.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProgressSpinner,
  selectors: [["p-progressSpinner"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    style: "style",
    styleClass: "styleClass",
    strokeWidth: "strokeWidth",
    fill: "fill",
    animationDuration: "animationDuration"
  },
  decls: 3,
  vars: 6,
  consts: [["role", "alert", "aria-busy", "true", 1, "p-progress-spinner", 3, "ngStyle", "ngClass"], ["viewBox", "25 25 50 50", 1, "p-progress-spinner-svg"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 1, "p-progress-spinner-circle"]],
  template: function ProgressSpinner_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-duration", ctx.animationDuration);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
  styles: [".p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}@keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressSpinner, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-progressSpinner',
      template: `
        <div class="p-progress-spinner" [ngStyle]="style" [ngClass]="styleClass"  role="alert" aria-busy="true">
            <svg class="p-progress-spinner-svg" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">
                <circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10"/>
            </svg>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styleUrls: ['./progressspinner.css'],
      host: {
        'class': 'p-element'
      }
    }]
  }], null, {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    strokeWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fill: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class ProgressSpinnerModule {}

ProgressSpinnerModule.ɵfac = function ProgressSpinnerModule_Factory(t) {
  return new (t || ProgressSpinnerModule)();
};

ProgressSpinnerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ProgressSpinnerModule
});
ProgressSpinnerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressSpinnerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [ProgressSpinner],
      declarations: [ProgressSpinner]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=primeng-progressspinner.js.map

/***/ }),

/***/ 7225:
/*!***********************************************************!*\
  !*** ./src/app/pages/catalog/CCB/brush-hair.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrushHairComponent": () => (/* binding */ BrushHairComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/products.service */ 9531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_button_back_products_button_back_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button-back-products/button-back-products.component */ 4559);
/* harmony import */ var _components_image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/image-carousel/image-carousel.component */ 747);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_add_cart_input_add_cart_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/add-cart-input/add-cart-input.component */ 2762);







function BrushHairComponent_div_0_app_add_cart_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-add-cart-input", 12);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r2.product);
} }
function BrushHairComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-button-back-products");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-image-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BrushHairComponent_div_0_app_add_cart_input_4_Template, 1, 1, "app-add-cart-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Un claro ejemplo de un producto que te cuida a ti y tambi\u00E9n al planeta. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " El Cepillo de bamb\u00FA para el cabello es un sustituto lleno de ventajas, ya que es biodegradable, sus cerdas anchas y suaves cuidan tu cabello sin reventarlo, no genera friz, acondiciona estimula el crecimiento del cabello. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Una opci\u00F3n amigable con el medio ambiente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Medidas: 8cm x 25cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("arrayImgs", ctx_r0.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 4, ctx_r0.product.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 6, ctx_r0.product.price), "");
} }
function BrushHairComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class BrushHairComponent {
    constructor(productService) {
        this.productService = productService;
        this.images = [];
    }
    ngOnInit() {
        this.productService.getSingleProduct('CCB').subscribe(product => {
            this.images = product.allImages;
            this.product = product;
        });
    }
}
BrushHairComponent.ɵfac = function BrushHairComponent_Factory(t) { return new (t || BrushHairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService)); };
BrushHairComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BrushHairComponent, selectors: [["app-brush-hair"]], decls: 2, vars: 2, consts: [["class", "container-individual animate__animated animate__fadeIn", 4, "ngIf"], ["class", "center-spinner animate__animated animate__fadeOut", 4, "ngIf"], [1, "container-individual", "animate__animated", "animate__fadeIn"], [1, "product-container"], [3, "arrayImgs"], [3, "product", 4, "ngIf"], ["routerLink", "/product/CMT", 1, "previous-page"], [1, "pi", "pi-chevron-left"], [1, "description-container"], ["routerLink", "/product/CDD", 1, "next-page"], [1, "pi", "pi-chevron-right"], [1, "description-subtitle"], [3, "product"], [1, "center-spinner", "animate__animated", "animate__fadeOut"], ["src", "assets/images/preloader-image.png", 1, "preloader"]], template: function BrushHairComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BrushHairComponent_div_0_Template, 26, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BrushHairComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_button_back_products_button_back_products_component__WEBPACK_IMPORTED_MODULE_1__.ButtonBackProductsComponent, _components_image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_2__.ImageCarouselComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _components_add_cart_input_add_cart_input_component__WEBPACK_IMPORTED_MODULE_3__.AddCartInputComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: ["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&display=swap');\n\n\n\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none; \n  text-decoration: underline; \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; \n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n}\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n    \n    --bg-first: transparent;\n    --bg-first-linear: transparent;\n    --bg-nav: #F4E5D7;\n    --bg-second: #E9E5E1;\n    --color-text-primary: #896F5A;\n    --color-text-secondary: whitesmoke;\n    --color-button: #91785A;\n    --color-button-hover: #bbb6b1;\n    --color-ribbon-bg: rgba(219, 179, 105, 0.6);\n    --page-height: calc(100vh - 12vh);\n\n    \n    --font-titles: 'Libre Baskerville', Verdana, Serif;\n    --font-size-lg: 1.5rem; \n    --font-size-md: 1rem; \n    --font-size-sm: 0.8rem; \n\n\t--logo-size: 5rem;\n    \n}\n\n@media screen and (min-width: 1024px) {\n\t\t[_ngcontent-%COMP%]:root {\n\t\t\t\n\t\t\t--font-size-lg: 2rem;\n\t\t\t--font-size-md: 1.5rem; \n\t\t\t--font-size-sm: 1.1rem; \n\n\t\t\t--logo-size: 6rem;\n\t\t}\n\t}\nbody[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin: 0px;\n    height: max-content;\n    box-sizing: border-box;\n\tbackground: linear-gradient(-45deg, #fae5d3ef,#fef9e7ef, rgb(255, 252, 252),white);\n\toverflow-x: hidden;\n\tbackground-size: 400% 400%;\n\tanimation: gradient 8s ease infinite;\n}\n\n.center-spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 45vh;\n    left: 45vw;\n}\n.preloader[_ngcontent-%COMP%]{\n    width: 100px; height: 100px;\n\tbackground-size: contain;\n\tanimation: spin 2s linear infinite;\n}\n@keyframes spin {\n\tto { transform: rotate(360deg) }\n}\n.animate__fadeIn[_ngcontent-%COMP%] {\n\tanimation-delay: .3s;\n}\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n.container-individual[_ngcontent-%COMP%] {\r\n    background: var(--bg-first);\r\n    background: var(--bg-first-linear);\r\n    height: var(--page-height);\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\n.product-container[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\n.description-container[_ngcontent-%COMP%] {\r\n    align-content: center;\r\n    background-color: #F1DFC6;\r\n    color: var(--color-text-primary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    text-align: center;\r\n    font-size: var(--font-size-md);\r\n}\n.description-container[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 50vw;\r\n    background-color: #F1DFC6;\r\n    height: 12vh;\r\n    top: 0px;\r\n}\n.description-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: var(--font-size-lg);\r\n    font-family: var(--font-titles);\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\r\n}\n.description-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background-color: black;\r\n    width:  60%;\r\n    height: 2px;\r\n}\n.description-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\n.description-cup[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n}\n.description-cup[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n}\n.talla-desc[_ngcontent-%COMP%], .talla-desc[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .talla-desc[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    align-self: flex-start;\r\n    text-align: start;\r\n}\n.scroll-down[_ngcontent-%COMP%] {\r\n    color: var(--color-button);\r\n    position: absolute;\r\n    bottom: 2rem;\r\n    right: 2rem;\r\n}\n.scroll-down[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\n.next-page[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 5px;\r\n    cursor: pointer;\r\n    transition-duration: 0.2s;\r\n}\n.next-page[_ngcontent-%COMP%]:hover {transform: translateX(2px);}\n.previous-page[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 5px;\r\n    color: var(--color-button);\r\n    transition-duration: .2s;\r\n}\n.previous-page[_ngcontent-%COMP%]:hover {transform: translateX(-2px);}\n@media only screen and (max-width: 760px) {\r\n    .container-individual[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .product-container[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .description-container[_ngcontent-%COMP%]::before {\r\n        display: none;\r\n    }\r\n}"] });


/***/ }),

/***/ 4065:
/*!***********************************************************!*\
  !*** ./src/app/pages/catalog/CDD/toothbrush.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToothbrushComponent": () => (/* binding */ ToothbrushComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/products.service */ 9531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_button_back_products_button_back_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button-back-products/button-back-products.component */ 4559);
/* harmony import */ var _components_image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/image-carousel/image-carousel.component */ 747);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_add_cart_input_add_cart_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/add-cart-input/add-cart-input.component */ 2762);







function ToothbrushComponent_div_0_app_add_cart_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-add-cart-input", 12);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r2.product);
} }
function ToothbrushComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-button-back-products");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-image-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ToothbrushComponent_div_0_app_add_cart_input_4_Template, 1, 1, "app-add-cart-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " \u00BFSab\u00EDas que todos los cepillos de dientes que has usado en tu vida a\u00FAn existe? Te presentamos una alternativa sostenible y amigable con el medio ambiente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Mango 100% de bamb\u00FA que lo hace biodegradable");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Cerdas de nylon 6, reciclables, libres de BPA que te proporcionar\u00E1n una buena limpieza bucal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " No sentir\u00E1s el cambio debido a que el bamb\u00FA no produce ning\u00FAn sabor y es naturalmente es antibacteriano por eso resiste la humedad haci\u00E9ndolo una alternativa ideal para dejar el cepillo de pl\u00E1stico. Se recomienda cambiarlo cada 3 meses. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Visita nuestro instagram @ecogaia.co para saber como reutilizarlo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " \u00A1Contamos con registro Sanitario Invima! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " NO: INVIMA 2021DM-0023057 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("arrayImgs", ctx_r0.catalog);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 4, ctx_r0.product.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 6, ctx_r0.product.price), "");
} }
function ToothbrushComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ToothbrushComponent {
    constructor(productService) {
        this.productService = productService;
        this.catalog = [];
    }
    ngOnInit() {
        this.productService.getSingleProduct('CDD').subscribe(product => {
            this.catalog = product.allImages;
            this.product = product;
        });
    }
}
ToothbrushComponent.ɵfac = function ToothbrushComponent_Factory(t) { return new (t || ToothbrushComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService)); };
ToothbrushComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ToothbrushComponent, selectors: [["app-individual"]], decls: 2, vars: 2, consts: [["class", "container-individual animate__animated animate__fadeIn", 4, "ngIf"], ["class", "center-spinner animate__animated animate__fadeOut", 4, "ngIf"], [1, "container-individual", "animate__animated", "animate__fadeIn"], [1, "product-container"], [3, "arrayImgs"], [3, "product", 4, "ngIf"], ["routerLink", "/product/CCB", 1, "previous-page"], [1, "pi", "pi-chevron-left"], [1, "description-container"], ["routerLink", "/product/PPG", 1, "next-page"], [1, "pi", "pi-chevron-right"], [1, "description-subtitle"], [3, "product"], [1, "center-spinner", "animate__animated", "animate__fadeOut"], ["src", "assets/images/preloader-image.png", 1, "preloader"]], template: function ToothbrushComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ToothbrushComponent_div_0_Template, 35, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ToothbrushComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product && ctx.catalog.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_button_back_products_button_back_products_component__WEBPACK_IMPORTED_MODULE_1__.ButtonBackProductsComponent, _components_image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_2__.ImageCarouselComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _components_add_cart_input_add_cart_input_component__WEBPACK_IMPORTED_MODULE_3__.AddCartInputComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: ["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&display=swap');\n\n\n\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none; \n  text-decoration: underline; \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; \n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n}\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n    \n    --bg-first: transparent;\n    --bg-first-linear: transparent;\n    --bg-nav: #F4E5D7;\n    --bg-second: #E9E5E1;\n    --color-text-primary: #896F5A;\n    --color-text-secondary: whitesmoke;\n    --color-button: #91785A;\n    --color-button-hover: #bbb6b1;\n    --color-ribbon-bg: rgba(219, 179, 105, 0.6);\n    --page-height: calc(100vh - 12vh);\n\n    \n    --font-titles: 'Libre Baskerville', Verdana, Serif;\n    --font-size-lg: 1.5rem; \n    --font-size-md: 1rem; \n    --font-size-sm: 0.8rem; \n\n\t--logo-size: 5rem;\n    \n}\n\n@media screen and (min-width: 1024px) {\n\t\t[_ngcontent-%COMP%]:root {\n\t\t\t\n\t\t\t--font-size-lg: 2rem;\n\t\t\t--font-size-md: 1.5rem; \n\t\t\t--font-size-sm: 1.1rem; \n\n\t\t\t--logo-size: 6rem;\n\t\t}\n\t}\nbody[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin: 0px;\n    height: max-content;\n    box-sizing: border-box;\n\tbackground: linear-gradient(-45deg, #fae5d3ef,#fef9e7ef, rgb(255, 252, 252),white);\n\toverflow-x: hidden;\n\tbackground-size: 400% 400%;\n\tanimation: gradient 8s ease infinite;\n}\n\n.center-spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 45vh;\n    left: 45vw;\n}\n.preloader[_ngcontent-%COMP%]{\n    width: 100px; height: 100px;\n\tbackground-size: contain;\n\tanimation: spin 2s linear infinite;\n}\n@keyframes spin {\n\tto { transform: rotate(360deg) }\n}\n.animate__fadeIn[_ngcontent-%COMP%] {\n\tanimation-delay: .3s;\n}\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n.container-individual[_ngcontent-%COMP%] {\r\n    background: var(--bg-first);\r\n    background: var(--bg-first-linear);\r\n    height: var(--page-height);\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\n.product-container[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\n.description-container[_ngcontent-%COMP%] {\r\n    align-content: center;\r\n    background-color: #F1DFC6;\r\n    color: var(--color-text-primary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    text-align: center;\r\n    font-size: var(--font-size-md);\r\n}\n.description-container[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 50vw;\r\n    background-color: #F1DFC6;\r\n    height: 12vh;\r\n    top: 0px;\r\n}\n.description-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: var(--font-size-lg);\r\n    font-family: var(--font-titles);\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\r\n}\n.description-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background-color: black;\r\n    width:  60%;\r\n    height: 2px;\r\n}\n.description-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\n.description-cup[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n}\n.description-cup[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n}\n.talla-desc[_ngcontent-%COMP%], .talla-desc[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .talla-desc[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    align-self: flex-start;\r\n    text-align: start;\r\n}\n.scroll-down[_ngcontent-%COMP%] {\r\n    color: var(--color-button);\r\n    position: absolute;\r\n    bottom: 2rem;\r\n    right: 2rem;\r\n}\n.scroll-down[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\n.next-page[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 5px;\r\n    cursor: pointer;\r\n    transition-duration: 0.2s;\r\n}\n.next-page[_ngcontent-%COMP%]:hover {transform: translateX(2px);}\n.previous-page[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 5px;\r\n    color: var(--color-button);\r\n    transition-duration: .2s;\r\n}\n.previous-page[_ngcontent-%COMP%]:hover {transform: translateX(-2px);}\n@media only screen and (max-width: 760px) {\r\n    .container-individual[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .product-container[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .description-container[_ngcontent-%COMP%]::before {\r\n        display: none;\r\n    }\r\n}"] });


/***/ }),

/***/ 860:
/*!****************************************************!*\
  !*** ./src/app/pages/catalog/CMT/cup.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CupComponent": () => (/* binding */ CupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/products.service */ 9531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_button_back_products_button_back_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button-back-products/button-back-products.component */ 4559);
/* harmony import */ var _components_image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/image-carousel/image-carousel.component */ 747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_add_cart_input_add_cart_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/add-cart-input/add-cart-input.component */ 2762);








function CupComponent_div_0_app_add_cart_input_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-add-cart-input", 15);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r2.product);
} }
function CupComponent_div_0_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Desliza hacia abajo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-button-back-products");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-image-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CupComponent_div_0_app_add_cart_input_5_Template, 1, 1, "app-add-cart-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function CupComponent_div_0_Template_section_scroll_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.scrolldown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Ama tus d\u00EDas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Con la copa menstrual puedes practicar deporte, salir, dormir, puedes ir al ba\u00F1o con ella sin necesidad de quit\u00E1rtela, puedes llevarla puesta hasta doce horas seguidas, realizando todas las actividades que regularmente haces. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Es reutilizable por muchos ciclos ya que tiene una vida \u00FAtil de hasta 10 a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " 100% Hipoalerg\u00E9nica y bio-compatible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " No absorbe, por ende no reseca, no deja fibras y no genera cambios en el pH. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Protecci\u00F3n por hasta 12 horas seguidas (var\u00EDa seg\u00FAn la abundancia de flujo de cada quien) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Fabricada en silicona grado m\u00E9dico Clase VI de la m\u00E1s alta calidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Libre de l\u00E1tex, pl\u00E1stico, BPA y qu\u00EDmicos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Certificados: FDA Registered, ISO 13485, ISO 9001, RoHS (puedes consultar los certificados aqu\u00ED). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, CupComponent_div_0_div_38_Template, 5, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "TALLA 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Ideal para quienes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "No han tenido partos vaginales");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Son menores de 30 a\u00F1os");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Su estatura es max. 1.65m");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Su talla de pantal\u00F3n es max. 8");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Han usado tamp\u00F3n mini o regular");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "TALLA 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Ideal para quienes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Ya han tenido partos vaginales");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Son mayores de 30 a\u00F1os (as\u00ED no hayan tenido hijos)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Su estatura es superior a 1.65m");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Su talla de pantal\u00F3n superior a 8");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Han usado tamp\u00F3n s\u00FAper");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Incluye: Copa menstrual, bolsa en tela y manual de uso.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " Fabricada por: Casco Bay Molding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, " Visita nuestro instagram para darte tips sobre c\u00F3mo pon\u00E9rtela y c\u00F3mo limpiarla y esterilizarla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("arrayImgs", ctx_r0.catalog);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 5, ctx_r0.product.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 7, ctx_r0.product.price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.scrollIcon);
} }
function CupComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class CupComponent {
    constructor(productService) {
        this.productService = productService;
        this.scrollIcon = true;
        this.catalog = [];
        this.selected = {
            code: 'CMT',
            cant: 1,
            talla: ''
        };
    }
    ngOnInit() {
        this.productService.getSingleProduct('CMT').subscribe(product => {
            this.catalog = product.allImages;
            this.product = product;
        });
    }
    scrolldown() {
        this.scrollIcon = false;
    }
}
CupComponent.ɵfac = function CupComponent_Factory(t) { return new (t || CupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService)); };
CupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CupComponent, selectors: [["app-cup"]], decls: 2, vars: 2, consts: [["class", "container-individual animate__animated animate__fadeIn", 4, "ngIf"], ["class", "center-spinner animate__animated animate__fadeOut", 4, "ngIf"], [1, "container-individual", "animate__animated", "animate__fadeIn"], [1, "product-container"], [3, "arrayImgs"], [1, "product-properties", "form-group"], [3, "product", 4, "ngIf"], ["routerLink", "/product/PPG", 1, "previous-page"], [1, "pi", "pi-chevron-left"], [1, "description-container", "description-cup", 3, "scroll"], ["routerLink", "/product/CCB", 1, "next-page"], [1, "pi", "pi-chevron-right"], [1, "description-subtitle"], ["class", "scroll-down", 4, "ngIf"], [1, "talla-desc"], [3, "product"], [1, "scroll-down"], [1, "uil", "uil-mouse-alt"], [1, "scroll-name"], [1, "uil", "uil-arrow-down"], [1, "center-spinner", "animate__animated", "animate__fadeOut"], ["src", "assets/images/preloader-image.png", 1, "preloader"]], template: function CupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CupComponent_div_0_Template, 78, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CupComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_button_back_products_button_back_products_component__WEBPACK_IMPORTED_MODULE_1__.ButtonBackProductsComponent, _components_image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_2__.ImageCarouselComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _components_add_cart_input_add_cart_input_component__WEBPACK_IMPORTED_MODULE_3__.AddCartInputComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: ["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&display=swap');\n\n\n\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none; \n  text-decoration: underline; \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; \n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n}\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n    \n    --bg-first: transparent;\n    --bg-first-linear: transparent;\n    --bg-nav: #F4E5D7;\n    --bg-second: #E9E5E1;\n    --color-text-primary: #896F5A;\n    --color-text-secondary: whitesmoke;\n    --color-button: #91785A;\n    --color-button-hover: #bbb6b1;\n    --color-ribbon-bg: rgba(219, 179, 105, 0.6);\n    --page-height: calc(100vh - 12vh);\n\n    \n    --font-titles: 'Libre Baskerville', Verdana, Serif;\n    --font-size-lg: 1.5rem; \n    --font-size-md: 1rem; \n    --font-size-sm: 0.8rem; \n\n\t--logo-size: 5rem;\n    \n}\n\n@media screen and (min-width: 1024px) {\n\t\t[_ngcontent-%COMP%]:root {\n\t\t\t\n\t\t\t--font-size-lg: 2rem;\n\t\t\t--font-size-md: 1.5rem; \n\t\t\t--font-size-sm: 1.1rem; \n\n\t\t\t--logo-size: 6rem;\n\t\t}\n\t}\nbody[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin: 0px;\n    height: max-content;\n    box-sizing: border-box;\n\tbackground: linear-gradient(-45deg, #fae5d3ef,#fef9e7ef, rgb(255, 252, 252),white);\n\toverflow-x: hidden;\n\tbackground-size: 400% 400%;\n\tanimation: gradient 8s ease infinite;\n}\n\n.center-spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 45vh;\n    left: 45vw;\n}\n.preloader[_ngcontent-%COMP%]{\n    width: 100px; height: 100px;\n\tbackground-size: contain;\n\tanimation: spin 2s linear infinite;\n}\n@keyframes spin {\n\tto { transform: rotate(360deg) }\n}\n.animate__fadeIn[_ngcontent-%COMP%] {\n\tanimation-delay: .3s;\n}\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n.container-individual[_ngcontent-%COMP%] {\r\n    background: var(--bg-first);\r\n    background: var(--bg-first-linear);\r\n    height: var(--page-height);\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\n.product-container[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\n.description-container[_ngcontent-%COMP%] {\r\n    align-content: center;\r\n    background-color: #F1DFC6;\r\n    color: var(--color-text-primary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    text-align: center;\r\n    font-size: var(--font-size-md);\r\n}\n.description-container[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 50vw;\r\n    background-color: #F1DFC6;\r\n    height: 12vh;\r\n    top: 0px;\r\n}\n.description-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: var(--font-size-lg);\r\n    font-family: var(--font-titles);\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\r\n}\n.description-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background-color: black;\r\n    width:  60%;\r\n    height: 2px;\r\n}\n.description-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\n.description-cup[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n}\n.description-cup[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n}\n.talla-desc[_ngcontent-%COMP%], .talla-desc[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .talla-desc[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    align-self: flex-start;\r\n    text-align: start;\r\n}\n.scroll-down[_ngcontent-%COMP%] {\r\n    color: var(--color-button);\r\n    position: absolute;\r\n    bottom: 2rem;\r\n    right: 2rem;\r\n}\n.scroll-down[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\n.next-page[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 5px;\r\n    cursor: pointer;\r\n    transition-duration: 0.2s;\r\n}\n.next-page[_ngcontent-%COMP%]:hover {transform: translateX(2px);}\n.previous-page[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 5px;\r\n    color: var(--color-button);\r\n    transition-duration: .2s;\r\n}\n.previous-page[_ngcontent-%COMP%]:hover {transform: translateX(-2px);}\n@media only screen and (max-width: 760px) {\r\n    .container-individual[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .product-container[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .description-container[_ngcontent-%COMP%]::before {\r\n        display: none;\r\n    }\r\n}"] });


/***/ }),

/***/ 5331:
/*!******************************************************!*\
  !*** ./src/app/pages/catalog/PPG/straw.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrawComponent": () => (/* binding */ StrawComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/products.service */ 9531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_button_back_products_button_back_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button-back-products/button-back-products.component */ 4559);
/* harmony import */ var _components_image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/image-carousel/image-carousel.component */ 747);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_add_cart_input_add_cart_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/add-cart-input/add-cart-input.component */ 2762);







function StrawComponent_div_0_app_add_cart_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-add-cart-input", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r2.product);
} }
function StrawComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-button-back-products");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-image-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, StrawComponent_div_0_app_add_cart_input_4_Template, 1, 1, "app-add-cart-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "PITILLO PLEGABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "$25.000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Es un pitillo de silicona recubierto de acero inoxidable que se dobla e incluye su propio estuche y limpiador. Perfecto para decirle no al pitillo de pl\u00E1stico, no altera el sabor y es cool! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Lo puedes llevar en el bolsillo, en tu bolso o como llavero. Es pr\u00E1ctico y muy \u00FAtil. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Visita nuestro instagram y aprende c\u00F3mo guardarlo en su estuche y c\u00F3mo limpiarlo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Incluye: Pitillo, limpiador y estuche. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Pitillo fabricado en silicona y acero inoxidable. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Medidas: El estuche mide 7,5 cm de alto x 3 cm de ancho. El pitillo extendido mide 22,5 cm. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("arrayImgs", ctx_r0.catalog);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.product);
} }
function StrawComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class StrawComponent {
    constructor(productService) {
        this.productService = productService;
        this.catalog = [];
        this.selected = {
            code: 'PPG',
            cant: 1,
            color: ''
        };
    }
    ngOnInit() {
        this.productService.getSingleProduct('PPG').subscribe(product => {
            this.catalog = product.allImages;
            this.product = product;
        });
    }
}
StrawComponent.ɵfac = function StrawComponent_Factory(t) { return new (t || StrawComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService)); };
StrawComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StrawComponent, selectors: [["app-pitillo"]], decls: 2, vars: 2, consts: [["class", "container-individual animate__animated animate__fadeIn", 4, "ngIf"], ["class", "center-spinner animate__animated animate__fadeOut", 4, "ngIf"], [1, "container-individual", "animate__animated", "animate__fadeIn"], [1, "product-container"], [3, "arrayImgs"], [3, "product", 4, "ngIf"], ["routerLink", "/product/CDD", 1, "previous-page"], [1, "pi", "pi-chevron-left"], [1, "description-container"], ["routerLink", "/product/CMT", 1, "next-page"], [1, "pi", "pi-chevron-right"], [3, "product"], [1, "center-spinner", "animate__animated", "animate__fadeOut"], ["src", "assets/images/preloader-image.png", 1, "preloader"]], template: function StrawComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, StrawComponent_div_0_Template, 28, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StrawComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_button_back_products_button_back_products_component__WEBPACK_IMPORTED_MODULE_1__.ButtonBackProductsComponent, _components_image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_2__.ImageCarouselComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _components_add_cart_input_add_cart_input_component__WEBPACK_IMPORTED_MODULE_3__.AddCartInputComponent], styles: ["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&display=swap');\n\n\n\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none; \n  text-decoration: underline; \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; \n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n}\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n    \n    --bg-first: transparent;\n    --bg-first-linear: transparent;\n    --bg-nav: #F4E5D7;\n    --bg-second: #E9E5E1;\n    --color-text-primary: #896F5A;\n    --color-text-secondary: whitesmoke;\n    --color-button: #91785A;\n    --color-button-hover: #bbb6b1;\n    --color-ribbon-bg: rgba(219, 179, 105, 0.6);\n    --page-height: calc(100vh - 12vh);\n\n    \n    --font-titles: 'Libre Baskerville', Verdana, Serif;\n    --font-size-lg: 1.5rem; \n    --font-size-md: 1rem; \n    --font-size-sm: 0.8rem; \n\n\t--logo-size: 5rem;\n    \n}\n\n@media screen and (min-width: 1024px) {\n\t\t[_ngcontent-%COMP%]:root {\n\t\t\t\n\t\t\t--font-size-lg: 2rem;\n\t\t\t--font-size-md: 1.5rem; \n\t\t\t--font-size-sm: 1.1rem; \n\n\t\t\t--logo-size: 6rem;\n\t\t}\n\t}\nbody[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin: 0px;\n    height: max-content;\n    box-sizing: border-box;\n\tbackground: linear-gradient(-45deg, #fae5d3ef,#fef9e7ef, rgb(255, 252, 252),white);\n\toverflow-x: hidden;\n\tbackground-size: 400% 400%;\n\tanimation: gradient 8s ease infinite;\n}\n\n.center-spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 45vh;\n    left: 45vw;\n}\n.preloader[_ngcontent-%COMP%]{\n    width: 100px; height: 100px;\n\tbackground-size: contain;\n\tanimation: spin 2s linear infinite;\n}\n@keyframes spin {\n\tto { transform: rotate(360deg) }\n}\n.animate__fadeIn[_ngcontent-%COMP%] {\n\tanimation-delay: .3s;\n}\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n.container-individual[_ngcontent-%COMP%] {\r\n    background: var(--bg-first);\r\n    background: var(--bg-first-linear);\r\n    height: var(--page-height);\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\n.product-container[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\n.description-container[_ngcontent-%COMP%] {\r\n    align-content: center;\r\n    background-color: #F1DFC6;\r\n    color: var(--color-text-primary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    text-align: center;\r\n    font-size: var(--font-size-md);\r\n}\n.description-container[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 50vw;\r\n    background-color: #F1DFC6;\r\n    height: 12vh;\r\n    top: 0px;\r\n}\n.description-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: var(--font-size-lg);\r\n    font-family: var(--font-titles);\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\r\n}\n.description-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background-color: black;\r\n    width:  60%;\r\n    height: 2px;\r\n}\n.description-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\n.description-cup[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n}\n.description-cup[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n}\n.talla-desc[_ngcontent-%COMP%], .talla-desc[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], .talla-desc[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    align-self: flex-start;\r\n    text-align: start;\r\n}\n.scroll-down[_ngcontent-%COMP%] {\r\n    color: var(--color-button);\r\n    position: absolute;\r\n    bottom: 2rem;\r\n    right: 2rem;\r\n}\n.scroll-down[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\n.next-page[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 5px;\r\n    cursor: pointer;\r\n    transition-duration: 0.2s;\r\n}\n.next-page[_ngcontent-%COMP%]:hover {transform: translateX(2px);}\n.previous-page[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 5px;\r\n    color: var(--color-button);\r\n    transition-duration: .2s;\r\n}\n.previous-page[_ngcontent-%COMP%]:hover {transform: translateX(-2px);}\n@media only screen and (max-width: 760px) {\r\n    .container-individual[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .product-container[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .description-container[_ngcontent-%COMP%]::before {\r\n        display: none;\r\n    }\r\n}"] });


/***/ }),

/***/ 1427:
/*!*********************************************************!*\
  !*** ./src/app/pages/catalog/catalog-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogRoutingModule": () => (/* binding */ CatalogRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _CDD_toothbrush_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CDD/toothbrush.component */ 4065);
/* harmony import */ var _CCB_brush_hair_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CCB/brush-hair.component */ 7225);
/* harmony import */ var _CMT_cup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CMT/cup.component */ 860);
/* harmony import */ var _PPG_straw_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PPG/straw.component */ 5331);
/* harmony import */ var _combo_combo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combo/combo.component */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);









const routes = [
    { path: 'CCB', component: _CCB_brush_hair_component__WEBPACK_IMPORTED_MODULE_1__.BrushHairComponent },
    { path: 'CDD', component: _CDD_toothbrush_component__WEBPACK_IMPORTED_MODULE_0__.ToothbrushComponent },
    { path: 'CMT', component: _CMT_cup_component__WEBPACK_IMPORTED_MODULE_2__.CupComponent },
    { path: 'PPG', component: _PPG_straw_component__WEBPACK_IMPORTED_MODULE_3__.StrawComponent },
    { path: 'combo', component: _combo_combo_component__WEBPACK_IMPORTED_MODULE_4__.ComboComponent },
];
class CatalogRoutingModule {
}
CatalogRoutingModule.ɵfac = function CatalogRoutingModule_Factory(t) { return new (t || CatalogRoutingModule)(); };
CatalogRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CatalogRoutingModule });
CatalogRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CatalogRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 7120:
/*!*************************************************!*\
  !*** ./src/app/pages/catalog/catalog.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogModule": () => (/* binding */ CatalogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/carousel */ 566);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressspinner */ 3621);
/* harmony import */ var _catalog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog-routing.module */ 1427);
/* harmony import */ var _components_add_cart_input_add_cart_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/add-cart-input/add-cart-input.component */ 2762);
/* harmony import */ var _components_button_back_products_button_back_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/button-back-products/button-back-products.component */ 4559);
/* harmony import */ var _components_image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/image-carousel/image-carousel.component */ 747);
/* harmony import */ var _CCB_brush_hair_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CCB/brush-hair.component */ 7225);
/* harmony import */ var _combo_combo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combo/combo.component */ 3913);
/* harmony import */ var _CMT_cup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CMT/cup.component */ 860);
/* harmony import */ var _PPG_straw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PPG/straw.component */ 5331);
/* harmony import */ var _CDD_toothbrush_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CDD/toothbrush.component */ 4065);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 2404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);


// Prime NG



// Components



// Pages







class CatalogModule {
}
CatalogModule.ɵfac = function CatalogModule_Factory(t) { return new (t || CatalogModule)(); };
CatalogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: CatalogModule });
CatalogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _catalog_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            primeng_carousel__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.DialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__.ProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CatalogModule, { declarations: [
        // pages
        _CCB_brush_hair_component__WEBPACK_IMPORTED_MODULE_4__.BrushHairComponent,
        _combo_combo_component__WEBPACK_IMPORTED_MODULE_5__.ComboComponent,
        _CMT_cup_component__WEBPACK_IMPORTED_MODULE_6__.CupComponent,
        _PPG_straw_component__WEBPACK_IMPORTED_MODULE_7__.StrawComponent,
        _CDD_toothbrush_component__WEBPACK_IMPORTED_MODULE_8__.ToothbrushComponent,
        // components
        _components_button_back_products_button_back_products_component__WEBPACK_IMPORTED_MODULE_2__.ButtonBackProductsComponent,
        _components_image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_3__.ImageCarouselComponent,
        _components_add_cart_input_add_cart_input_component__WEBPACK_IMPORTED_MODULE_1__.AddCartInputComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _catalog_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.DialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__.ProgressSpinnerModule] }); })();


/***/ }),

/***/ 747:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/components/image-carousel/image-carousel.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCarouselComponent": () => (/* binding */ ImageCarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/carousel */ 566);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 3013);



function ImageCarouselComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImageCarouselComponent {
    constructor() {
        this.catalog = [];
    }
    ngOnInit() {
    }
}
ImageCarouselComponent.ɵfac = function ImageCarouselComponent_Factory(t) { return new (t || ImageCarouselComponent)(); };
ImageCarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageCarouselComponent, selectors: [["app-image-carousel"]], inputs: { catalog: ["arrayImgs", "catalog"] }, decls: 2, vars: 4, consts: [["orientation", "vertical", "verticalViewPortHeight", "350px", 3, "value", "numScroll", "showIndicators", "circular"], ["pTemplate", "img"], ["alt", "cepillo de cabello de bambu", 1, "image", 3, "src"]], template: function ImageCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageCarouselComponent_ng_template_1_Template, 2, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.catalog)("numScroll", 1)("showIndicators", false)("circular", true);
    } }, directives: [primeng_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate], styles: [".image[_ngcontent-%COMP%] {\n    height: 20rem;\n    width: 20rem;\n    border-radius: 50%;\n    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;\n}"] });


/***/ })

}]);