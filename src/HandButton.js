// 가위바위보 버튼 컴포넌트
// 아이콘 컴포넌트 불러오기
import HandIcon from './HandIcon';
// import backgroundImage from './assets/purple.svg';
import './HandButton.css';

/*
const handButtonStyle = {
  width: '166px',
  height: '166px',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  backgroundImage: `url('${backgroundImage}')`,
  backgroundRepeat: 'no-repeat',
  backgroundposition: 'center',
  backgroundSize: 'contain',
};*/

function HandButton({ value, onClick }) {
  // 1. 일반적으로 const를 사용하되 재할당이 필요한 경우에만 let을 사용한다.
  // 2. 재할당이 필요 없는 상수와 객체에는 const를 사용한다.
  // 화살표 함수 선언
  const handleClick = () => onClick(value);

  // button 클릭시 handleClick을 실행하도록 지정
  // button 안에 HandIcon 배치
  return (
    <button className="HandButton" onClick={handleClick}> 
      <HandIcon className="HandButton-icon" value={value} /> 
    </button>
  );
}

export default HandButton;