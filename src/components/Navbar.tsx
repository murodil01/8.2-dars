import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { LogOut, Search, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "Plant Care", to: "/plant-care" },
    { label: "Blogs", to: "/blogs" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b-[0.5px] border-b-green-600">
      <div className="mx-auto max-w-[1200px] py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-[120px] h-[30px]" />

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="relative font-normal text-base leading-none text-[#3D3D3D] hover:text-[#2e2e2e] cursor-pointer 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full 
              after:h-[2px] after:bg-green-600 after:transition-all after:duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Search className="w-[20px] h-[20px] text-[#3D3D3D] cursor-pointer" />
          <ShoppingCart className="w-[20px] h-[20px] text-[#3D3D3D] cursor-pointer" />
          <button
            onClick={() => navigate("/login")}
            className="w-[100px] h-[35px] bg-[#46A358] text-white border-2 border-[#46A358] rounded-[16px] 
            flex items-center justify-center gap-2 hover:bg-green-700 transition-all duration-200"
          >
            <LogOut className="w-[20px] h-[20px] text-white" />
            <span className="font-medium text-base leading-none text-white">Login</span>
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 mt-2">
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="text-[#3D3D3D] font-medium text-base border-b border-gray-200 pb-2"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
