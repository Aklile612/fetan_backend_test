
# Task Manager API

A simple RESTful backend for a Task Manager system built with **Express.js**, **MongoDB**, and **JWT authentication**.

This is part of the Fetan System Technology internship test project.

---

## Features

- User Sign Up and Login
- JWT-based Authentication
- Protected User Profile Endpoint
- Task CRUD:
  - Create Task
  - Get Tasks with Search & Pagination
  - Update Task Status
  - Delete Task

---

## Tech Stack

- **Backend Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, bcryptjs
- **Deployment:** Render 
- **Others:** dotenv, cors, nodemon

---

## Installation

```bash
git clone https://github.com/Aklile612/fetan_backend_test
cd go-task-manager
npm install
````

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

---

## Run the Server

```bash
npm run dev
```

---

## API Endpoints

### Auth

| Method | Endpoint  | Description          |
| ------ | --------- | -------------------- |
| POST   | `/signup` | Create user account  |
| POST   | `/login`  | Log in and get token |

### User

| Method | Endpoint   | Description                     |
| ------ | ---------- | ------------------------------- |
| GET    | `/profile` | Get user profile (JWT required) |

### Tasks

| Method | Endpoint     | Description                     |
| ------ | ------------ | ------------------------------- |
| POST   | `/tasks`     | Create new task                 |
| GET    | `/tasks`     | Get tasks (search + pagination) |
| PATCH  | `/tasks/:id` | Update task status              |
| DELETE | `/tasks/:id` | Delete task                     |


## Deployed API

Live API: `https://fetan-backend-test.onrender.com`
