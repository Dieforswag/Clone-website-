import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const imgs = [
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', label: 'Our Restaurant' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', label: 'Fresh Ingredients' },
  { src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80', label: 'Catering Events' },
];

export default function AtmosphereSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8">
          <span className="text-brand text-[11px] font-bold tracking-widest uppercase block mb-2">The Vibe</span>
          <h2 className="font-display font-bold text-[#0D0D0D] tracking-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            Fast Casual, Full Flavor
          </h2>
          <p className="text-[#888] text-sm mt-2 max-w-sm mx-auto">
            Fresh, quick, and always satisfying. Dine in or take it to go.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {imgs.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative rounded-[1.75rem] overflow-hidden aspect-[4/3]">
              <img src={img.src} alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5">
                <span className="text-white font-display font-semibold text-sm">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
