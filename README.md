<p align="center">
  <img src="./frontend/public/duplicate_py.jpg" alt="Duplicate Finder" width="auto" />
</p>

## 🧩 Duplicate Finder Dashboard

> **A smart, time-saving data cleaning tool designed for educational institutions like Parul University to automatically detect and remove duplicate student entries in Excel files.**

---

## 📖 Table of Contents

1. [Introduction](#-introduction)
2. [How the Idea Came to Existence](#-how-the-idea-came-to-existence)
3. [Why It’s Necessary for Institutions Like Parul University](#-why-its-necessary-for-institutions-like-parul-university)
4. [Project Overview](#-project-overview)
5. [System Architecture](#-system-architecture)
6. [Core Features](#-core-features)
7. [Technical Stack & Cost Optimization](#-technical-stack--cost-optimization)
8. [Deployment Overview](#-deployment-overview)
9. [Future Enhancements](#-future-enhancements)
10. [Acknowledgements](#-acknowledgements)

---

## 🏫 Introduction

In large educational institutions like **Parul University**, managing massive datasets—especially student admission data—can become overwhelming.

When hundreds or thousands of student records are maintained manually in Excel, **duplicate entries** based on contact numbers, email IDs, or Aadhaar numbers can lead to:

- Mismanaged admission counts
- Financial reporting errors
- Accreditation inconsistencies
- Administrative inefficiency

The **Duplicate Finder Dashboard** provides an elegant and automated way to detect and eliminate such duplicate records, ensuring data accuracy and integrity.

---

## 💡 How the Idea Came to Existence

| Phase                          | Problem Observed                                                                                                  | Insight                                                   | Outcome                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------- |
| **1. Manual Checking**         | Staff members were manually checking thousands of rows in Excel sheets for duplicate students.                    | Human errors and time wastage were inevitable.            | Need for automation.                     |
| **2. Backend Script**          | A Python script was built using Pandas to process Excel files and find duplicates efficiently.                    | Solved the technical issue but required coding knowledge. | Only technical users could operate it.   |
| **3. Frontend Dashboard Idea** | The next step was to make this solution usable for **non-technical staff** (like admission and academic offices). | Introduce a simple web-based dashboard.                   | **Duplicate Finder Dashboard** was born. |

---

## 🏢 Why It’s Necessary for Big Institutions Like Parul University

Large universities handle **massive, multi-departmental student datasets** every year. Without automation:

- Duplicate entries can **skew admission metrics** and **budget allocations**.
- Manual reconciliation between Excel sheets takes **days or even weeks**.
- Data inconsistencies affect **AI-based analytics, dashboards, and ERP systems**.

This tool directly addresses those issues by providing:

| Benefit                       | Impact                                                             |
| ----------------------------- | ------------------------------------------------------------------ |
| Automated Duplicate Detection | Ensures clean, validated student records.                          |
| Time Efficiency               | Reduces manual work from hours to seconds.                         |
| Non-Technical Usability       | No coding skills required — just upload and download.              |
| Yearly Data Insights          | Visualize trends in duplicate data year-over-year.                 |
| Institutional Intelligence    | Enables better reporting, compliance, and accreditation readiness. |

---

## 🚀 Project Overview

**Goal:**  
To build a **simple, modern web interface** for the existing Python backend that performs duplicate detection on Excel files.

**Current Backend Capabilities:**

- Accepts `.xlsx` file uploads
- Converts them to `.csv` for internal processing
- Detects duplicates based on **phone number**, **email**, and **Aadhaar number**
- Converts processed data back to `.xlsx` for user download

**Frontend Requirement:**  
A **clean and intuitive dashboard** for non-technical users.

---

## ⚙️ System Architecture

```plaintext
        ┌───────────────────────────────┐
        │         User (Frontend)       │
        │   - Upload Excel File         │
        │   - View Stats & Graphs       │
        │   - Download Cleaned File     │
        └─────────────┬─────────────────┘
                      │
             (HTTP Request / API Call)
                      │
        ┌─────────────▼─────────────────┐
        │       Python Backend (API)    │
        │   - Receives XLSX file        │
        │   - Converts to CSV           │
        │   - Detects duplicates        │
        │   - Converts to XLSX again    │
        │   - Returns deduplicated file │
        └─────────────┬─────────────────┘
                      │
               (Pandas Processing)
                      │
        ┌─────────────▼─────────────────┐
        │        File Output (XLSX)     │
        │   - Cleaned & Downloadable    │
        └───────────────────────────────┘

```

### ⚙️ Installation

```bash
git clone https://github.com/jaluiovilash/duplicatefinder-python.git
cd duplicatefinder-python
pip install -r requirements.txt
python app.py
```

## 🧭 Core Features

## 1. Dashboard Layout

| **Section**      | **Description**                                  |
| ---------------- | ------------------------------------------------ |
| **Sidebar Tabs** | Home, Stats (Analysis), Find Duplicates          |
| **Top Navbar**   | Simple Login / Logout (UI only, no backend auth) |

---

## 2. Home Page

Displays essential summary statistics:

| **Metric**                  | **Description**                                  |
| --------------------------- | ------------------------------------------------ |
| **Total Files Processed**   | Shows total number of Excel files uploaded       |
| **Total Duplicates Found**  | Displays number of duplicate records detected    |
| **Current Year Admissions** | Summary for 2024 / 2025 data                     |
| **Quick Metrics**           | Cards showing “Duplicates Found This Year”, etc. |

---

## 3. Stats (Analysis) Page

- Displays **bar or line graphs** for year-wise duplicate distribution.
- Example: Compare duplicates in **2023, 2024, 2025**.
- Graphs update dynamically when new files are processed.

---

## 4. Find Duplicates Page

| **Step** | **Function**                                |
| -------- | ------------------------------------------- |
| 1        | Upload `.xlsx` file                         |
| 2        | Display “Processing your file...” animation |
| 3        | Send file to backend via API                |
| 4        | Backend identifies and removes duplicates   |
| 5        | Download the cleaned `.xlsx` file           |

---

## 🧰 Technical Stack & Cost Optimization

### **Frontend**

| **Tool**                | **Purpose** | **Why Used**                                  |
| ----------------------- | ----------- | --------------------------------------------- |
| **Next.js (React)**     | Build UI    | Easy API integration, supports static hosting |
| **Tailwind CSS**        | Styling     | Lightweight and responsive                    |
| **Recharts / Chart.js** | Graphs      | Simple data visualization                     |
| **Axios / Fetch API**   | API Calls   | Connects frontend and backend efficiently     |

**Hosting:** Vercel _(Free)_ or Netlify _(Free)_

---

### **Backend**

| **Tool**               | **Purpose**        | **Why Used**                                    |
| ---------------------- | ------------------ | ----------------------------------------------- |
| **FastAPI / Flask**    | REST API Server    | Lightweight and fast                            |
| **Pandas + openpyxl**  | Excel Processing   | Handles duplicate detection and file conversion |
| **Uvicorn / Gunicorn** | Application Server | Efficient API execution                         |

**Hosting:** Render or Railway _(Free tiers available)_

---

### **💰 Cost Breakdown Summary**

| **Layer**         | **Technology**          | **Hosting Platform** | **Monthly Cost** |
| ----------------- | ----------------------- | -------------------- | ---------------- |
| **Frontend**      | Next.js + Tailwind      | Vercel / Netlify     | $0               |
| **Backend**       | FastAPI + Pandas        | Render / Railway     | $0–$5            |
| **File Handling** | Local temporary storage | Included             | $0               |
| **Domain**        | Cloudflare / Namecheap  | Optional             | ~$1              |

**🟢 Estimated Total:** `$0–$5` per month _(ideal for small institutional deployment)_

---

## 🌐 Deployment Overview

### **Backend Deployment (Example: Render)**

1. Push your Python backend to **GitHub**.
2. Create a **Render Web Service**.
3. Set the start command:

```bash
uvicorn main:app --host 0.0.0.0 --port 10000
```

4. Add CORS support:

```bash
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## **Frontend Deployment (Example: Vercel)**

1. Push your Next.js project to GitHub.
2. Import the repository to Vercel.
3. Add the backend URL in .env.local:

```bash
NEXT_PUBLIC_API_URL=https://duplicate-backend.onrender.com
```

4. Deploy instantly and test your dashboard.

## **🔮 Future Enhancements**

| **Feature**               | **Description**                            |
| ------------------------- | ------------------------------------------ |
| **Database Integration**  | Store history of processed files           |
| **Authentication**        | Add user roles (Admin, Staff)              |
| **Batch File Processing** | Handle multiple Excel files simultaneously |
| **Notification System**   | Email summary after processing             |
| **ERP Integration**       | Connect results with University ERP/MIS    |

## **🙏 Acknowledgements**

1. Parul University — For inspiring innovation in administrative automation.
2. Data Management Staff — For identifying real-world inefficiencies.
3. Open-Source Community — For empowering this project through Python, React, and FastAPI.
