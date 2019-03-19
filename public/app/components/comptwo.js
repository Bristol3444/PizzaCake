"use strict"

const compTwo = {
    templateUrl: "./components/comptwo.html"
    ,
    controller: ["FoodService", "$location","$element", function(FoodService, $location, $element) {
        const vm = this;

        vm.photosArray = [
            {
            photoHREF: `https://media.giphy.com/media/HKEfXzOW3y0FO/giphy.gif`,
            cuisineID: 1,
            cuisine: `American?`,
            },
            {
            photoHREF: `./assets/Greek.gif`,
            cuisineID: 156,
            cuisine: `Greek?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/3ofSBzhBtiMfTARUYw/giphy.gif`,
            cuisineID: 25,
            cuisine: `Chinese?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/xT39D2A6TB8D1Ce79C/giphy.gif`,
            cuisineID: 193,
            cuisine: `BBQ?`,
            },
            {
            photoHREF: `./assets/Burger.gif`,
            cuisineID: 168,
            cuisine: `Burgers?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/3ohuAz5lUqtWU3SQvK/giphy.gif`,
            cuisineID: 95,
            cuisine: `Thai?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/4ayiIWaq2VULC/giphy.gif`,
            cuisineID: 82,
            cuisine: `Pizza?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/3o85xoylV5xyPr3Dd6/giphy.gif`,
            cuisineID: 73,
            cuisine: `Mexican?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/8Z2ZvSu2j5OgiKlfK9/giphy.gif`,
            cuisineID: 304,
            cuisine: `Sandwich?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/3oFzm3EbWuLElALSDe/giphy.gif`,
            cuisineID: 141,
            cuisine: `Steak?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/xT1R9MMaTxSYWMxyQE/giphy.gif`,
            cuisineID: 83,
            cuisine: `Seafood?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/efgsSvAvMjOpy/giphy.gif`,
            cuisineID: 40,
            cuisine: `Fast Food?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/MU7DwSE5Ulla8/giphy.gif`,
            cuisineID: 55,
            cuisine: `Italian?`,
            }, 
            {
            photoHREF: `https://media.giphy.com/media/piOeWEnyX6g4XjrizY/giphy.gif`,
            cuisineID: 66,
            cuisine: `Lebanese?`,
            },
            {
            photoHREF: `https://media.giphy.com/media/Zg4qILH5OsVdm/giphy.gif`,
            cuisineID: 182,
            cuisine: `Breakfast?`,
            },
            {
            photoHREF: 'https://media.giphy.com/media/8NWA4MlIkTZfy/giphy.gif',
            cuisineID: 100,
            cuisine: `Cake`
            }
        ]

        //shuffles objects in photosArray
        function shuffle(arr) {
            let i 
            let j 
            let temp;
            for (i = arr.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            return arr;
        }

        shuffle(vm.photosArray)
        console.log(vm.photosArray)



        vm.cuisineArray = []

        // tracks if all selections have been made, if so ng-if on section element turns on as loading screen.
        vm.loadIf = false

        vm.addItem = function(item, index) {
            vm.choicesLeft--
            vm.cuisineArray.push(angular.copy(item))
            console.log(item)
            vm.removeAPic(index)
            vm.evaluateCuisineArray()
        }

        vm.choicesLeft = 5

        vm.evaluateCuisineArray = function() {
            if (vm.cuisineArray.length == 5) {
                vm.loadIf = true
                vm.finalSearch()
            } else if (vm.photosArray.length == 1) {
                vm.loadIf = true
                vm.finalSearch()
            }
        }
        

        vm.discardItem = function(index) {
            vm.removeAPic(index)
            if (vm.photosArray.length == 1) {
                vm.loadIf = true
                console.log("now")
                vm.finalSearch()
            }
        }




        vm.removeAPic = function(index) {
            vm.photosArray.splice(index, 1)
        }

        vm.serviceSubzoneID = FoodService.getSubzoneID()
        console.log(vm.serviceSubzoneID, "this id was passed back from the service")
        
        vm.finalSearch = function() {
            console.log(vm.cuisineArray)
            FoodService.searchRest(
                vm.serviceSubzoneID, 
                vm.cuisineArray[0], 
                vm.cuisineArray[1], 
                vm.cuisineArray[2], 
                vm.cuisineArray[3], 
                vm.cuisineArray[4])
            .then((moredata2) => {
            vm.places = moredata2.data.restaurants
            console.log(moredata2.data, "moredata2")
        })
        }





    }]  
        



}

angular
    .module("App")
    .component("compTwo", compTwo)