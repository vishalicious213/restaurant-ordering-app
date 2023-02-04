# Restaurant ordering app

This was a Scrimba solo project. We were given a Figma design and had to build a restaurant ordering application. The main requirements (other than following the design spec) were that the application had to render the restaurant's menu options using JavaScript (we were given an array of data with a burger, pizza and beer), visitors had to be able to add/remove items from their order and we needed to build a payment modal with compulsory form inputs (name, credit card number and CVV).

I built the project as required, but then moved on to customize it and add features, as well as completely different theme. Here's some of what I added:

- additional dishes (adding data to the array - we went from 3 to 15)
- an additional field in the array to hold a picture of each dish
- a nav/menu that rendered three item categories: mains, sides and drinks
- a decrement button and item order count next to the add button from the design
- an item count in the bill
- in the bill, changing the "remove" button's ability from removing a single item to removing an item from the bill regardless of quantity
- a cancel button in the payment modal
- disabling the rest of the interface when the payment modal was onscreen, so people couldn't change their order while sending a payment
- a footer

There were *many* JavaScript and CSS concepts used in this projects that weren't needed for the provided design. The customizations called for them. They're included in the sections below. Some concepts didn't have JavaScript keywords, like `type coercion`, but that was a fun aspect of data comparisons throughout the building of the application.

Deployed at: https://vish213-jimmys-diner.netlify.app/

## JavaScript concepts

- variables
- arrays
    - .filter()
    - .forEach()
    - .indexOf()
    - .push()
    - .splice()
    - .slice()
- objects
- functions
    - event handlers
    - return
- if conditionals
- if...else conditionals
- the NOT operator (!)
- ternary operator
- string/template literals
- module imports & exports
- document.getElementById()
- document.querySelector()
    - selecting elements via data attribute
- document.addEventListener()
    - event.target
    - event.target.dataset
    - event.preventDefault()
    - "click"
    - "submit"
- element.textContent
- element.style
- element.style.display
- element.style.backgroundImage
- element.innerHTML
- element.classList
- element.classList.add
- element.classList.remove
- parseInt()

## CSS concepts

- display: flex
    - justify-content
    - align-items
    - flex-direction
- display: none
- display: inline-block
- box-shadow
- cursor: pointer
- background: url()
- background-repeat
- background-size
- background-position
- background-color: transparent
- pointer-events: none
- text-shadow
- list-style-type
- position: fixed
    - top
    - left
- -webkit-outer-spin-button
- -webkit-inner-spin-button
- -webkit-appearance: none

## HTML concepts

- Semantic HTML
    - header
    - nav
    - main
    - section
    - footer
- i-tags (for Font Awesome icons)
- buttons
    - type="submit"
    - type="button"
- classes
- IDs
- unordered lists
- horizontal rows
- forms
    - inputs
        - type="text"
        - type="number"
        - placeholders
        - required
- script tags
    - type="module"