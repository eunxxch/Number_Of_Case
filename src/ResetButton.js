import resetIcon from './assets/ic-reset.svg';

function ResetButton({ className, onClick }) {
  return <img className={className} src={resetIcon} alt="초기화" onClick={onClick} />;
}

export default ResetButton;