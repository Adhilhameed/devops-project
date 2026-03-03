# 🚀 React Frontend DevOps Project

This repository contains a production-ready React frontend application demonstrating modern DevOps practices including CI, Docker containerization, and cloud deployment.

---

## 🌍 Live Demo

🔗 https://adhil-cloud.vercel.app/

The application is deployed on Vercel with automatic deployment from GitHub.

---

## 📌 Project Overview

This project demonstrates:

- ✅ React frontend development
- ✅ CI using GitHub Actions
- ✅ Docker multi-stage build
- ✅ Production-ready Nginx configuration
- ✅ Automated workflow pipeline
- ✅ Cloud deployment on Vercel

---

## ⚙️ CI/CD Pipeline

The GitHub Actions workflow performs:

1. Install dependencies  
2. Run tests  
3. Build the React application  
4. Build and push Docker image  

Deployment is handled automatically by Vercel via GitHub integration.

---

## 🐳 Docker Setup

This project uses a multi-stage Docker build:

- Stage 1: Build React app
- Stage 2: Serve using Nginx

### Build Docker Image

```bash
docker build -t react-devops-app .
```

### Run Docker Container

```bash
docker run -p 3000:80 react-devops-app
```

Application runs at:

```
http://localhost:3000
```

---

## 💻 Run Locally (Development)

```bash
npm install
npm start
```

Application runs at:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
.github/workflows/   → CI pipeline
src/                 → React source code
public/              → Static files
Dockerfile           → Multi-stage Docker build
README.md            → Project documentation
```

---

## 📬 Contact Form

The contact form is UI-based and demonstrates frontend form handling with validation and success notification.

In a production scenario, it can be integrated with:
- EmailJS
- Formspree
- Custom backend API

---

## 🛠 Tech Stack

- React
- GitHub Actions
- Docker
- Nginx
- Vercel
- Git

---

## 🎯 Purpose of This Project

To demonstrate frontend DevOps skills including:

- CI pipeline creation
- Docker containerization
- Automated builds
- Cloud deployment workflow

---

## 🏁 Status

✅ Project Completed  
🚀 Production Ready  
🌍 Live on Vercel  

---