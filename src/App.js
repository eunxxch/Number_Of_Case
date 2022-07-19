import { useState } from 'react';
import Button from './ResetButton';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import './App.css';
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
  const [myWin, setMyWin] = useState('');
  const [otherWin, setOtherWin] = useState('');

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
    if (comparison > 0) {
        setScore(score + bet);
        setMyWin('winner');
        setOtherWin('');
    } else if (comparison < 0) {
        setOtherScore(otherScore + bet);
        setOtherWin('winner');
        setMyWin('');
    } else {
        setMyWin('winner');
        setOtherWin('winner');
    }
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
    setMyWin('');
    setOtherWin('');
  };

  const classNames = `HandButton`;
  const myClass = `Hand ${myWin}`;
  const otherClass = `Hand ${otherWin}`;
    
  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <Button className="App-reset" onClick={handleClearClick} />
      <div className="App-scores">
        <div className="Score">
          <div className="Score-num">{score}</div>
          <div className="Score-name">나</div>
        </div>
        <div className="App-versus">:</div>
        <div className="Score">
          <div className="Score-num">{otherScore}</div>
          <div className="Score-name">상대</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <div className={myClass}>
              <HandIcon className="Hand-icon" value={hand} />
            </div>
            <div className="App-versus">:</div>
            <div className={otherClass}>
              <HandIcon className="Hand-icon" value={otherHand} />
            </div>
          </div>
          <div className="App-bet"> 
            <span>배점</span><input onChange={handleBetChange} type="number" value={bet} min={1} max={9}></input>
          </div>
          <div class="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(', ')}</p>
          </div>
        </div>
        <HandButton className={classNames} value="rock" onClick={handleButtonClick} />
        <HandButton className={classNames} value="scissor" onClick={handleButtonClick} />
        <HandButton className={classNames} value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
