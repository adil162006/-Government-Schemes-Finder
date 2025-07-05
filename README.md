# 🇮🇳 Government Schemes Finder

A full-stack web application that helps Indian citizens discover government welfare schemes based on their age, state, and other personal details.

---

## 🚀 Features

- Filter welfare schemes based on:
  - Age
  - State/UT
  - Gender, income, category, and more
- View all schemes
- Searchable, responsive frontend
- MongoDB Atlas database with Node.js & Express backend

---

## 🧩 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (Cloud)
- **Others**: dotenv, MongoDB Compass

---
## 📁 Folder Structure

```text
government-schemes-finder/
├── frontend/                 # All frontend files
│   ├── index.html
│   ├── all-schemes.html
│   ├── style.css
│   ├── all-schemes.css
│   ├── script.js
│   └── all-schemes.js
│
├── backend/                  # Backend API and DB logic
│   ├── index.js              # Express server
│   ├── .env                  # MongoDB credentials (not committed)
│   ├── .env.example          # Template for .env
│   └── schemes.json          # Sample data for MongoDB
│
├── .gitignore
└── README.md


```
---

## 🛠️ MongoDB Atlas & Compass Setup

To store and query scheme data, we use **MongoDB Atlas** (cloud database) and **MongoDB Compass** (GUI client).

---

### ☁️ Step 1: Set up MongoDB Atlas

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a **free account** (or log in)
3. Create a **Free Shared Cluster**
   - Choose a cloud provider (AWS/GCP/Azure)
   - Select a region close to you (e.g., Mumbai)
4. Click **Database Access** → "Add New Database User"
   - Username: `your-username`
   - Password: `your-password`
   - Save these, you’ll use them in the `.env` file
5. Go to **Network Access** → Add IP Address
   - Add `0.0.0.0/0` to allow access from anywhere (for development)
6. Go to **Clusters** → "Connect" → "Connect your application"
   - Copy the **MongoDB URI**

Example URI (for `.env` file):
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/?retryWrites=true&w=majority


---

### 🧭 Step 2: Use MongoDB Compass (Optional but Recommended)

1. Download Compass: [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)
2. Paste the same MongoDB URI from Atlas into Compass to connect
3. Create a database:
   - **Database name**: `government_schemes`
   - **Collection name**: `schemes`
4. Click **"Add Data" → "Import File"**
   - Select the file given in the repository
   - name the database as **government_schemes**
   - name the collection as **schemes**

---

✅ Your database is now set up and ready to use with the backend server.


