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
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    // hand의 값을 nextHand=value 로 바꿔주세요
    setHand(nextHand);
    // otherHand의 값을 generateRandomHand()의 리턴 값으로 바꿔주세요
    setOtherHand(nextOtherHand);
    // gameHistory에 nextHistoryItem 을 추가해주세요
    // gameHistory 는 참조형이니까, setGameHistory 함수로 값을 변경할 때는 매번 새로운 값을 만들어 주어야 합니다.
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  // 이벤트 핸들러에서 input 의 value 속성을 참조하려면 e.target.value 와 같이 가져올 수 있는데요, 
  // 이 값을 setBet 함수에 넘겨주면 됩니다. 그런데 이 값의 타입은 문자열이기 때문에, 숫자형으로 바꿔주어야 합니다. 
  // 그래서 Number 생성자를 써서 숫자형으로 변환해주겠습니다.
  const handleBetChange = (e) => {
    // const num = Number(e.target.value);
    let num = Number(e.target.value);
    if (num > 9) num %= 10; // 1과 9 사이의 숫자로 만들어 줌
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  const handleClearClick = () => {
    // hand와 otherHand의 값을 'rock' 으로 변경해주세요
    setHand(INITIAL_VALUE); 
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const classNames = `HandButton`;

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        {score} : {otherScore}
      </div>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <input onChange={handleBetChange} type="number" value={bet} min={1} max={9}></input>
      </div>
      <p>승부 기록 : {gameHistory.join(', ')}</p>
      <div>
        <HandButton className={classNames} value="rock" onClick={handleButtonClick} />
        <HandButton className={classNames} value="scissor" onClick={handleButtonClick} />
        <HandButton className={classNames} value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
