
```md
# 🚀 Taskly

Taskly is a simple and modern **Task Tracker application** built using **React, Node.js, Tailwind CSS, MongoDB, and Firebase**.  
Firebase is used for **user authentication**, and MongoDB is used to store user tasks.

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Authentication:** Firebase  

---

## 📁 Project Structure
Taskly
├── Frontend
├── Backend
└── README.md
```



````

---

## ⚙️ Frontend Setup

### 1. Clone the repository

```bash
git clone https://github.com/sujal402/Taskly.git
cd Frontend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file inside the **Frontend** folder and add:

```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=G-WKG8KDPKHT
```

> ⚠️ Do not commit `.env` files to GitHub.

---

### 4. Run the frontend

```bash
npm start
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🗄 Backend & MongoDB Setup

### 1. Navigate to backend folder

```bash
cd Backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/todoapp
```

---

### 4. Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

---

### 5. Run the backend server

```bash
npm start
```

---
