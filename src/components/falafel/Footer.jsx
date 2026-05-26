import React from 'react';
import { Flame, Instagram, Facebook, Clock, Phone, MapPin } from 'lucide-react';

const col1 = ['Order Online', 'Full Menu', 'Catering', 'Rewards'];
const col2 = ['Our Story', 'Careers', 'Contact'];
const col3 = ['Chantilly — Sully Plaza', 'Falls Church — Mosaic District'];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center">
                <Flame className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-base">Sheesh<span className="text-brand"> Grill</span></span>
            </a>
            <p className="text-[12px] text-white/40 leading-relaxed max-w-[260px] mb-4">
              Authentic Middle Eastern &amp; Afghan cuisine. Time-honored recipes, 
              finest ingredients, bold spices, vibrant herbs.
            </p>
            <div className="flex gap-2">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 bg-white/8 hover:bg-brand rounded-xl flex items-center justify-center transition-colors duration-200">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {([['Quick Links', col1], ['Company', col2], ['Locations', col3]]).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[9.5px] font-bold tracking-widest uppercase text-white/35 mb-3.5">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}><a href="#" className="text-[12.5px] text-white/50 hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Info bar */}
        <div className="border-t border-white/8 pt-6 mb-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, main: 'Mon–Sun: 11:30AM–9PM', sub: 'Both locations same hours' },
              { icon: Phone, main: '571.287.7898', sub: 'Chantilly | 571.282.3100 Falls Church' },
              { icon: MapPin, main: 'Chantilly & Falls Church', sub: 'Northern Virginia' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-brand shrink-0" />
                <div>
                  <div className="text-[12.5px] font-medium text-white/80">{item.main}</div>
                  <div className="text-[11px] text-white/35">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10.5px] text-white/25">&copy; 2025 Sheesh Grill. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms', 'Accessibility'].map(l => (
              <a key={l} href="#" className="text-[10.5px] text-white/25 hover:text-white/60 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
