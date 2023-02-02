import { menuArray } from "./data.js";

const menu = document.getElementById("menu")
const order = document.getElementById("order")
const orderItems = document.getElementById("order-items")
const orderList = []

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
    const itemId = quantityToUpdate.dataset.qty
    // console.log('add event', itemId)
    let quantity = parseInt(quantityToUpdate.textContent)
    
    quantity += 1
    quantityToUpdate.textContent = quantity

    if (quantity) {
        showOrder(itemId, quantity)
    }
}

// if a - is clicked, decrement that item's quantity
function handleSub(e) {
    const quantityToUpdate = document.querySelector(`[data-qty="${e.target.dataset.sub}"]`)
    const itemId = quantityToUpdate.dataset.qty
    console.log('sub event', itemId)
    let quantity = parseInt(quantityToUpdate.textContent)
    
    quantity -= 1
    if (quantity < 0) {
        quantity = 0
    }
    quantityToUpdate.textContent = quantity

    if (!quantity) {
        hideOrder(itemId, quantity)
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

// show order list
function showOrder(item, quantity) {
    // console.log("render item", item, "quantity", quantity)
    // console.log("starting orderList", orderList)

    // check if item is in orderList
    const listItem = orderList.filter(function(it) {
        return it.item === item
    })[0]
    
    // console.log("listItem", listItem)

    if (!listItem) {
        orderList.push({item, quantity})
    } else {
        listItem.quantity = quantity
    }

    // console.log("ending orderList", orderList)

    renderOrder(item)
    order.classList.remove("hidden")
}

// hide order list
function hideOrder(item, quantity) {
    console.log("starting orderList", orderList)

    // check if item is in orderList
    const listItem = orderList.filter(function(it) {
        return it.item === item
    })[0]

    console.log("listItem", listItem)

    if (!listItem) return

    if (listItem) {
        listItem.quantity = quantity
    }

    if (listItem.quantity === 0) {
        console.log("remove this item")
        const index = orderList.indexOf(listItem)
        console.log(index)
        if (index > -1) {
            orderList.splice(index, 1)
        }
    }

    if (orderList.length === 0) {
        order.classList.add("hidden")
    }

    console.log("ending orderList", orderList)
}

function renderOrder() {
    orderItems.innerHTML = ""

    orderList.forEach(function(orderItem) {
        const itemDetails = menuArray.filter(function(it) {
            return it.id === parseInt(orderItem.item)
        })[0]

        orderItems.innerHTML += `
            <li class="item">
                <span class="item-name">${itemDetails.name} x${orderItem.quantity}</span>
                <span>
                    <span class="item-remove">remove</span>
                    <span class="item-price">$${orderItem.quantity * itemDetails.price}</span>
                </span>
            </li>
        `
    })
}

renderMenuItems()