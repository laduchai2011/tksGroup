import torch
from torch.utils.data import Dataset
from torch.nn.utils.rnn import pad_sequence
from utils.vocab import tokenize

class TextDataset(Dataset):
    def __init__(self, texts, labels, vocab, label2idx):
        self.sequences = [
            torch.tensor([vocab.get(token, vocab["<UNK>"]) for token in tokenize(text)], dtype=torch.long)
            for text in texts
        ]
        self.labels = [label2idx[label] for label in labels]

    def __len__(self):
        return len(self.labels)

    def __getitem__(self, idx):
        return self.sequences[idx], self.labels[idx]

def collate_fn(batch):
    sequences, labels = zip(*batch)
    sequences = pad_sequence(sequences, batch_first=True, padding_value=0)
    return sequences, torch.tensor(labels)