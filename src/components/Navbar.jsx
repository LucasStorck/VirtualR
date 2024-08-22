import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight text-blackcolor: rgb(0 0 0) font-medium">
              VirtualR
            </span>
          </div>
          <ul className="text-base hidden lg:flex ml-14 space-x-12 text-black	color: rgb(0 0 0) font-medium">
            {navItems.map((item, index) => (
              <li
                className="hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-200 before:scale-x-0 before:bg-red-500 before:absolute before:left-0 before:bottom-0 hover:decoration-orange-600"
                key={index}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md hover:scale-110 duration-200"
            >
              Sing In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-600 py-2 px-3 rounded-md hover:scale-110 duration-200"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="bg-black fixed right-0 z-20 bg-neutral w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="mb-6">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a className="text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-2 border rounded-md text-white">
                Sing In
              </a>
              <a
                href="#"
                className="text-white bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-3 rounded-md"
              >
                Create an Account
              </a>
            </div>
            <a href=""></a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
