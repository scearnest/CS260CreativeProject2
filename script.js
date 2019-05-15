window.onload = function() {
  document.getElementById("search").addEventListener("click", async function(event) {
    event.preventDefault();
    // const value = document.getElementById("weatherInput").value;
    // if (value === "")
    // return;
    // console.log(value);


    ingredients = document.getElementById("searchbar").value;

    health = getHealthString();
    // calories = getCalories();



    const url = "https://api.edamam.com/search?q=" + ingredients + "&app_id=f4381c19&app_key=8e9220e0d74298ab22143e7237ab941f" + health;

    console.log(url);

    // "https://api.edamam.com/search? " + value + ",US&units=imperial" +
    // "&APPID=2992349419d0a9f42eb9de5f88bad8b4";
    try {
      const response = await fetch(url);
      console.log("response: ", response);
      const json = await response.json();
      console.log("json: ", json);
    }
    catch (e) {
      console.log("error");
    }
  });
}


function getHealthString() {
  health = "";

  if(document.getElementById("alcohol").checked)
  {
    health += "&health=alcohol-free	";
  }
  if(document.getElementById("lactose").checked)
  {
    health += "&health=dairy-free";
  }
  if(document.getElementById("gluten").checked)
  {
    health += "&health=gluten-free";
  }
  if(document.getElementById("kosher").checked)
  {
    health += "&health=kosher";
  }
  if(document.getElementById("vegan").checked)
  {
    health += "&health=vegan";
  }
  if(document.getElementById("vegetarian").checked)
  {
    health += "&health=vegetarian";
  }

  return health;
}

// function getCalories() {
//   calories = "";
// }
