# Full Stack Assignment – React + FastAPI on AWS EC2

This project is a simple full-stack application with a React frontend and FastAPI backend deployed on Amazon EC2.

---

## 📁 Project Structure

.
├── Backend  
│   ├── main.py  
│   └── requirements.txt  

├── Frontend  
│   └── myapp  
│       ├── package.json  
│       └── src/App.js  

---

## 🚀 Backend Setup (FastAPI)

Go to Backend folder:

cd Backend

Install Python and pip:

sudo yum install python3 python3-pip -y

Edit requirements.txt:

fastapi  
uvicorn[standard]

Install backend dependencies:

pip3 install -r requirements.txt

Run backend:

uvicorn main:app --host 0.0.0.0 --port 8000

Backend URL:

http://13.201.99.242:8000/api/facts

---

## 🚀 Frontend Setup (React)

Go to frontend:

cd Frontend/myapp

Install Node and npm:

sudo yum install nodejs npm -y

Install dependencies:

npm install

Start frontend:

npm start

Frontend URL:

http://13.201.99.242:3000

---

## 🔓 EC2 Security Group Ports

22 – SSH  
8000 – FastAPI Backend  
3000 – React Frontend  

---

## 🧠 Tech Stack

React  
FastAPI  
Uvicorn  
AWS EC2  
Node.js  
Python  

---

## ✨ Author

Mamatha S  
B.Tech Computer Science 
