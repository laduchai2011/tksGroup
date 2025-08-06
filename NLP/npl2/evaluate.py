import torch

def evaluate(model, dataloader):
    model.eval()
    total, correct = 0, 0
    with torch.no_grad():
        for X, y in dataloader:
            y_pred = model(X).argmax(dim=1)
            correct += (y_pred == y).sum().item()
            total += y.size(0)
    print(f"Accuracy: {correct / total:.4f}")
