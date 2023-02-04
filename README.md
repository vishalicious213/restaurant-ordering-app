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

Deployed at: https://vish213-jimmys-diner.netlify.app/