"use strict";




const compThree = {
    template: `
    
    <section class="page__three">
    <p>Hello</p>
    <section class="rest__page" ng-repeat="rest in $ctrl.results track by $index" ng-style="{'background-color': 'Yellow'} ">
        <p>{{rest.restaurant.name}}</p>
    </section>
    </section>
    <button class="btn__lock">Go To Restaurant</button>
    <button class="btn__delete">Delete</button>
    `,

    controller: ["FoodService", function(FoodService){
        const vm = this
        vm.serviceRestList = FoodService.getRestList()

        vm.results = vm.serviceRestList.data.restaurants
        console.log(vm.serviceRestList.data.restaurants[0].restaurant.name, "this is rest list")
        


    }]



}

angular
.module("App")
.component("compThree", compThree);