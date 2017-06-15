// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

//name.first, name.last, email, location.street, location.city, location.state, location.postcode, phone, picture.thumbnail

(function () {

  'use strict';
  //Going to need to append everything to this class, better get it here.
  const customerContainer = document.querySelector(".customers");

  //Fetch the data.
  fetch("https://randomuser.me/api/?results=12&nat=us&seed=tiy")
  .then(function(response){
    return response.json();
  })
  .then(function(sanData) {
    console.log(sanData);
    //Assigning the results array from the JSON to a variable "results".
    let results = sanData.results;
    custGen(results);

  });

    //This function will iterate over the customer array, create a container for each customer, and populate it.
    function custGen(custFields){
      console.log(custFields[0]);
    //Same as a classic for loop, only works with a definite number of items.
      for (let idx in custFields) {
    //Way easier than referring to the array index every time we need to pull a value from the array.
        const cust = custFields[idx];
    //These lines bring data from our converted array and puts them into variables that we can use.
        let custName = cust.name.first + " " + cust.name.last;
        let custEmail = cust.email;
        let address1 = cust.location.street;
        let address2 = cust.location.city + ", " + cust.location.state + " " + cust.location.postcode;
        let custPhone = cust.phone;
    //Making the boxes that will make up our individual customers.
        let container = document.createElement("div");
    //Start filling the containers with the data and applying limited styling.
        let custPic = document.createElement("img");
        custPic.setAttribute("src", cust.picture.large);
        container.appendChild(custPic);
    //We create new elements at the DOM level, then we can append them into whatever container we want.
        let name = document.createElement("p");
    //Add the customer name and make it all caps.
        name.textContent = custName.toUpperCase();
    //We're going to want this to have a class so we can grab it in CSS and style it with font, size, etc.
        name.classList.add("name");
    //We're done with the name, so lets get it out of the dom level and put it in our customer's box.
        container.appendChild(name);

        let email = document.createElement("p");
        email.textContent = custEmail.toUpperCase();
        name.classList.add("email");
        container.appendChild(email);

        let address = document.createElement("p");
        address.innerHTML = address1.toUpperCase() + "<br>" + address2.toUpperCase();
        address.classList.add("address");
        container.appendChild(address);

        let phone = document.createElement("p");
        phone.textContent = custPhone;
        phone.classList.add("phone");
        container.appendChild(phone);

        customerContainer.appendChild(container);
      }
    }
  })();
