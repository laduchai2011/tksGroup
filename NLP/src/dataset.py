import pandas as pd
from torch.utils.data import Dataset
from transformers import AutoTokenizer
from config import MODEL_NAME, MAX_LENGTH, LABELS

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)

class HealthDataset(Dataset):
    def __init__(self, path):
        self.data = pd.read_csv(path)
        self.texts = self.data["text"].tolist()
        self.labels = [LABELS.index(label) for label in self.data["label"].tolist()]

    def __len__(self):
        return len(self.texts)

    def __getitem__(self, idx):
        encoding = tokenizer(
            self.texts[idx],
            max_length=MAX_LENGTH,
            padding="max_length",
            truncation=True,
            return_tensors="pt"
        )
        item = {key: val.squeeze(0) for key, val in encoding.items()}
        item["labels"] = self.labels[idx]
        return item
