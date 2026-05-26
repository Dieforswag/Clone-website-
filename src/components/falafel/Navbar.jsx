import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Flame } from 'lucide-react';

const ORDER_LINK_CHANTILLY = 'https://www.toasttab.com/sheesh-chantilly/v3';
const ORDER_LINK_FALLS_CHURCH = 'https://order.toasttab.com/online/sheesh-falls-church';

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Catering', href: '#catering' },
  { label: 'Locations', href: '#locations' },
  { label: 'Rewards', href: '#rewards' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [orderDropdown, setOrderDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center shadow-brand/20 shadow-md">
              <Flame className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-[17px] tracking-tight text-[#0D0D0D]">
              Sheesh<span className="text-brand"> Grill</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="text-[13.5px] font-medium text-[#4D4D4D] hover:text-[#0D0D0D] transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA - Order Online with location picker */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative"
              onMouseEnter={() => setOrderDropdown(true)}
              onMouseLeave={() => setOrderDropdown(false)}>
              <button
                className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-[13.5px] font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-brand shadow-sm">
                <ShoppingBag className="w-3.5 h-3.5" />
                Order Online
              </button>
              <AnimatePresence>
                {orderDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-card-hover border border-[#F0F0F0] p-2 min-w-[220px]">
                    <a href={ORDER_LINK_CHANTILLY} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface transition-colors">
                      <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center shrink-0">
                        <Flame className="w-4 h-4 text-brand" />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#0D0D0D]">Chantilly</div>
                        <div className="text-[10.5px] text-[#888]">Sully Plaza</div>
                      </div>
                    </a>
                    <a href={ORDER_LINK_FALLS_CHURCH} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface transition-colors">
                      <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center shrink-0">
                        <Flame className="w-4 h-4 text-brand" />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#0D0D0D]">Falls Church</div>
                        <div className="text-[10.5px] text-[#888]">Mosaic District</div>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(true)} className="lg:hidden p-2 -mr-1">
            <Menu className="w-5 h-5 text-[#0D0D0D]" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] z-[80] bg-white flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-[68px] border-b border-[#F0F0F0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-brand rounded-xl flex items-center justify-center">
                    <Flame className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="font-display font-bold text-[15px]">Sheesh<span className="text-brand"> Grill</span></span>
                </div>
                <button onClick={() => setOpen(false)} className="p-1.5">
                  <X className="w-5 h-5 text-[#4D4D4D]" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col p-5 gap-1">
                {links.map((l, i) => (
                  <motion.a key={l.label} href={l.href} onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl hover:bg-surface text-[15px] font-semibold text-[#0D0D0D] transition-colors">
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="p-5 space-y-3 border-t border-[#F0F0F0]">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#AAA] px-1 mb-1">Order Online</p>
                <a href={ORDER_LINK_CHANTILLY} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-bold py-3 rounded-full transition-colors w-full">
                  <ShoppingBag className="w-4 h-4" /> Chantilly
                </a>
                <a href={ORDER_LINK_FALLS_CHURCH} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#0D0D0D] hover:bg-[#333] text-white text-sm font-bold py-3 rounded-full transition-colors w-full">
                  <ShoppingBag className="w-4 h-4" /> Falls Church
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
