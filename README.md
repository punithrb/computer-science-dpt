# 🎓 Computer Science Department Management System

A full-stack MERN application designed to manage academic, administrative, and student workflows in a Computer Science Department.  
The system provides **role-based dashboards** for **Admin**, **Faculty**, and **Students**, each featuring tools tailored to department operations.

---

## ✨ Core Modules

| Role | Main Capabilities |
|------|------------------|
| 🧑‍💻 **Admin** | Manage Students, Staff, Courses, Placements, and Analytics |
| 👨‍🏫 **Faculty/Staff** | Attendance, Assignments, Marks, Quizzes, Event Management |
| 👩‍🎓 **Student** | View Attendance, Marks, Assignments, Quizzes & Register for Events |

---

## 🔥 Detailed Feature Breakdown

### 🧑‍💻 Admin Dashboard
| Feature | Description | Backend File |
|--------|-------------|--------------|
| Manage Students | Add/View/Edit/Delete students by class & section | `backend/controller/student/manageStudent.js` |
| Manage Staff | CRUD staff details & assign courses | `backend/controller/staff/manageStaff.js` |
| Manage Courses | Add subjects & map them to batches | `backend/controller/courses/manageCourses.js` |
| Placements | Track placement drives & placed students | *(Frontend/Mock Data)* |
| Analytics | Summary of students, staff, courses & performance | `backend/controller/admin/dashboard.js` |

---

### 👨‍🏫 Faculty Dashboard
| Feature | Description | Backend |
|--------|-------------|----------|
| Assignments | Upload & track submissions | `backend/controller/staff/assignment.js` |
| Attendance | Take/View/Edit attendance | `backend/controller/staff/attendance.js` |
| Quiz Management | Create quizzes, add questions, view results | `backend/controller/quiz2/manageQuiz.js` |
| Marks Entry | Upload IA1/IA2/IA3 marks | `backend/controller/marks/manageMarks.js` |
| Event Management | Create events and view registered teams | `backend/controller/event/manageEvent.js` |

---

### 👩‍🎓 Student Dashboard
| Feature | Description | Backend |
|--------|-------------|----------|
| Attendance View | View course-wise attendance graph | `backend/controller/student/getAttendanceData.js` |
| Marks View | View IA marks for each subject | `backend/controller/marks/manageMarks.js` |
| Quiz Attempt | Timer-based quiz submission system | `backend/controller/quiz2/manageSubmission.js` |
| Assignments | View deadlines + submitted status | `backend/controller/staff/assignment.js` |
| Event Registration | Register solo/team for events | `backend/controller/event/manageEvent.js` |

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite + Material UI + Recoil |
| Backend | Node.js + Express + JWT |
| Database | MongoDB + Mongoose |
| Authentication | Role-based JWT (Admin/Staff/Student) |

---

## 📦 Folder Structure

```bash
project/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── lib/insertSampleData.js
│   └── .env
└── frontend/
    ├── src/components/
    ├── src/pages/
    ├── recoil/
    └── vite.config.js
```

---

## 🔧 Installation & Setup

### 1️⃣ Backend Setup
```bash
cd backend
npm install
```

Create `.env` in backend:
```bash
MONGO_BASE_URL="mongodb+srv://<user>:<password>@<cluster>/csedept"
JWT_TOKEN_SECRET="YOUR_ULTRA_SECRET_KEY"
PORT=8000
```

Start the server:
```bash
npm start
```

---

### 2️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Open in browser:  
**http://localhost:5173**

---

## 🔐 Default Login Credentials (Sample)

| Role | Username | Password | Route |
|------|----------|----------|-------|
| Admin | admin1 / sanju@example.com | `Admin@123` | `/signin/admin` |
| Staff | staff1 / ramesh.kumar@college.edu | `Staff@123` | `/signin/staff` |
| Student | USN001 / a@g.com | `123456` | `/signin/student` |

> These credentials work only if sample data (`backend/lib/insertSampleData.js`) was executed successfully.

---

## 🏷 Badges

![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Express](https://img.shields.io/badge/API-Express-black)
![React](https://img.shields.io/badge/UI-React-blue)
![NodeJS](https://img.shields.io/badge/Server-Node.js-lightgreen)
![MUI](https://img.shields.io/badge/Design-MUI-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-yellow)

---

## 🚀 Future Enhancements
- Automated placement tracking system  
- Student feedback + grading visualization  
- Google login / OTP authentication  
- Mobile app using React Native  

---

## 🤝 Contributing
Pull requests are welcome!  
Feel free to file issues, request features, or enhance modules.

---

## 📝 License
MIT License © 2025 — Free for education & institutional use.

---

### ⭐ Like this project? **Star the repo!**  
