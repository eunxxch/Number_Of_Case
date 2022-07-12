// 가위바위보 종류
const HANDS = ['rock', 'scissor', 'paper'];

// 가위바위보 이기는 경우
const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

export function compareHand(a, b) {
  if (WINS[a] === b) return 1;
  if (WINS[b] === a) return -1;
  return 0;
}

// 1-n까지의 랜덤한 정수를 반환하는 함수
function random(n) {
  return Math.floor(Math.random() * n);
}

export function generateRandomHand() {
  const idx = random(HANDS.length);
  return HANDS[idx];
}
