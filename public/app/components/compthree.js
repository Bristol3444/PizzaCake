"use strict";




const compThree = {
    templateUrl: `./components/compthree.html`
    ,
    
    controller: ["FoodService", "$location", "$sce", function (FoodService, $location, $sce) {
        const vm = this;
        
        vm.serviceRestList = FoodService.getRestList(); // Gets restaurant list from service
        
        vm.results = vm.serviceRestList.data.restaurants // navigates to restaurants array
        
        vm.iframesrc = 
        [
            $sce.trustAsResourceUrl(  
                `https://www.google.com/maps/embed/v1/place?q=${vm.serviceRestList.data.restaurants[0].restaurant.location.address}&key=AIzaSyBnGA89G8fGa7UikNT5RoQE5FvfSjCx2Vo`),
            $sce.trustAsResourceUrl(  
                `https://www.google.com/maps/embed/v1/place?q=${vm.serviceRestList.data.restaurants[1].restaurant.location.address}&key=AIzaSyBnGA89G8fGa7UikNT5RoQE5FvfSjCx2Vo`),
            $sce.trustAsResourceUrl(  
                `https://www.google.com/maps/embed/v1/place?q=${vm.serviceRestList.data.restaurants[2].restaurant.location.address}&key=AIzaSyBnGA89G8fGa7UikNT5RoQE5FvfSjCx2Vo`)
        ] // array of requests for map





        // vm.iframesrcPhoto = 
        //     $sce.trustAsResourceUrl(  
        //         `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${vm.serviceRestList.data.restaurants[0].restaurant.location.address}&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&key=AIzaSyBnGA89G8fGa7UikNT5RoQE5FvfSjCx2Vo`)
        
        // FoodService.getPhotos(vm.iframesrcPhoto)
        
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