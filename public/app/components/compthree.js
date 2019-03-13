"use strict";




const compThree = {
    template: `
    <p>Hello</p>


    `,

    controller: ["FoodService", function(FoodService){
        const vm = this
        vm.serviceRestList = FoodService.getRestList()
        console.log(vm.serviceRestList, "this is rest list")



    }]



}

angular
.module("App")
.component("compThree", compThree);