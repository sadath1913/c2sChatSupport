# C2S Chat Support

C2S Chat Support is an AI-powered support application with a React frontend, FastAPI backend, and embedding service.

## Project Structure

    ChatSupport/
    ├── env/
    │
    └── c2sChatSupport/
        ├── backend/
        ├── embedding_service/
        ├── frontend/
        └── README.md

## Prerequisites

Make sure the following are installed:

- Python 3
- Node.js
- npm
- Git

## Local Setup

### 1. Create the Project Folder

Open a terminal and run:

    mkdir ChatSupport
    cd ChatSupport

### 2. Create Python Virtual Environment

Create a Python virtual environment:

    python -m venv env

Activate the virtual environment.

#### Windows PowerShell

    .\env\Scripts\Activate.ps1

#### Windows CMD

    env\Scripts\activate

#### Linux / macOS

    source env/bin/activate

After activation, you should see `(env)` in the terminal.

### 3. Clone the Repository

Clone the GitHub repository:

    git clone https://github.com/sadath1913/c2sChatSupport.git

Change to the project directory:

    cd c2sChatSupport

## Environment Variables

The backend requires environment variables for services such as the database and LLM.

Create a `.env` file inside the backend directory:

    backend/
    └── .env

Add the required configuration values.

Example:

    DATABASE_URL=your_database_url
    GROQ_API_KEY=your_groq_api_key

Do not commit `.env` files, API keys, passwords, or other secrets to GitHub.

## Run the Application Locally

The application consists of three services:

1. Backend
2. Embedding Service
3. Frontend

Run each service in a separate terminal.

### 1. Start the Backend

Open the first terminal.

Make sure the Python virtual environment is activated.

Change to the backend directory:

    cd backend

Install the backend dependencies:

    pip install -r requirements.txt

Start the FastAPI backend:

    uvicorn app.main:app --reload

Keep this terminal running.

### 2. Start the Embedding Service

Open a new terminal.

Activate the Python virtual environment.

Navigate to the embedding service:

    cd embedding_service

Install the required dependencies:

    pip install -r requirements.txt

Start the embedding service:

    uvicorn app:app --host 0.0.0.0 --port 8001

The embedding service runs on:

    http://localhost:8001

Keep this terminal running.

### 3. Start the Frontend

Open a third terminal.

Navigate to the frontend:

    cd frontend

Install the Node.js dependencies:

    npm install

Start the Vite development server:

    npm run dev

Vite will display the frontend URL in the terminal.

Usually:

    http://localhost:5173/

Open the displayed URL in your browser.

## Running All Three Services

### Terminal 1 — Backend

    cd backend
    pip install -r requirements.txt
    uvicorn app.main:app --reload

### Terminal 2 — Embedding Service

    cd embedding_service
    pip install -r requirements.txt
    uvicorn app:app --host 0.0.0.0 --port 8001

### Terminal 3 — Frontend

    cd frontend
    npm install
    npm run dev

## Application Flow

    User
      |
      v
    Frontend
      |
      v
    FastAPI Backend
      |
      +----> Embedding Service
      |
      +----> PostgreSQL / pgvector
      |
      +----> LLM
      |
      v
    Response
      |
      v
    Frontend

## Knowledge Base

Knowledge source files are located in:

    backend/app/knowledge/source_data/

Current modules include:

- Synopsys
- Cadence
- Siemens
- Ansys
- Keysight
- Xilinx/AMD FPGA

Knowledge must be processed through the ingestion, chunking, and embedding pipeline before it can be retrieved by the chatbot.

## Useful Commands

### Check Git Status

    git status

### Pull Latest Changes

    git pull origin main

### Install Backend Dependencies

    pip install -r requirements.txt

### Install Frontend Dependencies

    npm install

### Start Backend

    uvicorn app.main:app --reload

### Start Embedding Service

    uvicorn app:app --host 0.0.0.0 --port 8001

### Start Frontend

    npm run dev

## GitHub Repository

https://github.com/sadath1913/c2sChatSupport