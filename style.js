let key = "d4cc825615d24733ad8abcc136e4f5cb";
let cardData = document.querySelector(".cardData");
let SearchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");


const getData = async(input) => {
  let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`
                       );
  let jsonData = await res.json();
  console.log(jsonData.articles);
  cardData.innerHTML="";
  
}
  if jsonData.articles exists before using forEach
  if (jsonData && jsonData.articles) {
    console.log(jsonData.articles);
    cardData.innerHTML = "";
    jsonData.articles.forEach(function (article) {
      // ... rest of your code using articles
       console.log(article);
    let divs = document.createElement("div");
  divs.classList.add("card");
  cardData.appendChild(divs);
  searchType.innerHTML="Search:"+input;
 divs.innerHTML=`
 <img src="${article.urlToImage}" alt="">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        `
    divs.addEventListener("click",function(){
      window.open(article.url);
    });
  });
  
  } else {
    console.error("Error: No articles found in response");
    // Handle the error case (e.g., display an error message)
  }
}
  /*let divs = document.createElement("div");
  divs.classList.add("card");
  cardData.appendChild(divs);
 divs.innerHTML=`
 <img src="${jsonData.articles[0].urlToImage}" alt="">
        <h3>${jsonData.articles[0].title}</h3>
        <p>${jsonData.articles[0].description}</p>
        `*/

window.addEventListener("load", function(){
  getData('india');
});
SearchBtn.addEventListener("click", function(){
let inputText = inputData.value;
getData(inputText);
});
function navClick(navName){
  if(navName =="politics"){
    document.getElementById("politics").style.color="rgb(0,140,255)"
    document.getElementById("sports").style.color="white"
    document.getElementById("technology").style.color="white"
  }
  if(navName =="sports"){
    document.getElementById("politics").style.color="white"
    document.getElementById("sports").style.color="rgb(0,140,255)"
    document.getElementById("technology").style.color="white"
  }
  if(navName =="technology"){
    document.getElementById("politics").style.color="white"
    document.getElementById("sports").style.color="white"
    document.getElementById("technology").style.color="rgb(0,140,255)"
  }
  getData(navName);
}
