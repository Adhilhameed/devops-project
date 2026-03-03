# 🚀 React Frontend DevOps Project

This repository contains a production-ready React frontend application containerized using Docker and served with Nginx.

The goal of this project is to demonstrate:
- Multi-stage Docker builds
- Nginx production server
- Docker-based deployment
- CI/CD ready structure

---

## 🛠️ Tech Stack

Frontend:
- React
- JavaScript
- CSS

DevOps:
- Docker
- Nginx
- Docker Compose (optional)
- GitHub Actions (CI/CD ready)

---

## 📂 Project Structure

frontend/
│
├── src/
├── public/
├── Dockerfile
├── nginx.conf
├── package.json
├── package-lock.json
├── docker-compose.yml
└── README.md

---

## ⚙️ Run Locally (Development Mode)

Install dependencies:

npm install

Start development server:

npm start

Application runs at:
http://localhost:3000

---

## 🐳 Run with Docker (Production Mode)

Build Docker Image:

docker build -t react-frontend .

Run Docker Container:

docker run -p 80:80 react-frontend

Application runs at:
http://localhost

---

## 🏗️ Docker Architecture

This project uses a multi-stage Dockerfile:

Stage 1 – Build
- Uses Node.js to install dependencies
- Creates optimized production build using npm run build

Stage 2 – Production
- Uses Nginx Alpine image
- Serves static React build files

Benefits:
- Smaller image size
- Faster deployment
- Production-ready setup

---

## 🎯 Purpose

This project is created for learning and demonstrating:
- Frontend containerization
- Production deployment best practices
- DevOps workflow implementation

---

## 📄 License

This project is for educational and DevOps practice purposes.