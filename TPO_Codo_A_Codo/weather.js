// Declaring the variables
let temperature = document.querySelector(".temp");
let loc = document.querySelector(".location");
let temperature2 = document.querySelector(".temp2");
let loc2 = document.querySelector(".location2");
const kelvin = 273;
 
window.addEventListener("load", () => {
  
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
  
      // API URL
      const base ="https://api.openweathermap.org/data/2.5/weather?id=3832711&appid=f7a40a89d29497a349b6bdda87abfdf2";
  
      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent = 
              Math.floor(data.main.temp - kelvin) + "°C";
          loc.textContent = data.name + "," + data.sys.country;
        });
    
              // API URL
      const base2 ="https://api.openweathermap.org/data/2.5/weather?id=3435910&appid=f7a40a89d29497a349b6bdda87abfdf2";
  
      // Calling the API
      fetch(base2)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature2.textContent = 
              Math.floor(data.main.temp - kelvin) + "°C";
          loc2.textContent = data.name + "," + data.sys.country;
        });
    });