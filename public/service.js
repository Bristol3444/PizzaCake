"use strict"
function FoodService($http) {
    const self = this;
    self.searchRest = (location) => {
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
            console.log(self.jsonPayload)
            return self.jsonPayload
        })
    }

    self.searchFood = (posts) => {
        console.log(posts, "this is posts")
        return $http({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/search?entity_id=${posts}&entity_type=city
            `,
            headers: {
                "user-key": "542769761b546b1e16b0443af117653d"
            },
    
            
        }).then((moredata) => {
            self.jsonPayloadSecond = moredata;
            console.log(self.jsonPayloadSecond, "jsonPayloadSecond")
            return self.jsonPayloadSecond
        })
    }
}

angular 
    .module("App")
    .service("FoodService", FoodService);

    