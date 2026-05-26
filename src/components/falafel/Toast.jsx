import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-[90] bg-white border border-[#EFEFEF] rounded-[1.25rem] px-4 py-3 shadow-card-hover flex items-center gap-3 max-w-[260px]">
          <div className="w-7 h-7 bg-green-50 rounded-full flex items-center justify-center shrink-0">
            <CheckCircle className="w-4 h-4 text-green-500" />
          </div>
          <span className="text-[13px] font-medium text-[#0D0D0D]">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
