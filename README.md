## Description
```
This project is a mock up of a baking blog.  I wanted to add user interaction with the ingredients list to improve the functionality in different browswer sizes.  A reset button restores the default links/ingredients.
```

## Custom CSS Classes
```
Some of my CSS classes are:
    1.  .image - creates background image for the navigation bar and heading
    2.  .top-nav-links - creats a navigation bar at the top of the pages and controls behavior when the browser is resized
    3.  .project and .ingredients - project text and ingredients bar that become flex items with different behavior in larger browser sizes (inside .wrap)
```

## Custom JavaScript Functions
```
My javaScript functions:
    1.  changeIngredient - this function changes the ingredients link inside the project text (where an ingredient would be mentioned inside a recipe), when clicked, to the text of the corresponding ingredient in the ingredients bar (so that the user does not have to scroll up to the ingredients bar to find it).  It also changes the background of the ingredients link to yellow.  This function is called in an if/else statement and works when the browser is smaller than 500 pixels when loaded.  
    
    2. highlightIngredient - this function changes the background color of the ingredient in the ingredients bar to yellow when the corresponding ingredient link is clicked.  This function is called in the if/else statement and works when the browser is 500 pixels and larger when loaded.
```
