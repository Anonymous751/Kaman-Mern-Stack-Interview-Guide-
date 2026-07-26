
import { Link } from "react-router-dom";

const BackButton = ({ to = "/", label = "Go Back", className = "", icon = "⬅" }) => {
  return (
    <>    
    <br />
    <Link to={to}>
      <button className={`btn btn-primary ${className}`}>
        {icon} {label}
      </button>
    </Link>
    </>

  );
};

export default BackButton;
