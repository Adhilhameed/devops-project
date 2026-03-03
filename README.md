# 🚀 React Frontend DevOps Project

This repository contains a production-ready React frontend application containerized using Docker and served with Nginx.

The project demonstrates:
- Multi-stage Docker builds
- Production-ready Nginx configuration
- Docker-based deployment
- CI/CD ready structure
- Live cloud deployment on Vercel

---

## 🌍 Live Demo

Frontend is deployed on Vercel:

https://adhil-cloud.vercel.app/

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
- Vercel (Cloud Deployment)

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
- Secure and optimized container

---

## 🚀 Deployment

The frontend is deployed publicly using Vercel:

https://adhil-cloud.vercel.app/

This setup ensures:
- Fast global CDN delivery
- Automatic builds from GitHub
- Continuous deployment support

---

## 🎯 Purpose

This project is created for learning and demonstrating:
- Frontend containerization
- Production deployment best practices
- DevOps workflow implementation
- Modern cloud hosting integration

---

## 📄 License

This project is for educational and DevOps practice purposes.