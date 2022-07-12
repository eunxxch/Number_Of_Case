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

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    // hand의 값을 nextHand=value 로 바꿔주세요
    setHand(nextHand);
    // otherHand의 값을 generateRandomHand()의 리턴 값으로 바꿔주세요
    setOtherHand(nextOtherHand);
  };

  const handleClearClick = () => {
    // hand와 otherHand의 값을 'rock' 으로 변경해주세요
    setHand(INITIAL_VALUE); 
    setOtherHand(INITIAL_VALUE); 
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
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
