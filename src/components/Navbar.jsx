import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();      // for redirect on search
const [query, setQuery] = useState("");

  const linkStyle = (path) =>
    `px-4 py-2 rounded-full transition ${
      location.pathname === path
        ? "text-neonPink shadow-[0_0_15px_#FF007F]"
        : "text-white hover:text-neonBlue"
    }`;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-neonBlue z-40"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-neonBlue drop-shadow-[0_0_10px_#00F5FF]"
        >
          V-MART XR
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6">
            <input
  type="text"
  placeholder="Search…"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${query}`);
      setQuery("");
    }
  }}
  className="px-3 py-1 rounded-full bg-black/70 text-white border border-neonBlue focus:outline-none focus:border-neonPink"
  style={{width: "180px"}}
/>
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link to="/electronics" className={linkStyle("/electronics")}>
            Electronics
          </Link>
          <Link to="/gaming" className={linkStyle("/gaming")}>
            Gaming
          </Link>
          <Link to="/fashion" className={linkStyle("/fashion")}>
            Fashion
          </Link>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;