# 🇮🇳 Government Schemes Finder

A full-stack web application that helps Indian citizens discover government welfare schemes based on personal details like age, state, income, social category, and more.

---

## 📂 Folder Structure

government-schemes-finder/
│
├── frontend/ # All frontend files (HTML, CSS, JS)
│ ├── index.html
│ ├── all-schemes.html
│ ├── style.css
│ ├── all-schemes.css
│ ├── script.js
│ └── all-schemes.js
│
├── backend/ # Express server and MongoDB logic
│ ├── index.js
│ └── schemes.json # Data file to import into MongoDB
│
├── .gitignore
└── README.md


---

## 🚀 Features

- User-friendly form to collect personal and demographic details
- Filters and displays government schemes based on user eligibility
- Separate page to view all schemes
- Backend API using Node.js, Express
- MongoDB integration (Atlas or Compass)
- Data import support via JSON

---

## 🔧 Prerequisites

- Node.js & npm
- MongoDB Atlas account or MongoDB Compass locally
- MongoDB Database Tools (`mongoimport`)

---

## 🔌 Backend Setup (`backend/`)

### 1. Navigate to the backend folder

```bash
cd backend
☁️ MongoDB Atlas (Recommended)
Visit https://www.mongodb.com/cloud/atlas and sign up

Create a new Free Cluster

Add your IP to whitelist (or use 0.0.0.0/0)

Click Connect > Connect your application and copy the URI

Replace the URI in backend/server.js: