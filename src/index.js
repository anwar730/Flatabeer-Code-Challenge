function fetchBeerOne() {
  fetch(`http://localhost:3000/beers/${1}`)
    .then((res) => res.json())
    .then((data) =>displayBeerOne(data));
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
    let btn=document.createElement("button")
    btn.addEventListener("click",handleDelete)
    btn.textContent=" x "
    btn.classList="button"
    btn.id="btn"
    li.textContent = ` ${review} `;
    li.append(btn)
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
    li.addEventListener("click",()=>{
      fetch(`http://localhost:3000/beers/${beer.id}`)
      .then(res=>res.json())
      .then(data=>{
        let h1 = document.getElementById("beer-description");
        h1.textContent = `${data.description}`;
        let img = document.getElementById("beer-image");
        img.src = `${data.image_url}`;
        let name = document.getElementById("beer-name");
        name.textContent = `${data.name}`;
        let ul = document.getElementById("review-list");
        ul.innerHTML = "";
   data.reviews.forEach((review) => {
    const li = document.createElement("li");
    let btn=document.createElement("button")
    btn.addEventListener("click",handleDelete)
    btn.textContent=" x "
    btn.classList="button"
    btn.id="btn"
    li.textContent = ` ${review} `;
    li.append(btn)
    ul.appendChild(li);
  })
      })
    })
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

function handleDelete(e){
    e.target.parentNode.remove()
}
handleDelete()

