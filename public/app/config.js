"use strict";

angular
    .module("App")
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/compone", {
                template: "<comp-one></comp-one>"
            })
            .when("/comptwo", {
                template: "<comp-two></comp-two>"
            })
            .otherwise("/compone")
    }])