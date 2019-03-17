"use strict";




const compThree = {
    template: `
    <section class="page__three">
        <section class="rest__page leftAniInfo" ng-repeat="rest in $ctrl.results | limitTo: 1 track by $index" ng-style="{'background-color': '#ec757b'} ">
            <div class="rest__name">{{rest.restaurant.name}}</div>
            <div class="cuisine__type"> Cuisine Types: {{rest.restaurant.cuisines}}</div>
            <div class="rest__price" ng-if="rest.restaurant.price_range == 1">Price: $</div>
            <div class="rest__price" ng-if="rest.restaurant.price_range == 2">Price: $$</div>
            <div class="rest__price" ng-if="rest.restaurant.price_range == 3">Price: $$$</div>
            <div class="rest__price" ng-if="rest.restaurant.price_range == 4">Price: $$$$</div>
            <div class="rest__price" ng-if="rest.restaurant.price_range == 5">Price: $$$$$</div>
            <div class="rest__price" ng-show="rest.restaurant.has_online_delivery">Delivery: Yes</div>
            <div class="rest__price" ng-show="!rest.restaurant.has_online_delivery">Delivery: No</div>
            <section class="navigation">
                <a class="btn__delete" ng-click="$ctrl.nextRest($index)">Next Option</a>
                <a class="btn__delete" href="{{rest.restaurant.menu_url}}">Check us out!</a>
            </section
        </section>

        <iframe width="600" height="450" frameborder="0" style="border:0"
        ng-src="{{$ctrl.iframesrc}}" allowfullscreen></iframe>

    </section>
    `,
    
    controller: ["FoodService", "$location", "$sce", function (FoodService, $location, $sce) {
        const vm = this;
        vm.serviceRestList = FoodService.getRestList()
        console.log("---", vm.serviceRestList);
        vm.iframesrc = $sce.trustAsResourceUrl(  
        `https://www.google.com/maps/embed/v1/place?q=${vm.serviceRestList.data.restaurants[0].restaurant.location.address}&key=AIzaSyBnGA89G8fGa7UikNT5RoQE5FvfSjCx2Vo`)
        
        vm.results = vm.serviceRestList.data.restaurants
        // console.log(vm.results);
        // console.log(vm.serviceRestList.data.restaurants[0].restaurant.name, "this is rest list")
        vm.nextRest = (index) => {
            vm.results.splice(index, 1);
            if (vm.results == 0) {
                alert("You're too indecisive! Please restart your search")
                $location.path("/compone")

            }
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
                
                
                
                // (vm.results[i].restaurant.has_online_delivery) {
                //     total = "yes"
                // } else {
                //     total = "no"
                // }
                console.log(total)
                // console.log(vm.results, "this is 3 rests from loop");
                // for (let j = 0; j < vm.results.restaurant; j++) {
                //     console.log("Hello");
                //     total = vm.results[i].restaurant[j].has_online_delivery;
                //     console.log(total);
                //     if (total == 0) {
                //         return "no";
                //     } else if (total == 1) {
                //         return "yes"
                //     }
                // }
            
        }

    }]



}

angular
    .module("App")
    .component("compThree", compThree);