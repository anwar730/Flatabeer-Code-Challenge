function fetchBeerOne() {
  fetch(`http://localhost:3000/beers/${1}`)
    .then((res) => res.json())
    .then((data) => displayBeerOne(data));
}
fetchBeerOne();

function displayBeerOne(beer0ne) {
  let h1 = document.getElementById("beer-description");
  h1.textContent = `${beer0ne.description}`;
  let img = document.getElementById("beer-image");
  img.src = `${beer0ne.image_url}`;
  let name = document.getElementById("beer-name");
  name.textContent = `${beer0ne.name}`;
  let ul = document.getElementById("review-list");
  ul.innerHTML = "";
  beer0ne.reviews.forEach((review) => {
    const li = document.createElement("li");
    li.textContent = review;
    ul.appendChild(li);
  });
}

function fetchBeers(){
    fetch("http://localhost:3000/beers")
    .then(res=>res.json())
    .then(beers=>displayBeerNames(beers))
}
fetchBeers()

function displayBeerNames(beers){
    let ul=document.getElementById("beer-list")
    ul.innerHTML = "";
    beers.map(beer=>{
    const li = document.createElement("li");
    li.textContent = beer.name;
    ul.appendChild(li);
    })
}

function addReview(){
    let form=document.getElementById("review-form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let ul=document.getElementById("review-list")
        let input=document.getElementById("review")
        const li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
        
    })
}
addReview()

