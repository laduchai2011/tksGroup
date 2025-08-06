import re
from collections import Counter

def tokenize(text):
    return re.findall(r"\w+", text.lower())

def build_vocab(texts, min_freq=1):
    counter = Counter(token for text in texts for token in tokenize(text))
    vocab = {"<PAD>": 0, "<UNK>": 1}
    for word, freq in counter.items():
        if freq >= min_freq:
            vocab[word] = len(vocab)
    return vocab