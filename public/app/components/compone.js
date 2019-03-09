"use strict"
const compOne = {
    template: `
    <p>Hello<p>
    <input ng-model="location"> 
    <button ng-click="$ctrl.search(location)">search</button>
    <section ng-repeat="places in $ctrl.posts track by $index">
        <p>Author: {{places.restaurant.name}} </p>
    </section>
    `,
    controller: ["FoodService", function(FoodService) {
        const vm = this;
        vm.search = function(location) {
            console.log(location)
            FoodService.searchRest(location).then((data) => {
                vm.posts = data.data.restaurants
                console.log(vm.posts)
            })
        }
    }]
}



angular
    .module("App")
    .component("compOne", compOne)