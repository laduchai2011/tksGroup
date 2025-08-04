import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from config import MODEL_NAME, LABELS, MAX_LENGTH

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained("model")
model.eval()

def predict(text: str):
    inputs = tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        padding="max_length",
        max_length=MAX_LENGTH,
    )
    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits
        pred = torch.argmax(logits, dim=-1).item()
    return LABELS[pred]

# Ví dụ:
if __name__ == "__main__":
    text = "Tôi thường xuyên khát nước và đi tiểu nhiều"
    print(predict(text))
