import { menuArray } from "./data.js";

const menu = document.getElementById("menu")

// ⬇️ USER INTERFACE ⬇️

document.addEventListener("click", function(e) {
    if (e.target.dataset.add) {
        const quantityToUpdate = document.querySelector(`[data-qty="${e.target.dataset.add}"]`)
        let quantity = parseInt(quantityToUpdate.textContent)
        quantity += 1
        console.log(quantity)
        quantityToUpdate.textContent = quantity
    } else if (e.target.dataset.sub) {
        const quantityToUpdate = document.querySelector(`[data-qty="${e.target.dataset.sub}"]`)
        let quantity = parseInt(quantityToUpdate.textContent)
        quantity -= 1
        if (quantity < 0) {
            quantity = 0
        }
        console.log(quantity)
        quantityToUpdate.textContent = quantity
    }
})

// ⬇️ EVENT HANDLERS ⬇️

// ⬇️ RENDER THE APP ⬇️

// render menu items
function renderMenuItems() {
    menuArray.forEach(function(menuItem) {
        let quantity = 0

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
                <div class="menu-item-btn" id="sub" data-sub="${menuItem.id}">-</div>
                <div class="item-quantity" data-qty="${menuItem.id}">${quantity}</div>
                <div class="menu-item-btn" id="add" data-add="${menuItem.id}">+</div>
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