# 🧠 The Echoes of the Mind

Welcome to **The Echoes of the Mind** — a powerful backend application crafted for robust, scalable, and secure server-side infrastructure.

---

🔗 **Live Project**:  
[**The Echoes of the Mind**](https://echoes-of-the-mind.vercel.app/)  
<sub><i>(Click the link above to explore the live deployment)</i></sub>

---

## 📖 Description

**The Echoes of the Mind** is an innovative backend service built using modern web technologies. Designed for efficiency and scalability, it follows best practices to ensure top-tier performance and security.

---

## ✅ Features

- 🔐 **User Authentication**  
  Secure login & registration using **JWT (JSON Web Tokens)**.

- 📝 **Post Management**  
  Create, Read, Update, Delete (CRUD) operations for user posts.

- 🛠️ **Admin Dashboard**  
  Admins can block users and delete posts.

- 🧾 **Authorization System**  
  All routes are protected. Access requires valid tokens.

- 🧱 **Error Handling**  
  Clean error responses with helpful messages.

- 🗃️ **MongoDB Integration**  
  Fast, secure, and optimized database operations using Mongoose.

---

## 🛠️ Tech Stack

**Backend:**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Zod (for validation)
- dotenv
- CORS
- bcrypt

**DevOps / Deployment:**

- Vercel

---

## 🧰 Setup & Installation

### ✅ Prerequisites

- 📦 [Node.js](https://nodejs.org/) installed  
- 🌐 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) database setup

---

### 📥 Clone the Repository

```bash
git clone https://github.com/yourusername/echoes-of-the-mind.git
cd echoes-of-the-mind
```
📦 Install Dependencies
```bash


npm install
```
⚙️ Create Environment Variables
Create a .env file in the root directory:

env
```bash


PORT=3000

MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
GEN_SALT=your-gen-salt
ACCESS_TOKEN_SECRET=your-access-token-secret
```
▶️ Start the Application
```bash

npm start
```
Now open http://localhost:3000 in your browser 🎉

🧪 Usage Guide
✅ Register a new user

🔑 Login to receive a token

🛡️ Use token in Authorization headers to access secure routes

📝 Create / Edit / Delete posts

👮 Admins can block users and manage content

📬 Contact
Got questions or feedback?

📧 Email: zzayediqbalofficial@gmail.com


