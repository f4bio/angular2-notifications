System.register(["angular2/core", 'angular2/platform/browser', "node_modules/angular2-notifications"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, angular2_notifications_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (angular2_notifications_1_1) {
                angular2_notifications_1 = angular2_notifications_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_service) {
                    this._service = _service;
                    this.title = 'just a title';
                    this.content = 'just content';
                    this.type = 'success';
                    this.temp = [true, false];
                    this.options = {
                        timeOut: 5000,
                        lastOnBottom: true,
                        clickToClose: true,
                        maxLength: 0,
                        maxStack: 7,
                        showProgressBar: true,
                        pauseOnHover: true,
                        preventDuplicates: false,
                        preventLastDuplicates: "visible"
                    };
                    this.html = "<p>Test</p><p>A nother test</p>";
                }
                AppComponent.prototype.create = function () {
                    switch (this.type) {
                        case 'success':
                            this._service.success(this.title, this.content);
                            break;
                        case 'alert':
                            this._service.alert(this.title, this.content);
                            break;
                        case 'error':
                            this._service.error(this.title, this.content);
                            break;
                        case 'info':
                            this._service.info(this.title, this.content);
                            break;
                        case 'bare':
                            this._service.bare(this.title, this.content);
                            break;
                    }
                };
                AppComponent.prototype.withOverride = function () { this._service.create('pero', 'peric', 'success', { timeOut: 0, clickToClose: false, maxLength: 3, showProgressBar: true, theClass: 'overrideTest' }); };
                AppComponent.prototype.withHtml = function () { this._service.html(this.html, 'success'); };
                AppComponent.prototype.removeAll = function () { this._service.remove(); };
                AppComponent.prototype.onCreate = function (event) {
                    console.log(event);
                };
                AppComponent.prototype.onDestroy = function (event) {
                    console.log(event);
                };
                AppComponent.prototype.cleanSingle = function () {
                    console.log(this.deleteId);
                    this._service.remove(this.deleteId);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [angular2_notifications_1.SimpleNotificationsComponent],
                        providers: [angular2_notifications_1.NotificationsService],
                        template: "a\n        <form (ngSubmit)=\"create()\">\n            <div>\n                <label>Title</label>\n                <p>The title of the notification.</p>\n                <input type=\"text\" [(ngModel)]=\"title\">\n            </div>\n            <div>\n                <label>Content</label>\n                <p>The content of the notification.</p>\n                <input type=\"text\" [(ngModel)]=\"content\">\n            </div>\n            <div>\n                <label>Type</label>\n                <p>The type of the notification.</p>\n                <select [(ngModel)]=\"type\">\n                    <option value=\"success\" selected>Success</option>\n                    <option value=\"error\">Error</option>\n                    <option value=\"alert\">Alert</option>\n                    <option value=\"info\">Info</option>\n                    <option value=\"bare\">Bare</option>\n                </select>\n            </div>\n            <button type=\"submit\">Create Notification</button>\n        </form>\n        <button (click)=\"removeAll()\">Clean all notifications</button>\n        <simple-notifications [options]=\"options\" (onCreate)=\"onCreate($event)\" (onDestroy)=\"onDestroy($event)\"></simple-notifications>\n        <button (click)=\"withOverride()\">with override</button>\n        <button (click)=\"withHtml()\">with html</button>\n        \n        <form (ngSubmit)=\"cleanSingle()\">\n            <input type=\"text\" [(ngModel)]=\"deleteId\">\n            <button type=\"submit\">Delete</button>\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof angular2_notifications_1.NotificationsService !== 'undefined' && angular2_notifications_1.NotificationsService) === 'function' && _a) || Object])
                ], AppComponent);
                return AppComponent;
                var _a;
            }());
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent, []);
        }
    }
});
