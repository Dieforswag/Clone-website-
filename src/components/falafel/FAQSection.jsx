import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Is your food halal?', a: 'Yes, all of our chicken, beef, and lamb is certified halal. We source from trusted suppliers and maintain strict preparation standards throughout our kitchen.' },
  { q: 'How does online ordering work?', a: "Visit our Toast ordering page, pick your location (Chantilly or Falls Church), build your meal, and choose pickup or delivery. We'll have it fresh and ready for you!" },
  { q: 'Do you offer gluten-free options?', a: 'Yes! Our rice bowls, kabob plates, and many other items are naturally gluten-free. Just let us know about any dietary needs when ordering.' },
  { q: 'Do you cater for events?', a: 'Absolutely! We offer catering packages from 15 to 45+ people. Our kabob trays, rice platters, and sides are perfect for office lunches, parties, and celebrations. Call us to order.' },
  { q: 'What are your hours?', a: 'Both our Chantilly (Sully Plaza) and Falls Church (Mosaic District) locations are open Monday through Sunday, 11:30AM to 9PM.' },
  { q: 'Can I customize my order?', a: 'Yes! Our Build Your Own option lets you choose your base (rice, greens, or wrap), pick your protein, and add your favorite toppings and sauces.' },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="bg-white rounded-[1.25rem] border border-[#F0F0F0] overflow-hidden"
      style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4">
        <span className="font-display font-semibold text-[14.5px] text-[#0D0D0D]">{item.q}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${open ? 'bg-brand text-white' : 'bg-surface text-[#888]'}`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <div className="px-5 pb-5 text-[13.5px] text-[#4D4D4D] leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div ref={ref} className="max-w-2xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10">
          <span className="text-brand text-[11px] font-bold tracking-widest uppercase block mb-2">Questions</span>
          <h2 className="font-display font-bold text-[#0D0D0D] tracking-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            Frequently Asked
          </h2>
        </motion.div>
        {inView && (
          <div className="space-y-2.5">
            {faqs.map((f, i) => <FAQItem key={f.q} item={f} index={i} />)}
          </div>
        )}
      </div>
    </section>
  );
}
