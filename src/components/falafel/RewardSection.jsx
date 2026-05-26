import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, Gift, Star, Sparkles, CheckCircle } from 'lucide-react';

export default function RewardsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="rewards" className="py-16 sm:py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-[#0D0D0D]">
          {/* Decorative */}
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-brand/10 pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-44 h-44 rounded-full bg-brand/5 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-10 lg:p-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand/20 text-brand text-[10.5px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5">
                <Crown className="w-3 h-3" /> Sheesh Rewards
              </div>
              <h2 className="font-display font-bold text-white tracking-tight leading-tight mb-3"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                Earn Points.<br />Get Free Food.
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed mb-7 max-w-sm">
                Join Sheesh Rewards and earn points with every order. 
                Unlock free meals, birthday rewards, and exclusive member deals.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-bold px-6 py-3 rounded-full transition-all hover:shadow-brand">
                  <Crown className="w-4 h-4" /> Join Rewards
                </a>
                <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-bold px-6 py-3 rounded-full border border-white/10 transition-colors">
                  Learn More
                </a>
              </div>
            </div>

            {/* Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 w-full max-w-[300px]">
                <div className="text-center mb-5">
                  <div className="w-14 h-14 bg-brand rounded-[1rem] flex items-center justify-center mx-auto mb-3">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-white font-display font-bold text-sm">Sheesh Rewards</p>
                </div>
                <div className="space-y-3 mb-5">
                  {[
                    { icon: Gift, label: 'Free Birthday Meal' },
                    { icon: Star, label: 'Points on Every Order' },
                    { icon: Sparkles, label: 'Exclusive Member Deals' },
                  ].map(r => (
                    <div key={r.label} className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <r.icon className="w-3.5 h-3.5 text-brand" />
                      </div>
                      <span className="flex-1 text-[12.5px] text-white/75 font-medium">{r.label}</span>
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between text-[10.5px] text-white/40 mb-2">
                    <span>Progress to free meal</span>
                    <span className="text-white font-bold">380 / 500 pts</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-brand h-2 rounded-full" style={{ width: '76%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
