"use strict";




const compThree = {
    template: `
    <section class="page__three">
        <div class="rest__info"">Based on your choices, here are the top 3 restaurants for you, in your area:</div>
        <section class="rest__page" ng-repeat="rest in $ctrl.results track by $index" ng-style="{'background-color': 'Yellow'} ">
            <p>{{rest.restaurant.name}}</p>
            <p> Cuisine Types: {{rest.restaurant.cuisines}}</p>
            <p>Price Range: {{rest.restaurant.price_range}}</p>
            <p><a href="{{rest.restaurant.menu_url}}">Menu Link</a></p>

            <p ng-show="rest.restaurant.has_online_delivery">Delivery: Yes</p>
            <p ng-show="!rest.restaurant.has_online_delivery">Delivery: No</p>
            <section class="navigation">
                <button class="btn__lock">Go To Restaurant</button>
                <button class="btn__delete" ng-click="$ctrl.nextRest($index)">Next Option</button>
            </section
        </section>
    </section>
    `,

    controller: ["FoodService", "$location", function (FoodService, $location) {
        const vm = this
        vm.serviceRestList = FoodService.getRestList()

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