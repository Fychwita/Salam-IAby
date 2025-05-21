from flask import Flask
from flask_cors import CORS
from db import db
from routes.auth import auth_bp
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Configuration CORS
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Initialisation de la base de données
db.init_app(app)

# Enregistrement des blueprints
app.register_blueprint(auth_bp, url_prefix='/api')

# Création des tables
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
