"use strict"
const compOne = {
    templateUrl: `./components/compone.html`,




    controller: ["FoodService", "$location", function(FoodService, $location) {
        const vm = this;
        vm.placeholder = "City and State";

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