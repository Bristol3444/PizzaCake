"use strict"
const compOne = {
    template: `
    <input ng-model="location" placeholder="please enter a city"> 
    <button ng-click="$ctrl.search(location)">search</button>
    <section ng-repeat="places in $ctrl.places track by $index">
        <p>Author: {{places.restaurant.name}} </p>
    </section>
    `,
    controller: ["FoodService", function(FoodService) {
        const vm = this;
        vm.search = function(location) {
            // console.log(location)
            FoodService.searchRest(location).then((data) => {
                console.log(data)
                vm.posts = data.data.location_suggestions[0].entity_id
                // console.log(vm.posts)
                FoodService.searchFood(vm.posts).then((moredata) => {
                    vm.places = moredata.data.restaurants
                    console.log(moredata.data, "moredata")
                })
                
            })

        }
    }]
}



angular
    .module("App")
    .component("compOne", compOne)