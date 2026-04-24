import { motion, AnimatePresence } from 'motion/react';
import React from 'react';

export const StatusBar = ({ dark = false }: { dark?: boolean }) => (
  <div className={`flex justify-between items-center px-8 pt-4 pb-2 h-11 text-[13px] font-semibold pointer-events-none z-50 ${dark ? 'text-white' : 'text-[#1A1D23]'}`}>
    <div>9:41</div>
    <div className="flex gap-1.5 items-center">
      <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 10.5H16C16.2761 10.5 16.5 10.2761 16.5 10V1C16.5 0.723858 16.2761 0.5 16C0.5H14C13.7239 0.5 13.5 0.723858 13.5 1V10C13.5 10.2761 13.7239 10.5 14 10.5ZM10 10.5H12C12.2761 10.5 12.5 10.2761 12.5 10V3C12.5 2.72386 12.2761 2.5 12 2.5H10C9.72386 2.5 9.5 2.72386 9.5 3V10C9.5 10.2761 9.72386 10.5 10 10.5ZM6 10.5H8C8.27614 10.5 8.5 10.2761 8.5 10V5C8.5 4.72386 8.27614 4.5 8 4.5H6C5.72386 4.5 5.5 4.72386 5.5 5V10C5.5 10.2761 5.72386 10.5 6 10.5ZM2 10.5H4C4.27614 10.5 4.5 10.2761 4.5 10V7C4.5 6.72386 4.27614 6.5 4 6.5H2C1.72386 6.5 1.5 6.72386 1.5 7V10C1.5 10.2761 1.72386 10.5 2 10.5Z" fill="currentColor"/>
      </svg>
      <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 10.5C9.70914 10.5 11.5 8.70914 11.5 6.5C11.5 4.29086 9.70914 2.5 7.5 2.5C5.29086 2.5 3.5 4.29086 3.5 6.5C3.5 8.70914 5.29086 10.5 7.5 10.5Z" fill="currentColor"/>
      </svg>
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.75" y="1.25" width="21" height="9.5" rx="2.25" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="2.5" y="3" width="13" height="6" rx="1" fill="currentColor"/>
      </svg>
    </div>
  </div>
);

export const FloatingBottomNav = ({ activeTab, dark = false }: { activeTab: string, dark?: boolean }) => {
  const tabs = [
    { id: 'Accueil', label: 'Accueil', icon: (color: string, filled: boolean) => (
      filled ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#1A56DB"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1V9.5z"/></svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1V9.5z"/></svg>
      )
    )},
    { id: 'Clients', label: 'Clients', icon: (color: string, filled: boolean) => (
      filled ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#1A56DB"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M18 8a3 3 0 1 1-3.95 2.84"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    )},
    { id: 'Scanner', label: 'Scanner', icon: () => (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>
    )},
    { id: 'Ventes', label: 'Ventes', icon: (color: string, filled: boolean) => (
      filled ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#1A56DB"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      )
    )},
    { id: 'Profil', label: 'Profil', icon: (color: string, filled: boolean) => (
      filled ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#1A56DB"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      )
    )},
  ];

  const activeColor = '#1A56DB';
  const inactiveColor = '#B0B4BE';

  return (
    <div className="absolute bottom-0 left-0 right-0 z-[100] px-0">
      {/* Background with Blur and Border */}
      <div className={`relative h-[80px] pb-safe flex items-center justify-around border-t shadow-[0_-10px_40px_rgba(0,0,0,0.04)] ${dark ? 'bg-zinc-900 border-white/10' : 'bg-white border-[#F1F5F9]'}`}>
        
        {/* Active Selection Glow Decor */}
        <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-[#1A6BFF30] to-transparent" />

        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isScanner = tab.id === 'Scanner';

          if (isScanner) {
            return (
              <div key={tab.id} className="relative w-16 h-full flex items-center justify-center -mt-8">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-14 h-14 bg-gradient-to-br from-[#1A6BFF] to-[#0F3D91] rounded-2xl flex items-center justify-center shadow-[0_12px_24px_rgba(26,107,255,0.4)] border-2 border-white/20"
                >
                  {tab.icon('white', true)}
                </motion.button>
              </div>
            );
          }

          return (
            <motion.div 
              key={tab.id} 
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center flex-1 h-full cursor-pointer relative"
            >
              <div className="relative flex flex-col items-center gap-1">
                <div className="transition-transform duration-200">
                  {tab.icon(isActive ? activeColor : inactiveColor, isActive)}
                </div>
                
                <span 
                  className="text-[11px] font-bold tracking-tight transition-all duration-300" 
                  style={{ 
                    color: isActive ? activeColor : inactiveColor,
                    opacity: isActive ? 1 : 0.6,
                    transform: isActive ? 'translateY(0)' : 'translateY(1px)'
                  }}
                >
                  {tab.label}
                </span>

                {/* Subtle active indicator dot */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-dot"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -bottom-2 w-1 h-1 rounded-full bg-[#1A6BFF] shadow-[0_0_8px_rgba(26,107,255,0.6)]"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const PhoneFrame = ({ children, index }: { children: React.ReactNode, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    className="relative w-[390px] h-[844px] bg-black rounded-[44px] border-[3px] border-black shadow-[var(--shadow-lg)] overflow-hidden shrink-0"
  >
    {/* Subtle Inner Highlight */}
    <div className="absolute inset-x-[1px] top-[1px] h-[100px] bg-gradient-to-b from-white/10 to-transparent rounded-t-[44px] pointer-events-none z-[60]"></div>
    <div className="absolute inset-0 border border-white/10 rounded-[44px] pointer-events-none z-50"></div>
    <div className="relative w-full h-full bg-[var(--bg)] overflow-hidden flex flex-col">
       {children}
    </div>
  </motion.div>
);
