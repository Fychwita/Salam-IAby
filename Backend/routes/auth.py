from flask import Blueprint, request, jsonify
from models import User, LoginAttempt, db
from sqlalchemy.exc import IntegrityError
import logging

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        print("Données reçues:", data)  # Log des données reçues
        
        # Vérification des champs requis
        required_fields = ['nom', 'email', 'password']
        for field in required_fields:
            if field not in data:
                print(f"Champ manquant: {field}")  # Log des champs manquants
                return jsonify({'message': f'Le champ {field} est requis'}), 400

        # Vérification si l'email existe déjà
        existing_user = User.query.filter_by(email=data['email']).first()
        if existing_user:
            print(f"Email déjà utilisé: {data['email']}")  # Log email déjà utilisé
            return jsonify({'message': 'Cet email est déjà utilisé'}), 400

        # Création du nouvel utilisateur
        new_user = User(
            nom=data['nom'],
            email=data['email'],
            password=data['password']
        )

        # Sauvegarde dans la base de données
        db.session.add(new_user)
        db.session.commit()
        print(f"Utilisateur créé avec succès: {new_user.email}")  # Log succès

        return jsonify({
            'message': 'Inscription réussie',
            'user': new_user.to_dict()
        }), 201

    except IntegrityError as e:
        print(f"Erreur d'intégrité: {str(e)}")  # Log erreur d'intégrité
        db.session.rollback()
        return jsonify({'message': 'Une erreur est survenue lors de l\'inscription'}), 400
    except Exception as e:
        print(f"Erreur inattendue: {str(e)}")  # Log erreur inattendue
        db.session.rollback()
        return jsonify({'message': str(e)}), 500

@auth_bp.route('/users', methods=['GET'])
def get_users():
    try:
        users = User.query.all()
        return jsonify({
            'users': [user.to_dict() for user in users]
        }), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@auth_bp.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        
        # Vérification des champs requis
        if not data or 'email' not in data or 'password' not in data:
            return jsonify({"message": "Email et mot de passe requis"}), 400

        # Recherche de l'utilisateur par email
        user = User.query.filter_by(email=data["email"]).first()
        
        # Création d'une tentative de connexion
        login_attempt = LoginAttempt(
            user_id=user.id if user else None,
            ip_address=request.remote_addr,
            user_agent=request.user_agent.string,
            success=False
        )
        
        # Vérification du mot de passe
        if user and user.check_password(data["password"]):
            login_attempt.success = True
            db.session.add(login_attempt)
            db.session.commit()
            
            return jsonify({
                "message": "Connexion réussie",
                "user": user.to_dict()
            }), 200
        
        # Enregistrement de la tentative échouée
        db.session.add(login_attempt)
        db.session.commit()
        return jsonify({"message": "Email ou mot de passe incorrect"}), 401
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": str(e)}), 500

@auth_bp.route("/login-history", methods=["GET"])
def get_login_history():
    try:
        # Récupération de l'email depuis les paramètres de requête
        email = request.args.get('email')
        if not email:
            return jsonify({"message": "Email requis"}), 400

        # Recherche de l'utilisateur
        user = User.query.filter_by(email=email).first()
        if not user:
            return jsonify({"message": "Utilisateur non trouvé"}), 404

        # Récupération de l'historique des connexions
        login_attempts = LoginAttempt.query.filter_by(user_id=user.id).order_by(LoginAttempt.timestamp.desc()).all()
        
        return jsonify({
            "user": user.to_dict(),
            "login_history": [attempt.to_dict() for attempt in login_attempts]
        }), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500