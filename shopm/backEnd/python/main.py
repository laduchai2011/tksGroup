from fastapi import FastAPI
from pydantic import BaseModel
import torch
from models import lstm
from config import *
from utils.dataset import TextDataset
import json
from utils.vocab import tokenize



# Load vocab, model
with open("artifacts/vocab.json", "r", encoding="utf-8") as f:
    vocab = json.load(f)
with open("artifacts/label2idx.json", "r", encoding="utf-8") as f:
    label2idx = json.load(f)
idx2label = {v: k for k, v in label2idx.items()}
model = lstm.LSTMClassifier(len(vocab), EMBED_DIM, HIDDEN_DIM, len(label2idx))
model.load_state_dict(torch.load("artifacts/best_model.pt"))
model.eval()

# API setup
app = FastAPI()

class InputText(BaseModel):
    text: str


@app.post("/predict")
def predict(input: InputText):
    tokens = tokenize(input.text)
    indices = [vocab.get(token, vocab["<UNK>"]) for token in tokens]
    input_tensor = torch.tensor([indices])
    with torch.no_grad():
        output = model(input_tensor)
        pred = output.argmax(dim=1).item()
        return {"label": idx2label[pred]}
