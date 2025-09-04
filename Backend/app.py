from flask import Flask
from flask_cors import CORS
from db import db
from config import Config
from routes.auth import auth_bp
from routes.ai import ai_bp

app = Flask(__name__)
app.config.from_object(Config)

CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # React autorisé

db.init_app(app)

# Blueprints
app.register_blueprint(auth_bp, url_prefix="/api")
app.register_blueprint(ai_bp, url_prefix="/api")

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(port=8000, debug=True)
