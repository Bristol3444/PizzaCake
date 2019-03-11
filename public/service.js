"use strict"
function FoodService($http, $location) {
    const self = this;
    self.searchRestID = (location) => {
        console.log(location)
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
            console.log(self.cityID)
            $location.path("/comptwo")

            return self.jsonPayload
        })
    }

    self.getcityID = () => {
        return self.cityID
    }

    
    
    self.searchRest = (posts) => {
        console.log(posts, "this is posts")
        return $http({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/search?entity_id=${posts}&entity_type=city
            `,
            headers: {
                "user-key": "542769761b546b1e16b0443af117653d"
            }            
        }).then((moredata2) => {
            self.jsonPayloadThird = moredata2;
            console.log(self.jsonPayloadThird, "jsonPayloadThird")
            return self.jsonPayloadThird
        })
    }
    
}

angular 
    .module("App")
    .service("FoodService", FoodService);

    