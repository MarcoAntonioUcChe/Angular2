"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var primeng_1 = require('primeng/primeng');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [primeng_1.MultiSelectModule,
                primeng_1.TooltipModule,
                primeng_1.RadioButtonModule,
                forms_1.ReactiveFormsModule,
                primeng_1.GrowlModule,
                platform_browser_1.BrowserModule,
                primeng_1.CalendarModule,
                primeng_1.InputTextModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                primeng_1.DataTableModule,
                primeng_1.ButtonModule,
                primeng_1.DialogModule,
                primeng_1.DropdownModule,
                primeng_1.PanelModule,
                primeng_1.InputMaskModule,
                primeng_1.PasswordModule,
                primeng_1.CheckboxModule,
                primeng_1.DataGridModule,
                primeng_1.MessagesModule,
                primeng_1.TreeModule,
                primeng_1.MenubarModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map