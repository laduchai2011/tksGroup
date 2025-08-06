import pandas as pd
import torch
from torch.utils.data import DataLoader
import torch.nn as nn
from torch.optim import Adam
from sklearn.model_selection import train_test_split
from config import *
from utils.vocab import build_vocab
from utils.dataset import TextDataset, collate_fn
from models import lstm, rnn, gru, cnn

# Load dữ liệu
df = pd.read_csv("data/data.csv")
texts, labels = df["text"].tolist(), df["label"].tolist()
label2idx = {label: i for i, label in enumerate(sorted(set(labels)))}
vocab = build_vocab(texts)

# Dataset và DataLoader
train_texts, val_texts, train_labels, val_labels = train_test_split(texts, labels, test_size=0.2)
train_dataset = TextDataset(train_texts, train_labels, vocab, label2idx)
val_dataset = TextDataset(val_texts, val_labels, vocab, label2idx)
train_loader = DataLoader(train_dataset, batch_size=BATCH_SIZE, shuffle=True, collate_fn=collate_fn)
val_loader = DataLoader(val_dataset, batch_size=BATCH_SIZE, collate_fn=collate_fn)

# Model
model_cls = {
    "lstm": lstm.LSTMClassifier,
    "rnn": rnn.RNNClassifier,
    "gru": gru.GRUClassifier,
    "cnn": cnn.CNNClassifier
}[MODEL_TYPE]

model = model_cls(len(vocab), EMBED_DIM, HIDDEN_DIM, len(label2idx))
optimizer = Adam(model.parameters(), lr=LEARNING_RATE)
criterion = nn.CrossEntropyLoss()

# Train loop
for epoch in range(NUM_EPOCHS):
    model.train()
    for X, y in train_loader:
        optimizer.zero_grad()
        y_pred = model(X)
        loss = criterion(y_pred, y)
        loss.backward()
        optimizer.step()
    print(f"Epoch {epoch+1} done")
