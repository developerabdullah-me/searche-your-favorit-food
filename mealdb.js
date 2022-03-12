// keypress enater
let go = document.getElementById("button-search");
let txt = document.getElementById("search-food");
txt.addEventListener("keypress", function(event) {
    // event.preventDefault();
    if (event.key =='Enter')
        go.click();
});

// searchBtn
const searchBtn=()=>{
    const searchFood=document.getElementById('search-food')
    const searchFild=searchFood.value;
    //  console.log(searchFild)
      // api link
    searchFood.value=''
     const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFild}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>updateFood(data.meals))
     const updateFood= meals=>{
        const searchresult=document.getElementById('search-result')
        searchresult.textContent=''
        meals.forEach(meal=>{
        console.log(meal)
        const div=document.createElement('div')
        div.classList.add('col')
        // innerHTML
        div.innerHTML=`
        <div class="col">
          <div onclick="lodeMilkClick(${meal.idMeal})" class="card border-0 shadow-lg">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-danger">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
          </div>
        </div>
        `;
        searchresult.appendChild(div);
      }) 
      const clearDtails=displayDtails()
      clearDtails.textContent ="" 
     }

    //  console.log(url)
}

const lodeMilkClick=idmeal=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDtails(data.meals[0]))
    // console.log(idmeal)     
}
// atuLods
searchBtn()
// food detail
const displayDtails= meal=>{
    const mealDtails=document.getElementById('mealDtail')
    mealDtails.innerHTML='';
  const div=document.createElement('div')
// div.classList.add("card")
div.innerHTML=`
<div class="card border-0 shadow-lg text-center mx-auto" style="width: 18rem;">
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${meal.strMeal}</h5>
<p class="card-text">${meal.strInstructions.slice(0,200)}</p>
  <a href="${meal.strYoutube}" class="btn btn-primary">Go To Live Food</a>
</div>
</div>
`;
mealDtails.appendChild(div)
// console.log(meal)
}
