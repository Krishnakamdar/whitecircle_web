// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Smartphone,
  ShoppingBag,
  Database,
  Gem,
  Boxes,
  Network,
  Layers,
  Wallet,
  Repeat,
  Megaphone,
  Palette,
  Cloud,
  CheckCircle2,
  Briefcase,
  CreditCard
} from "lucide-react";

/*
  Copy this file to: src/components/Navbar.jsx
  Usage: import Navbar from './components/Navbar' and place <Navbar/> inside BrowserRouter in App.jsx
*/

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-lg font-extrabold text-slate-800">
          <span className="text-blue-600">Whitecircle</span>
          <span className="text-slate-600 font-medium">Group</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* HOME added here */}
          <NavLink to="/" className={navClass}>Home</NavLink>

          {/* Flyout components: still open on hover AND navigate when clicked */}
          <Flyout to="/services" label="Services" FlyoutContent={ServicesContent} />
          <Flyout to="/web3" label="WEB3" FlyoutContent={Web3Content} />

          <NavLink className={navClass} to="/portfolio">Portfolio</NavLink>
          <NavLink className={navClass} to="/careers">Careers</NavLink>
          <NavLink className={navClass} to="/contact">Contact</NavLink>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link to="/contact" className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition">
            Book Consultation
          </Link>
        </div>

        {/* Mobile button */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

/* helper for NavLink classes (active styling) */
const navClass = ({ isActive }) =>
  `text-sm font-medium transition ${isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`;

/* Flyout wrapper (mouse hover opens) 
   - clicking label navigates (useNavigate)
   - hovering still shows flyout
*/
const Flyout = ({ to = "#", label, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onLabelClick = (e) => {
    // If user clicks the label, navigate to that route.
    // Prevent default anchor if necessary.
    e.preventDefault();
    navigate(to);
    // close flyout on click — helpful on mobile/desktop after navigate
    setOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* note: using role="button" and onClick so the label navigates */}
      <button
        onClick={onLabelClick}
        className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition bg-transparent border-0"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-12 -translate-x-1/2 z-40"
          >
            <div className="rounded-lg border border-gray-100 bg-white shadow-2xl overflow-hidden">
              <FlyoutContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ============================
   SERVICES flyout content
   4-column grid, compact links
   ============================ */
const ServicesContent = () => {
  return (
    <div className="w-[980px] p-6 bg-white">
      <div className="grid grid-cols-4 gap-6">
        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Core development</h4>
          <MenuItem to="/services/web-development" icon={<Code2 size={16} />}>Web Development</MenuItem>
          <MenuItem to="/services/mobile" icon={<Smartphone size={16} />}>Mobile App Development</MenuItem>
          <MenuItem to="/services/shopify" icon={<ShoppingBag size={16} />}>Shopify & WordPress</MenuItem>
          <MenuItem to="/services/database" icon={<Database size={16} />}>Database Design</MenuItem>

          <div className="mt-6">
            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Deep tech</h4>
            <MenuItem to="/services/ai" icon={<Megaphone size={16} />}>AI & Machine Learning</MenuItem>
            <MenuItem to="/services/iot" icon={<Cloud size={16} />}>IoT Solutions</MenuItem>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg">
          <h4 className="text-xs font-semibold text-indigo-600 uppercase mb-2 flex items-center gap-2"><Gem size={14} /> Web3 & Blockchain</h4>
          <MenuItem to="/web3/ico" icon={<Gem size={16} />}>ICO Development</MenuItem>
          <MenuItem to="/web3/token" icon={<Boxes size={16} />}>Token Development</MenuItem>
          <MenuItem to="/web3/dapp" icon={<Layers size={16} />}>DApp Development</MenuItem>
          <MenuItem to="/web3/wallet" icon={<Wallet size={16} />}>Wallet Development</MenuItem>
          <MenuItem to="/web3/exchange" icon={<Repeat size={16} />}>Exchange Development</MenuItem>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Digital & creative</h4>
          <MenuItem to="/services/marketing" icon={<Megaphone size={16} />}>Digital Marketing</MenuItem>
          <MenuItem to="/services/design" icon={<Palette size={16} />}>Graphic Design</MenuItem>
          <MenuItem to="/services/video" icon={<Megaphone size={16} />}>Animation & Video</MenuItem>

          <div className="mt-6">
            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Infrastructure</h4>
            <MenuItem to="/services/cloud" icon={<Cloud size={16} />}>Cloud & Hosting</MenuItem>
            <MenuItem to="/services/testing" icon={<CheckCircle2 size={16} />}>Software Testing</MenuItem>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Enterprise & Fintech</h4>
          <MenuItem to="/services/salesforce" icon={<Briefcase size={16} />}>Salesforce</MenuItem>
          <MenuItem to="/services/fintech" icon={<CreditCard size={16} />}>Fintech / Payment Gateways</MenuItem>

          <div className="mt-6 bg-blue-600 p-3 rounded text-white">
            <div className="text-sm font-bold">Need Custom Web3?</div>
            <div className="text-xs opacity-90">Launch tokens, DEX and wallets fast.</div>
            <Link to="/contact" className="mt-2 inline-block text-xs underline text-white">Talk to us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================
   WEB3 flyout (compact list)
   ============================ */
const Web3Content = () => {
  return (
    <div className="w-[360px] p-4 bg-white">
      <MenuItem to="/web3/ico" icon={<Gem size={16} />}>ICO Development</MenuItem>
      <MenuItem to="/web3/token" icon={<Boxes size={16} />}>Token Development</MenuItem>
      <MenuItem to="/web3/dev" icon={<Network size={16} />}>Web3 Development</MenuItem>
      <MenuItem to="/web3/dapp" icon={<Layers size={16} />}>DApp Development</MenuItem>
      <MenuItem to="/web3/wallet" icon={<Wallet size={16} />}>Wallet Development</MenuItem>
      <MenuItem to="/web3/exchange" icon={<Repeat size={16} />}>Exchange Development</MenuItem>
    </div>
  );
};

/* generic menu item used inside flyouts */
const MenuItem = ({ to = "#", children, icon }) => {
  return (
    <Link to={to} className="flex items-center gap-3 rounded px-2 py-2 hover:bg-slate-50 transition">
      <div className="text-slate-400">{icon}</div>
      <div className="text-sm text-slate-700">{children}</div>
    </Link>
  );
};

/* Mobile nav drawer */
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="rounded-md px-3 py-2 border border-gray-200 text-sm">
        Menu
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="h-full w-72 bg-white p-5"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-3">
                <NavLink onClick={() => setOpen(false)} to="/" className={navClass}>Home</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/services" className={navClass}>Services</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/web3" className={navClass}>WEB3</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/portfolio" className={navClass}>Portfolio</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/careers" className={navClass}>Careers</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/contact" className={navClass}>Contact</NavLink>
                <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 inline-block rounded-full bg-blue-600 px-4 py-2 text-white text-sm text-center">Book Consultation</Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
