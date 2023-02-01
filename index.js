import { menuArray } from "./data.js";

document.getElementById("menu")

// render menu items
function renderMenuItems() {
    menuArray.forEach(function(menuItem) {
        console.log(menuItem.name)
    })
}

renderMenuItems()