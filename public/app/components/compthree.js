"use strict";




const compThree = {
    templateUrl: `./components/compthree.html`
    ,
    
    controller: ["FoodService", "$location", "$sce", function (FoodService, $location, $sce) {
        const vm = this;
        
        vm.serviceRestList = FoodService.getRestList(); // Gets restaurant list from service
        
        vm.results = vm.serviceRestList.data.restaurants // navigates to restaurants array
        
        vm.iframesrc = []

        for (let i = 0; i < vm.results.length; i++) {
            vm.iframesrc.push(angular.copy($sce.trustAsResourceUrl(  
                `https://www.google.com/maps/embed/v1/place?q=${vm.serviceRestList.data.restaurants[i].restaurant.location.address}&key=AIzaSyBnGA89G8fGa7UikNT5RoQE5FvfSjCx2Vo`)))
        }
        
        vm.modal = false
        vm.mapCounter = 0 //counter for which restaurant map you need
        vm.nextRest = (index) => {
            vm.results.splice(index, 1);
            vm.mapCounter++
            if (vm.results == 0) {
                vm.modal = true
            }
        }
        vm.restart = () => {
            $location.path("/compone");
        }


    }]



}

angular
    .module("App")
    .component("compThree", compThree);