import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const items = [
  { src: 'https://images.unsplash.com/photo-1623428187425-873f16e10554?w=800&q=80', label: 'The Grand Spread', span: 'col-span-2 row-span-2 min-h-[280px]' },
  { src: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80', label: 'Chicken Kabob', span: '' },
  { src: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&q=80', label: 'Shawarma Wrap', span: '' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80', label: 'Grilled Kabobs', span: '' },
  { src: 'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?w=500&q=80', label: 'Falafel Bowl', span: '' },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8">
          <span className="text-brand text-[11px] font-bold tracking-widest uppercase block mb-2">The Spread</span>
          <h2 className="font-display font-bold text-[#0D0D0D] tracking-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            Eat With Your Eyes First
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 auto-rows-[160px] sm:auto-rows-[200px]">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`${item.span} group relative rounded-[1.5rem] overflow-hidden cursor-pointer`}>
              <img src={item.src} alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5">
                <span className="text-white font-display font-bold text-sm sm:text-base">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
