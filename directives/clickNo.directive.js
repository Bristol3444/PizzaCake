"use strict";

function addclassc() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.on("click", function(){
                angular.element(document.getElementsByClassName("image2")).addClass('animationLeft')
                console.log(angular.element(document.getElementsByClassName("image2")))
            })
        }
    }
}


angular
    .module("App")
    .directive("addclassc", addclassc)