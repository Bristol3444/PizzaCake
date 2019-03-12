"use strict";




const compThree = {
    template: `
    <p>Hello</p>


    `,

    controller: ["FoodService", function(FoodSevice){



    }]



}

angular
.module("App")
.component("compThree", compThree);