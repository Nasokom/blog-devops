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

## Running Tests

### Unit test

#### Backend:

Start the back end test server:

```bash
cd backend
npm run start:test
```

In a new terminal run the backend tests

```bash
cd backend
npm run test
```

#### Frontend:

Start the frontend development server:

```bash
cd frontend
npm run dev
```

In a new terminal, run the frontend tests

```bash
cd frontend
npm run test
```

### End to end test

#### 1. Build the image and start applications

```bash
docker compose -f docker-compose.test.yml up --build -d
```

#### 2. Install Playwright dependencies

```bash
npx playwright install --with-deps chromium
```

#### 3. Run the E2E tests

```bash
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
