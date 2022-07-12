// 아이콘 컴포넌트

// 아이콘 경로 지정 및 이름 지정
import rockImg from './assets/rock.svg'
import scissorImg from './assets/scissor.svg'
import paperImg from './assets/paper.svg'

// 상수 객체 선언
const HAND_IMAGES = {
  'rock' : rockImg, 
  'scissor' : scissorImg, 
  'paper' : paperImg
};

// 컴포넌트 선언
// (대문자로 시작하는 함수 생성)
function HandIcon({value}) { // value prop 설정
  const src = HAND_IMAGES[value]; // value의 값을 반환
  return <img src={src} alt={value} />; // alt = value name
}

export default HandIcon;