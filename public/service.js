"use strict"
function FoodService($http, $location) {
    const self = this;
    self.searchRestID = (location) => {
        console.log(location, "this is the location that the user input")
        return $http({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/locations?query=${location}
            `,
            headers: {
                "user-key": "542769761b546b1e16b0443af117653d"
            },
    
            
        }).then((data) => {
            self.jsonPayload = data;
            self.cityID = self.jsonPayload.data.location_suggestions[0].entity_id
            console.log(self.cityID, "this is the city id that the API is returning")
            $location.path("/comptwo")

            return self.jsonPayload
        })
    }

    self.getcityID = () => {
        return self.cityID
    }

    
    //as soon as you choose item you want, it'll operate this search- restaurant thing
    // takes you to comp three which will display your final cuisine restaurant results. 
    self.searchRest = (id, opt1, opt2, opt3, opt4, opt5) => {
        console.log(id, "this is the city id passed to the searchrest method")

        return $http({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&cuisines=${opt1}%2C%20${opt2}%2C%20${opt3}%2C%20${opt4}%2C%20${opt5}&sort=rating&order=desc

            `,
            headers: {
                "user-key": "542769761b546b1e16b0443af117653d"
            }            
        }).then((moredata) => {
            self.jsonPayload2 = moredata;
            console.log(self.jsonPayload2, "jsonPayload2")
            self.restList = self.jsonPayload2
            $location.path("/compthree")

            return self.jsonPayload2

        })
    }

    self.getRestList = () => {
        return self.restList
    }
    
}

angular 
    .module("App")
    .service("FoodService", FoodService);

    