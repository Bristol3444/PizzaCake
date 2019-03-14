"use strict";

function addclassd() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.on("click", function(){
                $element.addClass("animationRight");
         
            })
        }
    }
}


angular
    .module("App")
    .directive("addclassd", addclassd)