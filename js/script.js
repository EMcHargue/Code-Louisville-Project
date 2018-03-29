


const ingredientsColl = document.getElementById('ingredients').children;    /* collection of ingredients */

const ingredientsLinkColl = document.getElementsByClassName('ingredientsLink');    /* collection of ingredient links */

// Creates stored original link content for restoration

var content = [];
    for (let i=0; i<ingredientsLinkColl.length; i+=1) {
        content[i] = ingredientsLinkColl[i].innerHTML;
    }
        
// Prevents page re-load when ingredient link clicked

$('.ingredientsLink').click(function(event) {
    event.preventDefault();
})


// 

// Changes ingredient link in project to match text of corresponding ingredient in list when link clicked

function changeIngredient() {
    for (let i=0; i<ingredientsColl.length; i+=1) {
        ingredientsLinkColl[i].addEventListener('click', () => {
            ingredientsLinkColl[i].innerHTML = ingredientsColl[i].innerHTML;
            ingredientsLinkColl[i].style.backgroundColor = 'yellow';
    
            });
    }
}

// Highlights ingredient in ingredient list when link in project clicked

function highlightIngredient () {
    for (let i=0; i<ingredientsColl.length; i+=1) {
        ingredientsLinkColl[i].addEventListener('click', () => {
            ingredientsColl[i].style.backgroundColor = 'yellow';
        });
        
    } 
}

// Applies ingredient change for small window screen and ingredient highlight for larger screens

if ( $(window).width() < 500) {
    
    window.changeIngredient();    

} else { 
    
    window.highlightIngredient();
 
}



// Button resets both the ingredients list and the ingredients link

myButton.addEventListener('click', () => {
    for (i=0; i<ingredientsColl.length; i+=1) {
        
        ingredientsLinkColl[i].innerHTML = content[i];
        
        let ingredientsLink = ingredientsLinkColl[i];
        ingredientsLink.style.backgroundColor = 'white';
        
        let ingredient = ingredientsColl[i];
        ingredient.style.backgroundColor = 'white';
    } 
});


// Makes ingredients bar sticky

window.onscroll = function() {myFunction()};

var ingredientsBox = document.getElementById("ingredientsBox");

var sticky = ingredientsBox.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    ingredientsBox.classList.add("sticky")
  } else {
    ingredientsBox.classList.remove("sticky");
  }
}

// Alert messages when non-functioning links clicked

about.addEventListener("click", function (event) {
    window.alert("There is no 'About' page!");
    event.preventDefault();
});

recipes.addEventListener("click", function (event) {
    window.alert("There is no 'Recipes' page!"); 
    event.preventDefault();
});

blog.addEventListener("click", function (event) {
    window.alert("There is no 'Blog' page!"); 
    event.preventDefault();
});

links.addEventListener("click", function (event) {
    window.alert("There is no 'Links' page!"); 
    event.preventDefault();
});

submitButton.addEventListener("click", function (event) {
    window.alert("No comments accepted at this time!"); 
    event.preventDefault();
});