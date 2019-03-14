"use strict";

function addclassb() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.on("swiperight", function(){
                $element.addClass("animationRight");
         
            })
        }
    }
}


angular
    .module("App")
    .directive("addclassb", addclassb)