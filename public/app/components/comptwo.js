"use strict"

const compTwo = {
    template: 
    `
    <p>hello</p>
    <button ng-click="$ctrl.finalSearch()">Submit</button>
    <div class="image2" ng-repeat="item in $ctrl.photosArray track by $index">
        <p>{{item.cuisine}}</p>
        <button>-</button>
        <button value="{{item.cuisineID}}" ng-click="$ctrl.addItem(item.cuisineID)">+</button>
    </div>
    `,
    controller: ["FoodService", "$location", "$rootScope", function(FoodService, $location) {
        const vm = this;

        vm.photosArray = [
            {
            photoHREF: ``,
            cuisineID: 1,
            cuisine: `American`,
            },
            {
            photoHREF: ``,
            cuisineID: 156,
            cuisine: `Greek`,
            },
            {
            photoHREF: ``,
            cuisineID: 25,
            cuisine: `Chinese`,
            },
            {
            photoHREF: ``,
            cuisineID: 193,
            cuisine: `BBQ`,
            },
            {
            photoHREF: ``,
            cuisineID: 168,
            cuisine: `Burger`,
            },
            {
            photoHREF: ``,
            cuisineID: 95,
            cuisine: `Thai`,
            },
            {
            photoHREF: ``,
            cuisineID: 82,
            cuisine: `Pizza`,
            },
            {
            photoHREF: ``,
            cuisineID: 73,
            cuisine: `Mexican`,
            },
            {
            photoHREF: ``,
            cuisineID: 304,
            cuisine: `Sandwich`,
            },
            {
            photoHREF: ``,
            cuisineID: 141,
            cuisine: `Steak`,
            },
            {
            photoHREF: ``,
            cuisineID: 83,
            cuisine: `Seafood`,
            },
            {
            photoHREF: ``,
            cuisineID: 40,
            cuisine: `Fast Food`,
            },
            {
            photoHREF: ``,
            cuisineID: 55,
            cuisine: `Italian`,
            }, 
            {
            photoHREF: ``,
            cuisineID: 66,
            cuisine: `Lebanese`,
            },
        ]
        vm.cuisineArray = []

        vm.addItem = function(item) {
            console.log(item)
            vm.cuisineArray.push(angular.copy(item))
            console.log(vm.cuisineArray)
        }

        vm.posts = FoodService.getcityID()
        console.log(vm.posts)
        
        vm.finalSearch = function() {

            FoodService.searchRest(vm.posts, vm.cuisineArray[0], vm.cuisineArray[1], vm.cuisineArray[2], vm.cuisineArray[3], vm.cuisineArray[4]).then((moredata2) => {
            vm.places = moredata2.data.restaurants
            console.log(moredata2.data, "moredata2")
        })
        }





    }]  
        



}

angular
    .module("App")
    .component("compTwo", compTwo)