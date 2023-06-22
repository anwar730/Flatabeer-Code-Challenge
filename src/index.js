function fetchBeerOne(){
    fetch(`http://localhost:3000/beers/${1}`)
    .then(res=>res.json())
    .then(data=>displayBeerOne(data))
    }
    fetchBeerOne()
    
    function displayBeerOne(beer0ne){
        let h1=document.getElementById("beer-description")
        h1.textContent=`${beer0ne.description}`
        let img = document.getElementById('beer-image');
        img.src = `${beer0ne.image_url}`;
        let name=document.getElementById("beer-name")
        name.textContent=`${beer0ne.name}`
        let ul=document.getElementById("review-list")
        ul.innerHTML = '';
        beer0ne.reviews.forEach(review=>{
            const li = document.createElement('li');
            li.textContent = review;
            ul.appendChild(li);
        })
       
    }