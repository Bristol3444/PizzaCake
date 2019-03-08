"use strict"
function FoodService($http) {
    const self = this;
    self.searchRest = (location) => {
        console.log(location)
        return $http({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/search?entity_type=city&q=Bucharest
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
}

angular 
    .module("App")
    .service("FoodService", FoodService);

    