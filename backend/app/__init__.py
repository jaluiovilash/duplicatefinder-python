from flask import Flask
from flask_cors import CORS
import os

def create_app():
    app = Flask(__name__)
    
    app.config.from_object('config')

    # Ensure upload and output dirs exist
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    os.makedirs(app.config['PROCESSED_FOLDER'], exist_ok=True)

    # Enable CORS for frontend access
    CORS(app)

    # Register routes
    from app.routes.duplicate_routes import duplicate_bp
    app.register_blueprint(duplicate_bp, url_prefix="/api")

    return app
