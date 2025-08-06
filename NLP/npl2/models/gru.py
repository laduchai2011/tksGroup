import torch.nn as nn

class GRUClassifier(nn.Module):
    def __init__(self, vocab_size, embed_dim, hidden_dim, num_classes):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim, padding_idx=0)
        self.gru = nn.GRU(embed_dim, hidden_dim, batch_first=True)
        self.fc = nn.Linear(hidden_dim, num_classes)

    def forward(self, x):
        x = self.embedding(x)               # (batch_size, seq_len, embed_dim)
        _, h_n = self.gru(x)                # h_n: (1, batch_size, hidden_dim)
        out = self.fc(h_n[-1])              # h_n[-1]: last layer hidden state
        return out
