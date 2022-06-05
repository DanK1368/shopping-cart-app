# Shopping Cart App - Refactored

### Refactored my previous :poop: code, and tried to use [Redux Toolkit](https://redux-toolkit.js.org/)

The following features where added:

- Sign-In/Validation Page will only navigate to the Login Page if response status is 200
- Login Page will navigate to Products Page only if response status is 200
- Cart is only accessible once logged in
- Similar product items added to the cart will not be shown duplicated, but their number will increase

Features missing:

- Discount on items
- Special, 3 for 2 promo
- Display errors for the user when http request response is bad
