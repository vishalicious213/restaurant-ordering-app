import { menuArray } from "./data.js";

const menu = document.getElementById("menu")

// render menu items
function renderMenuItems() {
    menuArray.forEach(function(menuItem) {
        console.log(menuItem.name)
        menu.innerHTML += `
        <div class="menu-item">
            <div class="menu-item-img">
                <img class="food-pic" src="${menuItem.image}" alt="${menuItem.name}">
            </div>
            <div class="menu-item-details">
                <h3>${menuItem.name}</h3>
                <p class="food-details">${renderIngredients(menuItem.ingredients)}</p>
                <p class="food-price">$${menuItem.price}</p>
            </div>
            <div class="menu-item-btns">
                <div class="menu-item-btn">+</div>
            </div>
        </div>
        <hr>        
        `
    })
}

// render ingredients
function renderIngredients(array) {
    let ingredients = ""
    array.forEach(function(ingredient) {
        // console.log(ingredient)
        // return `<span>${ingredient}</span>`
        ingredients += `${ingredient}, `
    })
    return ingredients.slice(0, -2) // slice off last ", "
}

renderMenuItems()