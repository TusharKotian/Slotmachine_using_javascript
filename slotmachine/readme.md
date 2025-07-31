# 🎰 Terminal Slot Machine Game

A fun and interactive slot machine game built with Node.js! This project simulates a classic slot machine experience directly in your terminal.

## 🚀 Features

- Deposit money to play
- Choose how many lines (1–3) to bet on
- Bet on each line with custom amounts
- Random spinning reels (3x3)
- Match all symbols in a line to win
- Balance updates after each round
- Option to play again after each spin

## 🧠 Game Logic

1. User deposits an initial amount.
2. User chooses how many lines to bet on.
3. User places a bet amount (per line).
4. The slot machine spins randomly.
5. Rows with all matching symbols win:
   - A → 5x payout  
   - B → 4x payout  
   - C → 3x payout  
   - D → 2x payout  
6. User wins based on symbol value × bet.
7. Balance is updated, and user can continue or quit.

## 🛠️ Tech Stack

- JavaScript (Node.js)
- `prompt-sync` for terminal input

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/slot-machine-game.git
cd slot-machine-game

