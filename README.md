# BLOG-DEVOPS

A **containerized blog web application** built for educational purposes as a submission for the **University of Helsinki – Full Stack Open (FS Containers)** course.

## Learning Objectives

This project was developed to practice:

- Docker and Docker Compose
- Multi-container application architecture
- Nginx as a reverse proxy
- Building and deploying React and Node.js applications
- JWT authentication
- Automated testing with Vitest and Playwright

## Project Architecture

```
                Nginx Reverse Proxy
                       │
        ┌──────────────┴──────────────┐
        │                             │
   React Frontend              Express Backend
 (Vite + Redux Toolkit)     (REST API + JWT + MongoDB)
```

### Frontend (`./frontend`)

- React
- Vite
- Redux Toolkit
- Vitest for unit testing

### Backend (`./backend`)

- Node.js
- Express
- REST API
- JWT authentication
- MongoDB

### Reverse Proxy

- Nginx

---

## Running the Application

### Development

```bash
docker compose -f docker-compose.dev.yml up --build
```

### Production

```bash
docker compose -f docker-compose.yml up --build
```

---

## Running End-to-End Tests

### Local Environment

Start the backend in test mode:

```bash
cd backend
npm run start:test
```

Start the frontend:

```bash
cd frontend
npm run dev
```

Install Playwright and run the tests:

```bash
npx playwright install --with-deps chromium
npm run test
```

---

### Docker Compose

#### 1. Build the backend test image

```bash
cd backend

docker build \
  --build-arg START_CMD="npm run start:test" \
  -t blog-backend \
  -f Dockerfile .
```

#### 2. Start the application

```bash
docker compose -f docker-compose.yml up
```

#### 3. Run the Playwright tests

```bash
npx playwright install --with-deps chromium
npm run test
```

---

## Tech Stack

- Docker & Docker Compose
- Nginx
- React
- Vite
- Redux Toolkit
- Node.js
- Express
- MongoDB
- JWT Authentication
- Vitest
- Playwright
