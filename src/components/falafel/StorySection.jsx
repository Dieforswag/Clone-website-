import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const KITCHEN_IMG = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80';
const KABOB_IMG = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80';

const stats = [
  { value: '2', label: 'Locations' },
  { value: '100%', label: 'Halal' },
  { value: '0', label: 'Shortcuts' },
];

export default function StorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="story" className="py-16 sm:py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-card">
              <img src={KITCHEN_IMG} alt="Sheesh Grill restaurant" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-4 sm:-right-6 w-36 sm:w-48 h-36 sm:h-48 rounded-[1.5rem] overflow-hidden border-4 border-white shadow-card-hover">
              <img src={KABOB_IMG} alt="Fresh kabobs on the grill" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            <span className="text-brand text-[11px] font-bold tracking-widest uppercase block mb-3">Our Story</span>
            <h2 className="font-display font-bold tracking-tight text-[#0D0D0D] leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Every Bite, a Celebration<br />of Authentic Taste.
            </h2>
            <p className="text-[#4D4D4D] text-[15px] leading-relaxed mb-4">
              At Sheesh Grill, our dishes are crafted using time-honored Middle Eastern 
              and Afghan recipes with the finest ingredients. We deliver bold spices, 
              vibrant herbs, and a freshness you can savor in every meal.
            </p>
            <p className="text-[#4D4D4D] text-[15px] leading-relaxed mb-8">
              From our signature chicken kabobs to hand-rolled kubideh, everything is 
              prepared fresh daily. Our saffron basmati rice is cooked to perfection, 
              and our bread is baked in-house. No compromises, ever.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {stats.map(s => (
                <div key={s.label} className="bg-surface rounded-[1.25rem] p-4 text-center border border-[#EFEFEF]">
                  <div className="font-display font-bold text-3xl text-brand">{s.value}</div>
                  <div className="text-[11px] text-[#888] font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
