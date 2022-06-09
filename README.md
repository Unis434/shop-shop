# Shop-Shop

 <a href="https://shop-shop-mern.herokuapp.com/">![Deployed App](https://img.shields.io/badge/-Deployed-success?style=for-the-badge)</a>![Repo Size](https://img.shields.io/github/repo-size/CFsylvester/budget-tracker?color=inactive&style=for-the-badge)![Languages](https://img.shields.io/github/languages/count/CFsylvester/budget-tracker?color=inactive&style=for-the-badge)![Prominent Language](https://img.shields.io/github/languages/top/CFsylvester/budget-tracker?color=inactive&style=for-the-badge)

## Description
Shop-Shop is an ecommerce MERN application. Users are able to browse items and add them to a cart, which will persist if the website is left. Additionally, users can create an account to keep track of what items they have purchased. The payment processing platform used is Stripe.

Instead of a RESTful API, Shop-Shop utilizes GraphQL paired with Apollo. This is done to save bandwidth and reduce waterfall requests. It also enables clients to request their own unique data specifications. IndexedDB is implemented to create persistent cart data, as users are accustommed to that feature. While Stripe API is the payment processing platform for the checkout process. Shop-Shop initially used React-Context for state management but was refactored to use Redux for its predictability, DRY code, and speed. While JsonWebToken and JWT-Decode enable the safe transmission of user data. The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every user password with a salt. 

## Table of Contents
  - [Usage](#Usage)
  - [Installation](#installation)
  - [Technology Used](#technology-used)
  - [Questions](#questions)
  - [Links](#links)
  - [License](#license)
  
## Usage

#### Signup Form:
<img src='./readme/signup.png' height="400" width="600">

#### Application Homepage:
<img src='./readme/homepage.png' height="400" width="600">

#### Product Page:
<img src='./readme/single.png' height="400" width="600">

#### Shopping Cart:
<img src='./readme/cart.png' height="400" width="600">

 #### Stripe Checkout:
<img src='./readme/stripe.png' height="400" width="600">

 #### User Order History:
<img src='./readme/order-history.png' height="400" width="600">

 
  
  ## Installation
  Node.js, NPM, and MongoDB must be installed on your computer. <br />
  <br />Clone the repo: <br />
      `git clone https://github.com/CFsylvester/shop-shop.git` <br />
  <br />Navigate to the root directory and run: <br />
      `npm install` <br />
  <br />To start the server locally, run the following: <br />
      `npm start` <br />
  <br />Navigate to <b>localhost:3001</b> in your browser to open the application locally.

  ## Technology Used
![Mongoose.js](https://img.shields.io/badge/-Mongoose-9cf?style=for-the-badge)
![Express.js](https://img.shields.io/badge/-Express-white?style=for-the-badge)
![React](https://img.shields.io/badge/-React-9cf?style=for-the-badge)
![Node.js](https://img.shields.io/badge/-Node.js-white?style=for-the-badge)
![Redux](https://img.shields.io/badge/-Redux-9cf?style=for-the-badge)
![IndexedDB](https://img.shields.io/badge/-indexedDB-white?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/-Javascript-9cf?style=for-the-badge)
![HTML5](https://img.shields.io/badge/-HTML5-white?style=for-the-badge)
![CSS](https://img.shields.io/badge/-CSS-9cf?style=for-the-badge)
![Concurrently](https://img.shields.io/badge/-Concurrently-white?style=for-the-badge)
![If-Env](https://img.shields.io/badge/-If--Env-9cf?style=for-the-badge)
![Stripe](https://img.shields.io/badge/-Stripe-white?style=for-the-badge)
![JWT-decode](https://img.shields.io/badge/-JWT--Decode-9cf?style=for-the-badge)
![GraphQL](https://img.shields.io/badge/-GraphQL-white?style=for-the-badge) 
![Apollo](https://img.shields.io/badge/-Apollo-9cf?style=for-the-badge)
![Nodemon](https://img.shields.io/badge/-Nodemon-white?style=for-the-badge) 
![JsonWebToken](https://img.shields.io/badge/-JsonWebToken-9cf?style=for-the-badge)
![Bcrypt](https://img.shields.io/badge/-Bcrypt-white?style=for-the-badge)<br />
  
![Heroku](https://img.shields.io/badge/Deployed-Heroku-inactive?style=for-the-badge)![MongoDB](https://img.shields.io/badge/Database-MongoDb-inactive?style=for-the-badge)![MongoDB Atlas](https://img.shields.io/badge/Cloud%20Database-MongoDB%20Atlas-inactive?style=for-the-badge) 
  
  ## Questions
  Please reach out to me at [clairesylvester@clairecodes.dev](mailto:clairesylvester@clairecodes.dev?subject=[GitHub%shop-shop]%20Source%20Han%20Sans)

  ## Links
  - **[Deployed App](https://shop-shop-mern.herokuapp.com/)**
  - **[GitHub Repo](https://github.com/CFsylvester/shop-shop)**
  - **[My Portfolio](clairecodes.dev)**
  - **[Connect on LinkedIn](https://www.linkedin.com/in/claire-sylvester-386373143/)**
  - **[GitHub profile](https://github.com/CFsylvester)    ![Github Followers](https://img.shields.io/github/followers/CFsylvester?style=social)**

  ## License 
  This application uses the MIT license.  
