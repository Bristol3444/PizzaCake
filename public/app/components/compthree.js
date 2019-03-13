"use strict";




const compThree = {
    template: `
    <p>Hello</p>
    <section ng-repeat="rest in $ctrl.results track by $index">
        <p>{{rest.restaurant.name}}</p>
    </section>

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