import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const ORDER_LINK = 'https://www.toasttab.com/sheesh-chantilly/v3';

export default function PromoBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-6 sm:py-8 bg-surface">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand via-[#E85520] to-[#D94E20] px-6 sm:px-10 py-8 sm:py-9 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Decorative circles */}
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-white/8 pointer-events-none" />

          <div className="relative z-10 text-center sm:text-left">
            <h3 className="font-display font-bold text-white text-xl sm:text-2xl tracking-tight mb-1.5">
              Order Online — Fast &amp; Easy
            </h3>
            <p className="text-white/80 text-sm">
              Skip the line! Order ahead for <strong className="text-white font-bold">pickup or delivery</strong> from either location.
            </p>
          </div>

          <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer"
            className="relative z-10 shrink-0 flex items-center gap-2 bg-white hover:bg-[#FFF5F2] text-brand text-sm font-bold px-7 py-3 rounded-full transition-all duration-200 shadow-lg hover:scale-[1.02] active:scale-[0.98]">
            <ShoppingBag className="w-4 h-4" /> Order Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
