ingredientList = "";
var ingredient_list = [];

function add() {

  ingredientList += document.getElementById("searchbar").value;
  ingredient_list.push(document.getElementById("searchbar").value);
  ingredientList += "%20";
  document.getElementById("searchbar").value = "";

  console.log(ingredientList);

  addList();

}

window.onload = function() {
  document.getElementById("search").addEventListener("click", async function(event) {
    event.preventDefault();

    health = getHealthString();
    const url = "https://api.edamam.com/search?q=" + ingredientList + "&app_id=f4381c19&app_key=8e9220e0d74298ab22143e7237ab941f" + health;
    console.log(url);

    try {
      // const response = await fetch(url);

      // const json = await response.json();

      const response = await fetch(url);
      console.log("response: ", response);
      const json = await response.json();
      console.log("json: ", json);

      var my_recipes = "";
      console.log(json.hits.length);
      for (var i=0; i < json.hits.length; i++) {
        my_recipes += '<div class="individual_results"><div class="img_recipe_container">'
        my_recipes += '<img class="recipe_image" src="' + json.hits[i].recipe.image + '"></div>';
        my_recipes += '<div class="recipe_text"><p>' + json.hits[i].recipe.label + "</p></div></div>";
      }

      console.log(my_recipes)

      document.getElementById("my_recipes_containter").innerHTML = my_recipes;
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
    health += "&health=alcohol-free";
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

function addList()
{
  list = "<ul>";

  size = ingredient_list.length;
  for(i = 0; i < size; ++i)
  {
    list += "<li>" + ingredient_list[i] + "</li>";
  }

  list += "</ul>";

  document.getElementById("ingredient_list").innerHTML = list;


}

// function getCalories() {
//   calories = "";
// }
