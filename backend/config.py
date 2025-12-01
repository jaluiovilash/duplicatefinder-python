import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

UPLOAD_FOLDER = os.path.join(BASE_DIR, "/backend/uploads")
PROCESSED_FOLDER = os.path.join(BASE_DIR, "/backend/app/static/processed")

ALLOWED_EXTENSIONS = {"csv"}

SECRET_KEY = "supersecretkey"  # Change for production
