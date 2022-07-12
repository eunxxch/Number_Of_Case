import { useState } from 'react';
import Button from './ResetButton';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';

// 초기값 지정
const INITIAL_VALUE = 'rock';

// 가위바위보 승패 결과
function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
  // hand와 otherHand를 state로 바꾸어 주세요
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    // hand의 값을 nextHand=value 로 바꿔주세요
    setHand(nextHand);
    // otherHand의 값을 generateRandomHand()의 리턴 값으로 바꿔주세요
    setOtherHand(nextOtherHand);
    // gameHistory에 nextHistoryItem 을 추가해주세요
    // gameHistory 는 참조형이니까, setGameHistory 함수로 값을 변경할 때는 매번 새로운 값을 만들어 주어야 합니다.
    setGameHistory([...gameHistory, nextHistoryItem]);
  };

  const handleClearClick = () => {
    // hand와 otherHand의 값을 'rock' 으로 변경해주세요
    setHand(INITIAL_VALUE); 
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <p>승부 기록 : {gameHistory.join(', ')}</p>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
