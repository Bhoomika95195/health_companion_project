# Health Companion - Ready-made MERN Boilerplate (Simplified)

This package is a starter implementation for *Project 2: Personalized Health & Wellness Companion*.
It includes:
- Backend: Node.js + Express + MongoDB with JWT authentication, biometric logging, and simple recommendation endpoints.
- Frontend: React (Vite) with pages for register/login, profile (biometric logging), and a weight chart.

## What's included
- /server: Express backend
- /client: React frontend (Vite)

## Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB (local) or MongoDB Atlas connection string

## Setup & Run (development)
1. Unzip the project if zipped.
2. Backend:
   - Open a terminal at `/server`
   - Copy `.env.example` to `.env` and set `MONGODB_URI` and `JWT_SECRET`
   - Run:
     ```
     npm install
     npm run dev
     ```
   - Server will run on port 5000 by default.

3. Frontend:
   - Open a terminal at `/client`
   - Copy `.env.example` to `.env` and ensure `VITE_API_URL` points to `http://localhost:5000/api`
   - Run:
     ```
     npm install
     npm run dev
     ```
   - Vite will start (commonly at http://localhost:5173). Open in browser.

## Default Notes & Security
- JWT secret in `.env` must be changed for production.
- OpenAI integration is not included — recommendation endpoints are rule-based. You can extend them to call an AI provider.
- This boilerplate is simplified for study/demo purposes. Add validation, rate-limiting, and stronger error handling before production.

## Files of interest
- server/routes/auth.js — register/login
- server/routes/biometric.js — log biometric data and query
- server/routes/recommendation.js — workout & meal endpoints
- client/src/pages/Profile.jsx — log data and request recommendations
- client/.env.example and server/.env.example — configure these

## If you need further customization
Tell me which parts you want extended (AI integration, Fitbit sync, push notifications, gamification), and I will add them.

----
Generated and bundled for you.
