"use strict"
function FoodService($http, $location) {
    const self = this;
    self.searchCoords = (location) => {
        console.log(location, "this is the location that the user input")
        return $http({
            method: "GET",
            url: `http://open.mapquestapi.com/geocoding/v1/address?key=3rqR19yqhTyHROEORLXr6kGeWbUKlgKe&location=${location}
            `
            
        }).then((data) => {
            self.jsonPayload = data;
            console.log(self.jsonPayload)
            return self.jsonPayload
        })
    }

    self.searchGeoCode = (latitude, longitude) => {
        console.log(latitude, longitude, "this is the coords that the api returned based on location search")
        return $http({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}
            `,
            headers: {
                "user-key": "542769761b546b1e16b0443af117653d"
            },
    
            
        }).then((data) => {
            self.jsonPayload = data;
            console.log(self.jsonPayload)
            $location.path("/comptwo")
            self.subzoneID = self.jsonPayload.data.location.entity_id
            console.log(self.subzoneID, "subzone ID")
            return self.jsonPayload
        })
    }

    self.getSubzoneID = () => {
        return self.subzoneID
    }

    
    //as soon as you choose item you want, it'll operate this search- restaurant thing
    // takes you to comp three which will display your final cuisine restaurant results. 
    self.searchRest = (id, opt1, opt2, opt3, opt4, opt5) => {


        return $http({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/search?count=3&entity_id=${id}&entity_type=subzone&cuisines=${opt1}%2C%20${opt2}%2C%20${opt3}%2C%20${opt4}%2C%20${opt5}&sort=rating&order=desc

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

    self.getPhotos = (url) => {
        return $http({
            method: "GET",
            url: `${url}`           
        }).then((moredata) => {
            self.jsonPayload3 = moredata;
            self.restList = self.jsonPayload3
            console.log(jsonPayload3)
            return self.jsonPayload3

        })
    }

       


 
    
    
}

angular 
    .module("App")
    .service("FoodService", FoodService);

    

    