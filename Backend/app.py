# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
# from config import Config

# db = SQLAlchemy()

# def create_app():
#     app = Flask(__name__)
#     app.config.from_object(Config)
#     db.init_app(app)
#     CORS(app)

#     from routes.auth import auth_bp
#     app.register_blueprint(auth_bp)

#     return app

# app = create_app()

# if __name__ == "__main__":
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_db_connection

app = Flask(__name__)
CORS(app)



@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        print("Données reçues :", data)
        nom = data.get('nom')
        email = data.get('email')
        password = data.get('password')

        conn = get_db_connection()
        cursor = conn.cursor()

        # Vérification si l'utilisateur existe déjà
        cursor.execute("SELECT id FROM users WHERE email = %s", (email,))
        if cursor.fetchone():
            return jsonify({'message': 'Email déjà utilisé'}), 400

        # Insertion de l'utilisateur
        cursor.execute("INSERT INTO users (nom, email, password) VALUES (%s, %s, %s)", (nom, email, password))
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({'message': 'Inscription réussie'}), 200
    except Exception as e:
        print(f"Erreur lors de l'inscription : {e}")
        return jsonify({'error': 'Erreur serveur, veuillez réessayer plus tard'}), 500


if __name__ == '__main__':
    app.run(debug=True)
