# routes/ai.py
from flask import Blueprint, request, jsonify
import joblib

ai_bp = Blueprint('ai', __name__)

model = joblib.load("models/salamiaby_model.joblib")
vectorizer = joblib.load("models/salamiaby_vectorizer.joblib")

@ai_bp.route('/detect', methods=["POST"])
def detect():
    data = request.get_json()
    phrase = data.get("phrase", "")
    vect = vectorizer.transform([phrase])
    prediction = model.predict(vect)[0]
    prediction_proba = model.predict_proba(vect)[0]

    # Obtenir les indices non nuls (mots présents dans le texte)
    feature_names = vectorizer.get_feature_names_out()
    non_zero_indices = vect.nonzero()[1]
    
    # Associer chaque mot avec son poids dans la classe prédite
    class_index = model.classes_.tolist().index(prediction)
    influential_words = sorted(
        [(feature_names[i], model.coef_[class_index][i]) for i in non_zero_indices],
        key=lambda x: abs(x[1]), reverse=True
    )

    # Prendre les top 3 mots les plus influents
    top_words = [w for w, weight in influential_words[:3]]

    return jsonify({
        "dialecte": prediction,
        "raison": f"Salam'Iaby nahita fitovizana sahala ny: {', '.join(top_words)}"
    })
