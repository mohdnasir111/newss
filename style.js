let key = "d4cc825615d24733ad8abcc136e4f5cb";
let cardData = document.querySelector(".cardData");
let SearchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");

let jsonData;
const getData = async (input) => {
  try {
    let res = await fetch(`https://newsapi.org/v2/everything?q=<span class="math-inline">\{input\}&apiKey\=</span>{key}`);
    if (!res.ok) {
      throw new Error(`Network response was not ok (${res.status})`);
    }

    jsonData = await res.json();
    console.log(jsonData.articles);
  }
}
    // Check for articles and render content
    if (jsonData && jsonData.articles) {
      jsonData.articles.forEach(function (article) {
        // ... rest of your code using articles
        let divs = document.createElement("div");
        divs.classList.add("card");
        cardData.appendChild(divs);
        searchType.innerHTML = "Search:" + input;
        divs.innerHTML = `
          <img src="<span class="math-inline">\{article\.urlToImage\}" alt\=""\>
<h3\></span>{article.title}</h3>
          <p>${article.description}</p>
        `;
        divs.addEventListener("click", function () {
          window.open(article.url);
        });
      });
    } else {
      console.error("Error: No articles found in response");
      cardData.innerHTML = "No articles found for your search.";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error case (e.g., display an error message)
  }
};

window.addEventListener("load", function () {
  getData('india');
});

SearchBtn.addEventListener("click", function () {
  let inputText = inputData.value;
  getData(inputText);
});

function navClick(navName) {
  if (navName == "politics") {
    document.getElementById("politics").style.color = "rgb(0,140,255)";
    document.getElementById("sports").style.color = "white";
    document.getElementById("technology").style.color = "white";
  }
  if (navName == "sports") {
    document.getElementById("politics").style.color = "white";
    document.getElementById("sports").style.color = "rgb(0,140,255)";
    document.getElementById("technology").style.color = "white";
  }
  if (navName == "technology") {
    document.getElementById("politics").style.color = "white";
     document.getElementById("sports").style.color ="white";
    document.getElementById("technology").style.color =  "rgb(0,140,255)";
  }
