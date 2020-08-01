![Starter Logo](images/starter-logo.svg) ![NodeJS Logo](images/nodejs-logo.svg)

# 🚀 Welcome to huntapi

Backend developed in the **[Starter / NodeJS Course](https://rocketseat.com.br/starter)** by **[Rocketseat](https://rocketseat.com.br/)**.

It consists of an API connected to a Mongo database performing basic CRUD operations to handle storage of digital products.

## 🧰 Prerequisites
Make sure you have installed all of the following prerequisites on your machine:
* **[Git](https://git-scm.com/downloads)**;
* **[Node.js](https://nodejs.org/en/download/)** with npm package manager;
* **[Docker](https://docs.docker.com/engine/install/) OR [MongoDB](http://www.mongodb.org/downloads)** running on the default port (27017).

## 🔧 Install
### With Docker
```sh
$ docker pull mongo
$ git clone https://github.com/rhenangarcia/huntapi
$ cd huntapi/
$ npm install
```

### With MongoDB
```sh
$ git clone https://github.com/rhenangarcia/huntapi
$ cd huntapi/
$ npm install
```

## ⚙️ Usage
### With Docker
```sh
$ docker run --name mongodb -p 27017:27017 -d mongo
$ node server.js
```
* Access [http://localhost:3001/api/products](http://localhost:3001/api/products) on your browser.

### With MongoDB
```sh
$ node server.js
```
* Access [http://localhost:3001/api/products](http://localhost:3001/api/products) on your browser.

## 📚 API documentation
### *Product* data model
```
{
  "title": String,
  "description": String,
  "url": String,
  "createdAt": Date
}
```

### HTTP methods
* **`GET` /api/products&page=*PAGE_NUMBER***
  * Show detailed products list using pagination query.
* **`GET` /api/products/id**
  * Show product details by ID.
* **`POST` /api/products**
  * Create product sending a JSON body.
* **`PUT` /api/products/id**
  * Update product by ID sending a JSON body.
* **`DELETE` /api/products/id**
  * Delete product by ID.

## 👤 Author
* **GitHub: [@rhenangarcia](https://github.com/rhenangarcia)**
* **LinkedIn: [@rhenangarcia](https://linkedin.com/in/rhenangarcia)**

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

## 💓 Support me
Give a ⭐️ if this project helped you!

## 📝 License
This project is [MIT](LICENSE) licensed. 

**Copyright © 2020 [Rhenan Garcia](https://github.com/rhenangarcia).**