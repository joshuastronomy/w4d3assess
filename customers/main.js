// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

//name.first, name.last, email, location.street, location.city, location.state, location.postcode, phone, picture.thumbnail

(function () {

  'use strict';

  fetch("https://randomuser.me/api/?results=12")
  .then(function(response){
    return response.json();
  })
  .then(function(json) {
    json.results.forEach(function(results) {
      let first = results.name.first;
      let last = results.name.last;
      let email = results.email;
      let street = results.location.street;
      let city = results.location.city;
      let state = results.location.state;
      let zip = results.location.postcode;
      let phone = results.phone;
      let pic = results.picture.thumbnail;
      console.log(city);
    })
  })
})();
