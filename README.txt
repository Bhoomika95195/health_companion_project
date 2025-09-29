# Health & Wellness Companion 🩺

A full-stack MERN application designed as a personalized health and wellness platform. [cite_start]This tool allows users to track their biometric data, receive personalized recommendations, and visualize their progress over time, acting as a smart personal trainer and nutritionist[cite: 490].

This project serves as a comprehensive final-year engineering project, demonstrating a full development lifecycle from setup to a feature-rich application.

---

## ✨ Key Features

* [cite_start]**Secure User Authentication**: Safe and secure user registration and login system using JSON Web Tokens (JWT)[cite: 1112].
* [cite_start]**Biometric Data Logging**: Users can manually log key health metrics such as weight, heart rate, sleep duration, and steps[cite: 500].
* **Personalized Recommendations**: Receive rule-based workout and meal plan recommendations based on your profile and activity level.
* [cite_start]**Interactive Dashboard**: Visualize your progress with dynamic charts that track your weight over time[cite: 576, 580].
* [cite_start]**Responsive UI**: A clean, modern, and mobile-responsive user interface built with React[cite: 1121].

---

## 🛠️ Technology Stack

This project is built using the MERN stack and other modern web technologies.

* **Frontend**: React, React Router, Chart.js, Axios
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (with Mongoose)
* **Authentication**: JSON Web Tokens (JWT), bcryptjs

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### **Prerequisites**

You will need the following software installed on your computer:
* [Node.js](https://nodejs.org/) (v18+ recommended)
* [npm](https://www.npmjs.com/) (included with Node.js)
* [MongoDB](https://www.mongodb.com/try/download/community) (if running locally) or a MongoDB Atlas account.

### **Installation & Setup**

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    cd your-repository-name
    ```

2.  **Setup the Backend Server**
    ```sh
    # Navigate to the server directory
    cd server

    # Install dependencies
    npm install

    # Create a .env file and add your variables (see .env.example)
    cp .env.example .env

    # Start the server
    npm run dev
    ```
    The server will be running on `http://localhost:5000`.

3.  **Setup the Frontend Client**
    ```sh
    # Open a new terminal and navigate to the client directory
    cd client

    # Install dependencies
    npm install

    # Create a .env file (see .env.example)
    cp .env.example .env

    # Start the client
    npm run dev
    ```
    The application will open automatically in your browser at `http://localhost:5173` (or another available port).

---

### **Environment Variables**

You will need to create `.env` files in both the `/server` and `/client` directories.

**`/server/.env`**
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

**`/client/.env`**
## 🔮 Future Enhancements

This project has a solid foundation with many opportunities for future development, as outlined in the project plan:

* [cite_start]**AI-Powered Recommendations**: Integrate a true AI engine (like OpenAI or Gemini) to provide highly personalized and adaptive workout and meal plans[cite: 536, 750].
* [cite_start]**Third-Party API Integration**: Allow users to automatically sync their data from fitness trackers like Fitbit or Google Fit[cite: 501].
* [cite_start]**Gamification**: Introduce badges, points, and streaks to improve user engagement and motivation[cite: 622].
* [cite_start]**Community Features**: Add the ability for users to connect with friends or book sessions with health experts[cite: 616].
