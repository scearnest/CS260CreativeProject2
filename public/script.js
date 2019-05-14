window.onload = function() {
  document.getElementById("submit").addEventListener("click", async function(event) {
    event.preventDefault();
    // const value = document.getElementById("weatherInput").value;
    // if (value === "")
    // return;
    // console.log(value);

    const url = "https://api.edamam.com/search?q=salt,oil&app_id=f4381c19&app_key=8e9220e0d74298ab22143e7237ab941f";
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
