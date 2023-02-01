import { menuArray } from "./data.js";

const menu = document.getElementById("menu")
const order = document.getElementById("order")

// ⬇️ USER INTERFACE ⬇️

document.addEventListener("click", function(e) {
    if (e.target.dataset.add) {
        handleAdd(e)
    } else if (e.target.dataset.sub) {
        handleSub(e)
    }
})

// ⬇️ EVENT HANDLERS ⬇️

// if a + is clicked, increment that item's quantity
function handleAdd(e) {
    const quantityToUpdate = document.querySelector(`[data-qty="${e.target.dataset.add}"]`)
    let quantity = parseInt(quantityToUpdate.textContent)
    
    quantity += 1
    quantityToUpdate.textContent = quantity

    if (quantity) {
        renderOrder()
    }
}

// if a - is clicked, decrement that item's quantity
function handleSub(e) {
    const quantityToUpdate = document.querySelector(`[data-qty="${e.target.dataset.sub}"]`)
    let quantity = parseInt(quantityToUpdate.textContent)
    
    quantity -= 1
    if (quantity < 0) {
        quantity = 0
    }
    quantityToUpdate.textContent = quantity

    if (!quantity) {
        hideOrder()
    }
}

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
                <button type="button" class="menu-item-btn" id="sub" data-sub="${menuItem.id}">-</button>
                <div class="item-quantity" data-qty="${menuItem.id}">${quantity}</div>
                <button type="button" class="menu-item-btn" id="add" data-add="${menuItem.id}">+</button>
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

// render order list
function renderOrder() {
    console.log("render order")
}

// hide order list
function hideOrder() {
    console.log("hide order")
}

renderMenuItems()