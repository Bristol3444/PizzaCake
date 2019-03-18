"use strict"
const compOne = {
    template: `
    <section class="landing__page">
    <div class="app__title"><span class="pizza">Pizza</span><span class="cake">Cake</span></div>
    <img class="logo" src="/public/app/assets/pizzacake.png">
    <div class="app__info">End the arguments, let us choose!</div>
    <form class="app__form" ng-submit="$ctrl.search(location)">
        <input class="location" ng-model="location" ng-attr-placeholder="{{$ctrl.placeholder}}" ng-focus="$ctrl.placeholder =  ''" ng-blur="$ctrl.placeholder = 'Enter Your City'"> 
        <button class="search__btn" )" ng-disabled="!location">Go!</button>
    </form>
    <section ng-repeat="cuis in $ctrl.cuis track by $index">
        <p>cuisine_id: {{cuis.cuisine.cuisine_id}} </p>
        <p>cuisine_name: {{cuis.cuisine.cuisine_name}} </p>
    </section>
    <section ng-repeat="places in $ctrl.places">
        <p>{{places.restaurant.name}}</p>
    </section>
    <section class="load" ng-if="$ctrl.loadIf">
        <div class="loader"></div>
    </section>
    `,




    controller: ["FoodService", "$location", function(FoodService, $location) {
        const vm = this;
        vm.placeholder = "Enter Your City";

        vm.loadIf = false



        vm.search = function(location) {
            vm.loadIf = true
            // console.log(location)
            FoodService.searchCoords(location).then((data) => {
                console.log(data)
                
                vm.latitude = data.data.results[0].locations[0].displayLatLng.lat
                vm.longitude = data.data.results[0].locations[0].displayLatLng.lng
                console.log(vm.latitude, vm.longitude)
                FoodService.searchGeoCode(vm.latitude, vm.longitude)

                

                
                
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