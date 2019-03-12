"use strict"
const compOne = {
    template: `
    <input ng-model="location" placeholder="please enter a city"> 
    <button ng-click="$ctrl.search(location)">search</button>
    <section ng-repeat="cuis in $ctrl.cuis track by $index">
        <p>cuisine_id: {{cuis.cuisine.cuisine_id}} </p>
        <p>cuisine_name: {{cuis.cuisine.cuisine_name}} </p>
    </section>
    <section ng-repeat="places in $ctrl.places">
        <p>{{places.restaurant.name}}</p>
    </section>
    `,




    controller: ["FoodService", "$location", function(FoodService, $location) {
        const vm = this;





        vm.search = function(location) {
            // console.log(location)
            FoodService.searchRestID(location).then((data) => {
                console.log(data)
                vm.posts = data.data.location_suggestions[0].entity_id
                

                

                
                
            })

        }
    }]
}



angular
    .module("App")
    .component("compOne", compOne)



// FoodService.searchCuisineID(vm.posts).then((moredata) => {
//     vm.cuis = moredata.data.cuisines
//     console.log(vm.cuis, "vmcuis")
//     console.log(vm.photosArray.cuisine)
//     for (let i = 0; i < moredata.data.cuisines.length; i++) {
//         for (let j = 0; j < vm.photosArray.length; j++) {
//         if (vm.photosArray[j].cuisine === moredata.data.cuisines[i].cuisine.cuisine_name) {
//             vm.photosArray[j].cuisineID = moredata.data.cuisines[i].cuisine.cuisine_id
//             console.log(vm.photosArray)
//         }
//         }
//     }
// })