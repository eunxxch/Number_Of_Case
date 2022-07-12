// 가위바위보 게임

import ReactDOM from 'react-dom/client';
import App from './App';


const WINS = {
  rock: 'scissor', // 주먹 : 가위
  scissor: 'paper', // 가위 : 보
  paper: 'rock' // 보 : 주먹
};

function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}

function handleButtonClick() {
  console.log('가위바위보!');
}

const me = 'rock';
const other = 'scissor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <h1 id="title">가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleButtonClick}>가위</button>
    <button onClick={handleButtonClick}>바위</button>
    <button onClick={handleButtonClick}>보</button>
  </>
  
);