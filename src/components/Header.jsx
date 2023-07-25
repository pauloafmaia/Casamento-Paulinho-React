import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-auto w-auto">
      <Link to={"/"}>
        <img src="../../images/Novo Projeto.png" alt="" />
      </Link>
    </div>
  );
}

export default Header;
