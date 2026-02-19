# 🛒 Product CRUD API – Express & MongoDB

A simple **RESTful CRUD API** built using **Node.js, Express.js, and MongoDB**.  
This project demonstrates backend fundamentals such as routing, validation, database operations, and error handling.

---

## 🚀 Features
- ➕ Create Product (POST)
- 📄 Get All Products (GET)
- 🔍 Get Product by ID (GET)
- ✏️ Update Product (PUT)
- 🗑 Delete Product (DELETE)
- ✅ Input Validation
- ⚠️ Centralized Error Handling

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Express-Validator**
- **Git & GitHub**

---

## 📁 Project Structure
project-root/
├── controllers/ # Business logic<br>
├── middleware/ # Validation & error handling<br>
├── models/ # MongoDB schemas<br>
├── routes/ # API routes<br>
├── server.js # Entry point<br>
└── .env # Environment variables<br>

---

## 🚀 Project Preview
1. POST
<img src="./assets/post.png" width="800"/>
2. GET
<img src="assets/get.png" width="800"/>
3. PUT
<img src="assets/put.png" width="800"/>
4. DELETE
<img src="assets/delete.png" width="800"/>

---


## ⚙️ Installation & Setup

### Clone Repository
```bash
git clone https://github.com/PranavDDabade/Soft-Nexis-Internship-tasks.git
cd <repo-name>
```
### Install Dependencies
```bash
npm install
```
### Setup .env file
```bash
MONGODB_URI=mongodb://localhost:27017/products-db
PORT=3000
```
### Run Backend
```bash
node server.js
```

