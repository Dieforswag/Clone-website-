import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    sub: 'Google Review',
    avatar: 'S',
    avatarBg: 'bg-brand-light text-brand',
    text: '"The chicken kabob is perfectly marinated and grilled. The saffron rice is heavenly. Best Middle Eastern food in Northern Virginia — we drive from Fairfax just for this!"',
  },
  {
    name: 'Ahmed K.',
    sub: 'Yelp Review',
    avatar: 'A',
    avatarBg: 'bg-green-50 text-green-600',
    text: '"Finally found authentic Afghan/Middle Eastern food that reminds me of home. The kubideh is phenomenal, and the portions are generous. Great catering for our office too."',
  },
  {
    name: 'Michelle P.',
    sub: 'Google Review',
    avatar: 'M',
    avatarBg: 'bg-amber-50 text-amber-600',
    text: '"The falafel wrap is my go-to lunch. Everything is so fresh and flavorful. Staff is incredibly friendly and the online ordering makes pickup a breeze."',
  },
];

export default function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-surface">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10">
          <span className="text-brand text-[11px] font-bold tracking-widest uppercase block mb-2">Reviews</span>
          <h2 className="font-display font-bold text-[#0D0D0D] tracking-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            What Our Guests Say
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[1.75rem] p-6 border border-[#F0F0F0]"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-[#4D4D4D] text-[14px] leading-relaxed mb-5 italic">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#F5F5F5]">
                <div className={`w-9 h-9 ${r.avatarBg} rounded-full flex items-center justify-center font-display font-bold text-sm`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0D0D0D]">{r.name}</div>
                  <div className="text-[10.5px] text-[#AAA]">{r.sub}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
