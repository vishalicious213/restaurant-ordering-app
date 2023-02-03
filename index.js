import { mainsArray, sidesArray, drinksArray } from "./data.js";

const menu = document.getElementById("menu")
const menuMain = document.getElementById("nav-main")
const menuSides = document.getElementById("nav-sides")
const menuDrinks = document.getElementById("nav-drinks")
let subMenu = mainsArray
const order = document.getElementById("order")
const orderItems = document.getElementById("order-items")
const totalPrice = document.getElementById("total-price")
const payModalContainer = document.getElementById("pay-modal-container")
const payModal = document.getElementById("pay-modal")
const payForm = document.getElementById("pay-form")
const orderList = []

// ⬇️ USER INTERFACE ⬇️

// listen for clicks on the + and - buttons for menu items
document.addEventListener("click", function(e) {
    if (e.target.dataset.add) {
        handleAdd(e)
    } else if (e.target.dataset.sub) {
        handleSub(e)
    } else if (e.target === menuMain) {
        console.log("main")
        subMenu = mainsArray
        renderMenuItems()
    } else if (e.target === menuSides) {
        console.log("sides")
        subMenu = sidesArray
        renderMenuItems()
    } else if (e.target === menuDrinks) {
        console.log("drinks")
        subMenu = drinksArray
        renderMenuItems()
    }
})

// ⬇️ EVENT HANDLERS ⬇️

// if a + is clicked, increment that item's quantity
function handleAdd(e) {
    const quantityToUpdate = document.querySelector(`[data-qty="${e.target.dataset.add}"]`)
    const itemId = quantityToUpdate.dataset.qty
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

// open the pay modal & close it if cancel button is clicked
function handleCompleteOrder() {
    const cancelButton = document.getElementById("cancel-button")

    payModalContainer.style.display = "flex"
    payModal.style.display = "flex"

    payForm.addEventListener("submit", function(e) {
        handlePay(e)
    })

    cancelButton.addEventListener("click", function() {
        handleCloseModal()
    })
}

// if the pay button is clicked in the pay-form
function handlePay(e) {
    e.preventDefault()

    payModal.innerHTML = `
        <form id="order-complete">
            <button id="complete-button" type="submit">
                <h3>Thank you for your order!</h3>
                <div>Click to close</div>
            </button>
        </form>
    `
}

// close the pay-modal
function handleCloseModal() {
    payModalContainer.style.display = "none"
    payModal.style.display = "none"
}

// ⬇️ RENDER THE APP ⬇️

// render menu items
function renderMenuItems() {
    subMenu.forEach(function(menuItem) {
        let quantity = 0

        menu.innerHTML += `
            <div class="menu-item" data-div="${menuItem.id}">
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
        `

    const backgroundImg = document.querySelector(`[data-div="${menuItem.id}"]`)
    backgroundImg.style.backgroundImage = `url("${menuItem.image}")`
    })
}

// render ingredients
function renderIngredients(array) {
    let ingredients = ""
    array.forEach(function(ingredient) {
        ingredients += `${ingredient}, `
    })
    return ingredients.slice(0, -2) // slice off last ", "
}

// show order list
function showOrder(item, quantity) {
    // check if item is in orderList
    const listItem = orderList.filter(function(it) {
        return it.item === item
    })[0]

    if (!listItem) {
        orderList.push({item, quantity})
    } else {
        listItem.quantity = quantity
    }

    renderOrder(item)
    order.classList.remove("hidden")
}

// hide order list
function hideOrder(item, quantity) {
    // check if item is in orderList
    const listItem = orderList.filter(function(it) {
        return it.item === item
    })[0]

    if (!listItem) return

    if (listItem) {
        listItem.quantity = quantity
    }

    if (listItem.quantity === 0) {
        const index = orderList.indexOf(listItem)
        if (index > -1) {
            orderList.splice(index, 1)
        }
    }

    if (orderList.length === 0) {
        order.classList.add("hidden")
    }
}

// show the "bill" at the bottom of the screen
function renderOrder() {
    const orderButton = document.getElementById("order-button")
    orderItems.innerHTML = ""
    totalPrice.innerHTML = ""
    let total = 0

    orderList.forEach(function(orderItem) {
        const itemDetails = subMenu.filter(function(it) {
            return it.id === parseInt(orderItem.item)
        })[0]

        total += orderItem.quantity * itemDetails.price

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

    totalPrice.innerHTML += `
        <li class="item">
            <span class="item-name">Total price:</span>
            <span class="item-price">$${total}</span>
        </li>
    `

    orderButton.addEventListener("click", handleCompleteOrder)
}

renderMenuItems()