import { Icon } from "@iconify/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const setMenuOpen = () => {
    setOpenMenu((current) => !current);
  };
  return (
    <>
      <div className="h-10 w-full bg-dark-green flex items-center justify-between lg:hidden">
        <button onClick={setMenuOpen} className="m-2">
          <Icon icon="ic:round-menu" color="white" width="30" height="30" />
        </button>
      </div>
      <div>
        {openMenu && (
          <div className="w-full h-auto bg-dark-green p-6 lg:hidden">
            <ul className="flex flex-col justify-center items-center gap-6 text-sm text-white tracking-wider">
              <NavLink className="font-thin" onClick={setMenuOpen} to={"/"}>
                Laura & Paulinho
              </NavLink>
              <NavLink
                className="font-thin"
                onClick={setMenuOpen}
                to={"/local"}
              >
                Local e Data
              </NavLink>
              <NavLink
                className="font-thin"
                onClick={setMenuOpen}
                to={"/traje"}
              >
                Traje
              </NavLink>
              <NavLink
                className="font-thin"
                onClick={setMenuOpen}
                to={"/lista"}
              >
                Lista de Presentes
              </NavLink>
              <NavLink
                className="font-thin"
                onClick={setMenuOpen}
                to={"/presenca"}
              >
                Confirmar Presença
              </NavLink>
            </ul>
          </div>
        )}
      </div>
      <div className="w-full h-auto bg-dark-green p-4 hidden lg:block sticky top-0 text-white">
        <ul className="flex flex-row justify-center items-center text-md space-x-6">
          <NavLink className="font-bold lg:border-b-2 lg:border-b-transparent lg:hover:border-b-white lg:hover:border-b-2" to={"/"}>
            Laura & Paulinho
          </NavLink>
          <NavLink className="font-bold lg:border-b-2 lg:border-b-transparent lg:hover:border-b-white lg:hover:border-b-2" to={"/local"}>
            Local e Data
          </NavLink>
          <NavLink className="font-bold lg:border-b-2 lg:border-b-transparent lg:hover:border-b-white lg:hover:border-b-2" to={"/traje"}>
            Traje
          </NavLink>
          <NavLink className="font-bold lg:border-b-2 lg:border-b-transparent lg:hover:border-b-white lg:hover:border-b-2" to={"/lista"}>
            Lista de Presentes
          </NavLink>
          <NavLink className="font-bold lg:border-b-2 lg:border-b-transparent lg:hover:border-b-white lg:hover:border-b-2" to={"/presenca"}>
            Confirmar Presença
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
