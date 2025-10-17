import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-red-500">🏠 homez</span>
        </Link>

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Dropdown label="Home" />
          <Dropdown label="Listings" />
          <Dropdown label="Members" />
          <Dropdown label="Blog" />
          <Dropdown label="Pages" />
          <Link href="#" className="hover:text-red-500">
            Login / Register
          </Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-sm">
            Add Property
          </button>
        </nav> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="md:hidden"
        >
          {mobileNavOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileNavOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4">
          <Link href="#">Home</Link>
          <Link href="#">Listings</Link>
          <Link href="#">Members</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Pages</Link>
          <Link href="#">Login / Register</Link>
          <button className="bg-red-500 w-full py-2 rounded-md">
            Add Property
          </button>
        </div>
      )}
    </header>
  );
};

export default navbar;
