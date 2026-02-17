# Task Board Frontend App

## Overview
This is a **Task Board application** built as part of the **Frontend Internship Assignment at Hintro**.  
The app allows users to manage tasks efficiently with features like add/edit/delete tasks, drag & drop between columns, search, filter, and activity tracking.  

**Technologies Used:**
- **React** - Frontend library  
- **Vite** - Fast development & build  
- **localStorage** - Persistence of tasks  
- **Vitest + React Testing Library** - Basic testing  

---

## Features Implemented
1. **Static Login Flow**
   - Hardcoded credentials:
     - Email: `intern@demo.com`  
     - Password: `intern123`
   - Error messages on invalid login  
   - Remember me via localStorage  

2. **Task Board**
   - Columns: **Todo, Doing, Done**  
   - Add / Edit / Delete tasks  
   - Drag & Drop tasks between columns  
   - Task properties:
     - Title (required)  
     - Description  
     - Priority (Low / Medium / High)  
     - Due Date  
     - CreatedAt  
   - Search tasks by title  
   - Reset Board option with confirmation  

3. **Persistence & Reliability**
   - Board state persists across page refresh  
   - localStorage safely handles empty/missing storage  

4. **Activity Log**
   - Tracks latest actions:
     - Task created  
     - Task edited  
     - Task moved  
     - Task deleted  

5. **Basic Testing**
   - Login page render test  
   - TaskBoard render test  
   - Add Task button existence test  

---

## Setup Instructions

### 1. Clone Project

     git clone:   https://spectacular-bublanina-a8cb62.netlify.app
     cd task-board 

### 2. Install Dependencies
           npm install

### 3. Run Locally

          npm run dev
Open browser: http://localhost:5173
## Deployment
