import React from "react";
import Button from "./Button";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const Header = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/home", { replace: true });
  };

  return (
    <header className="flex justify-between items-center shadow-2xs px-4 py-2 mb-2 w-full">
      <div className="flex gap-7 items-center w-full max-w-[500px]">
        <Link to={"/"} className="w-[50.12px] h-[43px] rounded-[50%]">
          <img className="w-full h-full " src="/favicon.png" alt="Logo" />
        </Link>

        <span className="hidden md:flex gap-2 items-center w-full">
          <Search />
        </span>
      </div>

      {!token ? (
        <div className="flex gap-[10px]">
          <Button href="/login" name={"Login"} />
          <Button href="/signup" name={"Signup"} />
        </div>
      ) : (
        <div className="flex gap-[10px]">
          <Button href="/" name={"Home"} />
          <Button href="/document" name={"Documents"} />
          <Button href="/heatmap" name={"Heatmap"} />
          <Button href="/dimviz" name={"DimViz"} />
          <Button href="/profile" name={"Profile"} />
          <Button onClick={handleLogout} href="#" name={"Logout"} notNav />
        </div>
      )}
    </header>
  );
};

export default Header;
