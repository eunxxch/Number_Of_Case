// 가위바위보 버튼 컴포넌트 불러오기
import HandButton from './HandButton';
import ResetButton from './ResetButton';

function App() {
  const handleIconClick = (value) => console.log(value);
  const handleClearClick = () => console.log('처음부터');
  return (
    <div>
      <HandButton value="rock" onClick={handleIconClick} />
      <HandButton value="scissor" onClick={handleIconClick} />
      <HandButton value="paper" onClick={handleIconClick} />
      <ResetButton onClick={handleClearClick}>처음부터</ResetButton>
    </div>
  );
}

export default App;