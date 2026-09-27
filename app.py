from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.post("/predict")
def predict():
    # No random/false prediction is generated.
    # A real trained model can be connected here later.
    image = request.files.get("image")
    if not image or image.filename == "":
        return jsonify({"error": "Please upload a retinal image."}), 400
    return jsonify({
        "status": "model_unavailable",
        "message": "A trained diabetic-retinopathy model is not configured. No prediction was generated."
    })

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
