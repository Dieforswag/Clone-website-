import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Phone } from 'lucide-react';

const CATERING_IMG = 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80';

const packages = [
  'Party Pack for 15 — Kabob Tray with rice, salad & sides',
  'Party Pack for 25 — Mixed kabobs, gyro, rice & salad trays',
  'Party Pack for 35+ — Full catering spread with all the fixings',
  'Custom options available for any group size',
];

export default function CateringSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="catering" className="py-16 sm:py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 overflow-hidden rounded-[2rem] border border-[#F0F0F0] bg-surface"
          style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
          <div className="relative min-h-[240px] lg:min-h-0">
            <img src={CATERING_IMG} alt="Sheesh Grill catering spread" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <span className="text-brand text-[11px] font-bold tracking-widest uppercase block mb-2">Catering</span>
            <h2 className="font-display font-bold text-[#0D0D0D] tracking-tight leading-tight mb-3"
              style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
              Feed the<br />Whole Crew
            </h2>
            <p className="text-[#4D4D4D] text-[15px] leading-relaxed mb-5">
              Office lunch, birthday party, or family gathering? Our catering packages 
              feature our signature kabob trays, fresh rice, and all the sides. 
              Perfect for groups of 15 to 45+.
            </p>
            <ul className="space-y-3 mb-7">
              {packages.map(p => (
                <li key={p} className="flex items-start gap-3 text-sm text-[#4D4D4D]">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" strokeWidth={2.5} />
                  </div>
                  {p}
                </li>
              ))}
            </ul>
            <a href="tel:5712877898"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-200 w-fit hover:shadow-brand">
              <Phone className="w-4 h-4" /> Call to Order Catering
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
