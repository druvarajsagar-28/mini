# Explainable AI Diabetic Retinopathy Screening Website

## Run in VS Code

1. Open this folder in VS Code.
2. Open Terminal.
3. Create/activate a virtual environment (optional but recommended).
4. Install dependencies:

```bash
pip install -r requirements.txt
```

5. Start the server:

```bash
python app.py
```

6. Open:

http://127.0.0.1:5000

## Important

This project intentionally does **not** generate random diabetic-retinopathy predictions. The `/predict` endpoint clearly reports that a trained model is not configured. A validated model and appropriate XAI pipeline can be connected later.
