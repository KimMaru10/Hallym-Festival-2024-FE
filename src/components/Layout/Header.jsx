import "./Header.scss";
import { useNavigate } from "react-router-dom";
const Header = ({ headcenter, hasModal }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (hasModal) {
      navigate("/info");
    } else {
      navigate(-1);
    }
  };
  return (
    <header className="header">
      <div className="goBack" onClick={handleGoBack}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </div>
      <div className="header-center">{headcenter}</div>
      <div style={{ width: "20px", height: "30px" }}></div>
    </header>
  );
};

export default Header;
