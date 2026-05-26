import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const ORDER_LINK = 'https://www.toasttab.com/sheesh-chantilly/v3';

export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero-anchor');
      if (hero) {
        setShow(window.scrollY > hero.offsetTop + hero.offsetHeight - 80);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#F0F0F0] px-4 py-3">
          <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-bold py-3.5 rounded-full transition-colors w-full">
            <ShoppingBag className="w-4 h-4" /> Order Online
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
