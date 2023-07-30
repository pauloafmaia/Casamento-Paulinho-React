import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-auto w-auto">
      <Link to={"/"}>
        <img src="../../images/IMG_1128 1.jpg" alt="" />
      </Link>
    </div>
  );
}

export default Header;
