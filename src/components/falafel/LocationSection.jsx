import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Phone, ShoppingBag } from 'lucide-react';

const locations = [
  {
    name: 'Sully Plaza — Chantilly',
    address: '13940 Lee Jackson Memorial Hwy, Chantilly, VA 20151',
    hours: 'Monday–Sunday 11:30AM–9PM',
    phone: '571.287.7898',
    orderLink: 'https://www.toasttab.com/sheesh-chantilly/v3',
  },
  {
    name: 'Mosaic District — Falls Church',
    address: '8190 Strawberry Lane Ste 4, Falls Church, VA 22042',
    hours: 'Monday–Sunday 11:30AM–9PM',
    phone: '571.282.3100',
    orderLink: 'https://order.toasttab.com/online/sheesh-falls-church',
  },
];

export default function LocationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="locations" className="py-16 sm:py-20 bg-surface">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10">
          <span className="text-brand text-[11px] font-bold tracking-widest uppercase block mb-2">Find Us</span>
          <h2 className="font-display font-bold text-[#0D0D0D] tracking-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            Our Locations
          </h2>
          <p className="text-[#888] text-sm mt-2 max-w-md mx-auto">
            Two locations in Northern Virginia serving the same authentic flavors you love.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[1.75rem] p-6 sm:p-7 border border-[#F0F0F0] hover:shadow-card-hover transition-shadow duration-300">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-11 h-11 bg-brand-light rounded-[0.875rem] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[15px] text-[#0D0D0D]">{loc.name}</h3>
                  <p className="text-[12px] text-[#999] mt-0.5">{loc.address}</p>
                </div>
              </div>
              <div className="space-y-2.5 mb-6 pl-1">
                <div className="flex items-start gap-2.5 text-[13px] text-[#666]">
                  <Clock className="w-4 h-4 text-[#AAA] mt-0.5 shrink-0" />
                  {loc.hours}
                </div>
                <div className="flex items-center gap-2.5 text-[13px] text-[#666]">
                  <Phone className="w-4 h-4 text-[#AAA] shrink-0" />
                  {loc.phone}
                </div>
              </div>
              <a href={loc.orderLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-[12.5px] font-bold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-brand">
                <ShoppingBag className="w-3.5 h-3.5" /> Order Online
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
