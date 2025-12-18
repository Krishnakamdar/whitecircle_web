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
      <div className="mx-auto max-w-[1200px] px-3 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 text-lg font-extrabold text-slate-800">
          <img src ="data:image/png;base64,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" className="h-12 w-auto"></img>
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
          <MenuItem to="/services/oracle-development" icon={<CreditCard size={16} />}>Oracle Development</MenuItem>
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
