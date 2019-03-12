"use strict"

const compTwo = {
    template: 
    // <p>hello</p>
    // <button ng-click="$ctrl.finalSearch()">Submit</button>
    `

    <div class="image2" ng-repeat="item in $ctrl.photosArray track by $index" ng-style="{'background-image': 'url(' + item.photoHREF + ')'}" ng-swipe-left="$ctrl.discardItem($index)" ng-swipe-right="$ctrl.addItem(item.cuisineID, $index)">
        <p>{{item.cuisine}}</p>
        <button ng-click="$ctrl.discardItem($index)">-</button>
        <button value="{{item.cuisineID}}" ng-click="$ctrl.addItem(item.cuisineID, $index)">+</button>
    </div>
    `,
    controller: ["FoodService", "$location", "$rootScope", function(FoodService, $location) {
        const vm = this;

        vm.photosArray = [
            {
            photoHREF: `./assets/american.jpg`,
            cuisineID: 1,
            cuisine: `American`,
            },
            {
            photoHREF: `./assets/Greek.jpg`,
            cuisineID: 156,
            cuisine: `Greek`,
            },
            {
            photoHREF: `./assets/Chinese.jpg`,
            cuisineID: 25,
            cuisine: `Chinese`,
            },
            {
            photoHREF: `./assets/bbq.png`,
            cuisineID: 193,
            cuisine: `BBQ`,
            },
            {
            photoHREF: ``,
            cuisineID: 168,
            cuisine: `Burger`,
            },
            {
            photoHREF: `./assets/Thai.jpeg`,
            cuisineID: 95,
            cuisine: `Thai`,
            },
            {
            photoHREF: `./assets/Pizza.jpg`,
            cuisineID: 82,
            cuisine: `Pizza`,
            },
            {
            photoHREF: `./assets/Mexican.jpg`,
            cuisineID: 73,
            cuisine: `Mexican`,
            },
            {
            photoHREF: `./assets/Sandwich.jpg`,
            cuisineID: 304,
            cuisine: `Sandwich`,
            },
            {
            photoHREF: `./assets/Steak.jpg`,
            cuisineID: 141,
            cuisine: `Steak`,
            },
            {
            photoHREF: ``,
            cuisineID: 83,
            cuisine: `Seafood`,
            },
            {
            photoHREF: `./assets/FastFood.jpg`,
            cuisineID: 40,
            cuisine: `Fast Food`,
            },
            {
            photoHREF: `./assets/Italian.jpeg`,
            cuisineID: 55,
            cuisine: `Italian`,
            }, 
            {
            photoHREF: `./assets/Lebanese.jpg`,
            cuisineID: 66,
            cuisine: `Lebanese`,
            },
        ]
        vm.cuisineArray = []

        vm.hide = false;

        vm.addItem = function(item, index) {
            console.log(item)
            vm.cuisineArray.push(angular.copy(item))
            console.log(vm.cuisineArray)
            console.log(vm.photosArray)
            vm.removeAPic(index)
        }

        vm.discardItem = function(index) {
            vm.removeAPic(index)
        }

        vm.removeAPic = function(index) {
            vm.photosArray.splice(index, 1)
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