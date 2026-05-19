# 🤖 AI API Debugger

An AI-powered backend tool that analyzes API errors and provides intelligent debugging insights.

## 🚀 Features
- Analyze API errors using AI
- Get explanation, root cause, and fixes
- Store debug history (MongoDB)
- Retrieve logs by ID
- Clean REST API design

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Gemini API (Google AI)

## 📌 API Endpoints

### POST /api/debug
Analyze API error

### GET /api/history
Get all debug logs

### GET /api/history/:id
Get specific debug log

## ⚡ Setup

```bash
npm install
npm run dev