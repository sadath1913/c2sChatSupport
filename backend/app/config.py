import os
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
class Settings:
    APP_NAME = os.getenv("APP_NAME", "Support AI")
    APP_ENV = os.getenv("APP_ENV", "development")
    DATABASE_URL = os.getenv("DATABASE_URL")

    if not DATABASE_URL:
        raise ValueError("DATABASE_URL is not set")


settings = Settings()