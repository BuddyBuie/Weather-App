const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const apiKey = "4d8fb5b93d4af21d66a2948710284366";

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  
  fetch(url)
    .then(response => response.json())
    .then(weatherData => {
    
     console.log(weatherData);
    
     const temp = weatherData.main.temp;
     console.log(temp);
    
    const temp2 = Math.round(temp * 1.8 + 32);
    
    
    $("h1").text(inputVal.toUpperCase());
    $("h2").text(temp2 + "°");
    
    const description = weatherData.weather[0].description;
    console.log(description);
    $("h3").text(description.toUpperCase());
    
    const icon = weatherData.weather[0].icon
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    console.log(imageURL);
    $(".img1").attr("src", imageURL);
    });
  form.reset();
});