from flask import Blueprint, request, jsonify, send_file, current_app
from app.utils.file_utils import allowed_file, save_uploaded_file, generate_output_filename
from app.services.duplicate_finder import find_duplicates
import os

# ✅ Blueprint declaration (this must exist)
duplicate_bp = Blueprint("duplicates", __name__)

@duplicate_bp.route("/backend/uploads", methods=["POST"])
def upload_and_process():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "Empty filename"}), 400

    if not allowed_file(file.filename, current_app.config["ALLOWED_EXTENSIONS"]):
        return jsonify({"error": "Invalid file type"}), 400

    try:
        upload_path = save_uploaded_file(file, current_app.config["UPLOAD_FOLDER"])
        output_filename = generate_output_filename("duplicates")
        output_path = os.path.join(current_app.config["PROCESSED_FOLDER"], output_filename)

        # Process file
        find_duplicates(upload_path, output_path)

        return jsonify({
            "message": "File processed successfully",
            "download_url": f"/api/download/{output_filename}"
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@duplicate_bp.route("/download/<filename>", methods=["GET"])
def download_file(filename):
    path = os.path.join(current_app.config["PROCESSED_FOLDER"], filename)
    if os.path.e