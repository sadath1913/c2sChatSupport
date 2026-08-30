import logging
from fastapi import FastAPI
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
)
from sqlalchemy import text

from app.config import settings
from app.database.connection import engine
from app.chat.routes import router as chat_router
from app.support.routes import router as support_router
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(
    title=settings.APP_NAME
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://c2s-chat-support.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------
# Routers
# --------------------------------

app.include_router(chat_router)
app.include_router(support_router)


# --------------------------------
# Root
# --------------------------------

@app.get("/")
def root():
    return {
        "message": "Support AI backend is running"
    }


# --------------------------------
# Database Health
# --------------------------------

@app.get("/health/database")
def database_health():
    try:
        with engine.connect() as connection:
            result = connection.execute(
                text("SELECT version()")
            )

            version = result.scalar()

        return {
            "status": "connected",
            "database": "Supabase PostgreSQL",
            "version": version
        }

    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }


# --------------------------------
# Vector Health
# --------------------------------

@app.get("/health/vector")
def vector_health():
    try:
        with engine.connect() as connection:
            result = connection.execute(
                text("""
                    SELECT extname, extversion
                    FROM pg_extension
                    WHERE extname = 'vector'
                """)
            )

            vector = result.fetchone()

        if vector:
            return {
                "status": "enabled",
                "extension": vector[0],
                "version": vector[1]
            }

        return {
            "status": "not enabled"
        }

    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }