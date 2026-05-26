import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const ORDER_LINK = 'https://www.toasttab.com/sheesh-chantilly/v3';

const dishes = [
  {
    name: 'Chicken Kabob Plate',
    price: '$15.99',
    desc: 'Juicy marinated chicken kabob skewers with saffron basmati rice, chickpeas, and garden salad',
    img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80',
    tags: [{ label: 'Halal', color: 'bg-green-50 text-green-700' }, { label: 'GF', color: 'bg-orange-50 text-orange-600' }],
    badge: { label: 'Fan Fave', color: 'bg-brand text-white' },
  },
  {
    name: 'Beef Kubideh',
    price: '$16.99',
    desc: 'Seasoned ground beef & lamb kabob on skewer with saffron rice, grilled tomato, and butter',
    img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80',
    tags: [{ label: 'Halal', color: 'bg-green-50 text-green-700' }, { label: 'High Protein', color: 'bg-amber-50 text-amber-700' }],
    badge: { label: 'Popular', color: 'bg-red-500 text-white' },
  },
  {
    name: 'Chicken Shawarma Wrap',
    price: '$12.99',
    desc: 'Marinated chicken shawarma with garlic sauce, lettuce, tomato, cucumber in warm pita bread',
    img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&q=80',
    tags: [{ label: 'Halal', color: 'bg-green-50 text-green-700' }],
    badge: { label: 'Best Seller', color: 'bg-emerald-500 text-white' },
  },
  {
    name: 'Falafel Bowl',
    price: '$13.99',
    desc: 'Crispy falafel with hummus, pickled turnips, tahini sauce over saffron basmati rice',
    img: 'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?w=500&q=80',
    tags: [{ label: 'Vegan', color: 'bg-green-50 text-green-700' }, { label: 'GF Option', color: 'bg-orange-50 text-orange-600' }],
    badge: null,
  },
  {
    name: 'Gyro Plate',
    price: '$14.99',
    desc: 'Seasoned beef & lamb slow-broiled and carved off the cone with rice, fries, and chickpeas',
    img: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=500&q=80',
    tags: [{ label: 'Halal', color: 'bg-green-50 text-green-700' }, { label: 'High Protein', color: 'bg-amber-50 text-amber-700' }],
    badge: null,
  },
];

function DishCard({ dish, index, onAdd }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group shrink-0 w-[240px] sm:w-[260px] bg-white rounded-[1.75rem] overflow-hidden border border-[#F0F0F0] cursor-pointer hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
      onClick={() => onAdd(dish.name)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <img src={dish.img} alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
        {dish.badge && (
          <span className={`absolute top-3 left-3 ${dish.badge.color} text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full`}>
            {dish.badge.label}
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onAdd(dish.name); }}
          className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-brand hover:text-white">
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4 pb-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-display font-bold text-[15px] text-[#0D0D0D]">{dish.name}</h3>
          <span className="text-brand font-bold text-[15px] shrink-0">{dish.price}</span>
        </div>
        <p className="text-[12.5px] text-[#888] leading-relaxed mb-3">{dish.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {dish.tags.map(t => (
            <span key={t.label} className={`${t.color} text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedDishes({ onToast }) {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="menu" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div ref={headerRef}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-brand text-[11px] font-bold tracking-widest uppercase block mb-2">Fan Favorites</span>
            <h2 className="font-display font-bold text-[#0D0D0D] leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
              Build Your<br className="sm:hidden" /> Perfect Meal
            </h2>
          </div>
          <a href={ORDER_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-brand hover:text-brand-dark text-sm font-bold transition-colors shrink-0">
            Full Menu <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Horizontal scroll */}
        <div className="overflow-x-auto -mx-5 px-5 sm:-mx-8 sm:px-8 pb-4"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-4 w-max">
            {dishes.map((d, i) => (
              <DishCard key={d.name} dish={d} index={i} onAdd={onToast} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
