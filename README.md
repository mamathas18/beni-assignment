# Full Stack Assignment – React + FastAPI (Deployed on AWS EC2)

This project contains:

- **Backend**: FastAPI (Python)
- **Frontend**: React
- Hosted on **Amazon EC2**

---

## 📁 Project Structure

.
├── Backend
│ ├── main.py
│ ├── requirements.txt
│ └── startup.txt
│
├── Frontend
│ └── myapp
│ ├── package.json
│ └── src
│ └── App.js
│
└── README.md


---

# 🚀 Backend Setup (FastAPI)

### Step 1 – Go to Backend folder

```bash
cd Backend
Step 2 – Install Python & pip (Amazon Linux)
sudo yum install python3 python3-pip -y
Verify:

python3 --version
pip3 --version
Step 3 – Install backend dependencies
Edit requirements.txt:

fastapi
uvicorn[standard]
Install:

pip3 install -r requirements.txt
Step 4 – Run FastAPI server
uvicorn main:app --host 0.0.0.0 --port 8000
Backend will run at:

http://13.201.99.242:8000/api/facts
✅ Open EC2 Security Group Ports
Allow inbound:

Port	Purpose
22	SSH
8000	FastAPI
3000	React
🚀 Frontend Setup (React)
Step 1 – Go to frontend folder
cd ../Frontend/myapp
Step 2 – Install Node & npm (Amazon Linux)
sudo yum install nodejs npm -y
Verify:

node -v
npm -v
Step 3 – Install React dependencies
npm install
Step 4 – Start React app
npm start
Frontend will run at:

http://13.201.99.242:3000
🔗 API Integration
Frontend fetches data from:

http://13.201.99.242:8000/api/facts
CORS is enabled in FastAPI:

allow_origins=["http://13.201.99.242:3000"]
✅ Test
Open browser:

Frontend:

http://13.201.99.242:3000
Backend:

http://13.201.99.242:8000/api/facts
🧠 Tech Stack
React

FastAPI

Uvicorn

AWS EC2

Node.js

Python 3

✨ Author
Mamatha S
B.Tech Computer Science


---
