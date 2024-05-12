import "./AdminHeader.scss";
import { useNavigate } from "react-router-dom";
const AdminHeader = ({ headcenter }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/admin"); // -1을 넘겨 이전 페이지로 이동
  };
  return (
    <header className="adminheader">
      <div className="goBack" onClick={handleGoBack}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </div>
      <div className="adminheader-center">{headcenter}</div>
      <div></div>
    </header>
  );
};

export default AdminHeader;
