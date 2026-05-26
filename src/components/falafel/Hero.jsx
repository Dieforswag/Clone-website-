import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MapPin, Clock, Truck } from 'lucide-react';

const HERO_IMG = 'https://images.unsplash.com/photo-1623428187425-873f16e10554?w=1600&q=80';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Authentic Middle Eastern feast with kabobs and rice" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 md:from-black/65 md:via-black/35 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-[580px]">
            <motion.span
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Best Middle Eastern &amp; Afghan Food in Virginia
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
              className="font-display font-bold text-white leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 4.5rem)' }}>
              Authentic Flavor,<br />
              Crafted with<br />
              <span className="text-brand">Fire &amp; Soul</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-white/70 text-[15px] sm:text-base leading-relaxed mb-8 max-w-[440px]">
              Time-honored Middle Eastern and Afghan recipes with the finest ingredients. 
              Bold spices, vibrant herbs, and freshness you can savor in every bite.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="flex flex-wrap gap-3 mb-8">
              <a href="#menu"
                className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-brand hover:scale-[1.02] active:scale-[0.98]">
                <ShoppingBag className="w-4 h-4" /> Order Online
              </a>
              <a href="#locations"
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-sm font-bold px-7 py-3.5 rounded-full border border-white/25 transition-all duration-200">
                <MapPin className="w-4 h-4" /> Find a Location
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center gap-5 text-[13px] text-white/50">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand" /> Open 11:30AM–9PM
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-brand" /> Pickup &amp; Delivery
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-white/40">
        <span className="text-[9px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-6 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
