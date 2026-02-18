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
├── controllers/ # Business logic
├── middleware/ # Validation & error handling
├── models/ # MongoDB schemas
├── routes/ # API routes
├── server.js # Entry point
└── .env # Environment variables

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/PranavDDabade/Soft-Nexis-Internship-tasks.git
cd <repo-name>
npm install
MONGODB_URI=mongodb://localhost:27017/products-db
PORT=3000
node server.js

```
---

## 🧪 Testing APIs

You can test the API using **Postman**, **Thunder Client**, or **cURL** commands in the terminal.

### 1️⃣ Create Product – POST
```bash
curl -X POST http://localhost:3000/products \
-H "Content-Type: application/json" \
-d '{"name":"Laptop","price":1200}'
```
