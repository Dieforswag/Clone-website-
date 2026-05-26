import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, UtensilsCrossed, Zap, Heart } from 'lucide-react';

const features = [
  { icon: Leaf, label: 'Made Fresh Daily', desc: 'Everything prepared from scratch every morning. No freezers, no microwaves, no shortcuts.', bg: 'bg-brand-light', color: 'text-brand' },
  { icon: UtensilsCrossed, label: '100% Halal', desc: 'All our meat is certified halal. Sourced from trusted suppliers with strict preparation standards.', bg: 'bg-green-50', color: 'text-green-600' },
  { icon: Zap, label: 'Quick & Easy', desc: 'Order online for pickup or delivery. Your meal is fresh and ready when you arrive.', bg: 'bg-amber-50', color: 'text-amber-600' },
  { icon: Heart, label: 'For Everyone', desc: 'Vegetarian, vegan, and gluten-free options. Something delicious for every diet.', bg: 'bg-rose-50', color: 'text-rose-500' },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <span className="text-brand text-[11px] font-bold tracking-widest uppercase block mb-2">Why Us</span>
          <h2 className="font-display font-bold text-[#0D0D0D] tracking-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            What Makes Sheesh Grill Different
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface rounded-[1.75rem] p-6 text-center border border-[#EDEDED]">
              <div className={`w-12 h-12 ${f.bg} rounded-[1rem] flex items-center justify-center mx-auto mb-4`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="font-display font-bold text-[15px] text-[#0D0D0D] mb-2">{f.label}</h3>
              <p className="text-[12.5px] text-[#888] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
