"use strict";




const compThree = {
    templateUrl: `./components/compthree.html`
    ,
    
    controller: ["FoodService", "$location", "$sce", function (FoodService, $location, $sce) {
        const vm = this;
        vm.serviceRestList = FoodService.getRestList()
        console.log("---", vm.serviceRestList);

        vm.iframesrc = 

        

        [
            $sce.trustAsResourceUrl(  
                `https://www.google.com/maps/embed/v1/place?q=${vm.serviceRestList.data.restaurants[0].restaurant.location.address}&key=AIzaSyBnGA89G8fGa7UikNT5RoQE5FvfSjCx2Vo`),
            $sce.trustAsResourceUrl(  
                `https://www.google.com/maps/embed/v1/place?q=${vm.serviceRestList.data.restaurants[1].restaurant.location.address}&key=AIzaSyBnGA89G8fGa7UikNT5RoQE5FvfSjCx2Vo`),
            $sce.trustAsResourceUrl(  
                `https://www.google.com/maps/embed/v1/place?q=${vm.serviceRestList.data.restaurants[2].restaurant.location.address}&key=AIzaSyBnGA89G8fGa7UikNT5RoQE5FvfSjCx2Vo`)
        ]





        vm.iframesrcPhoto = 
            $sce.trustAsResourceUrl(  
                `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${vm.serviceRestList.data.restaurants[0].restaurant.location.address}&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&key=AIzaSyBnGA89G8fGa7UikNT5RoQE5FvfSjCx2Vo`)
        
        FoodService.getPhotos(vm.iframesrcPhoto)
        
        vm.results = vm.serviceRestList.data.restaurants
        
        vm.mapCounter = 0

        vm.nextRest = (index) => {
            vm.results.splice(index, 1);
            if (vm.results == 0) {
                alert("You're too indecisive! Please restart your search")
                $location.path("/compone")

            }
            vm.mapCounter++
            console.log(vm.results);
        }
        vm.deliveryStatus = function(index) {
            console.log("deliveryFunction")
            console.log(index)
            let total = null;
            if (vm.results[index].restaurant.price_range == 2) {
                total = "no"
            } else {
                total = "yes"
            }
            
        }
        vm.c = false
        vm.flip = function() {
            vm.c = !vm.c
            console.log(vm.c)
        }

    }]



}

angular
    .module("App")
    .component("compThree", compThree);