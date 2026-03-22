# 🔐 MERN Authentication App

A full-stack **MERN (MongoDB, Express, React, Node.js)** authentication system with JWT-based login, register, and protected dashboard.

---

## 🚀 Features

* ✅ User Registration (with hashed password)
* 🔐 Secure Login with JWT Token
* 🛡️ Protected Dashboard Route
* 👁️ Show/Hide Password Feature
* 🔄 Redirect after Register & Login
* 🚪 Logout Functionality
* 🎨 Modern UI (Glassmorphism + Gradient)

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Axios
* React Router DOM

**Backend:**

* Node.js
* Express.js
* MongoDB (Atlas)
* JWT (jsonwebtoken)
* bcryptjs

---

## 📁 Project Structure

```
mern-auth-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone
cd mern-auth-app
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create a `.env` file inside backend:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend server:

```
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

Open new terminal:

```
cd frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🔑 How It Works

1. User registers → password gets hashed using bcrypt
2. User logs in → JWT token is generated
3. Token stored in localStorage
4. Protected routes validate token
5. Dashboard shows user details

---

## 💡 Future Improvements

* 🔔 Toast notifications (instead of alerts)
* 🔐 Password strength checker
* 🌙 Dark mode toggle
* 📱 Responsive design improvements

---

## 👨‍💻 Author

**Hemant Sharma**

* GitHub: https://github.com/Hemant7771

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
