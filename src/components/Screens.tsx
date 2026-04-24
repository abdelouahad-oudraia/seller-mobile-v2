import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, FloatingBottomNav } from './Layout';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
};

// --- SCREEN 0: SPLASH SCREEN ---
export const ScreenSplash = () => {
  return (
    <div className="relative h-full overflow-hidden bg-[linear-gradient(160deg,#0F3D91_0%,#1A6BFF_60%,#3B82F6_100%)] flex flex-col items-center justify-center">
      {/* Dynamic Blobs for Atmosphere */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -120, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] bg-[#00C896]/15 rounded-full blur-[70px] pointer-events-none" 
      />

      {/* Logo Container */}
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ 
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          className="w-24 h-24 rounded-[28px] bg-white border-[2px] border-white/40 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-md"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
            <path d="M3 6h18"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </motion.div>
        
        {/* Sparkle effects */}
        <motion.div 
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute -top-4 -right-4 text-white/40"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 flex flex-col items-center"
      >
        <h1 className="text-[36px] font-black text-white tracking-[-1px]">Seller</h1>
        <div className="h-[3px] w-12 bg-[var(--accent)] rounded-full mt-1 mb-3" />
        <p className="text-[14px] text-white/60 font-medium tracking-wider uppercase">L'expert de la vente terrain</p>
      </motion.div>

      {/* Loading Indicator */}
      <div className="absolute bottom-[10%] flex flex-col items-center gap-4">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
              className="w-2 h-2 bg-white rounded-full"
            />
          ))}
        </div>
        <span className="text-white/40 text-[11px] font-bold tracking-widest uppercase">Initialisation...</span>
      </div>
    </div>
  );
};

// --- SCREEN 1: CONNEXION ---
export const ScreenConnexion = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="relative h-full overflow-hidden bg-[linear-gradient(160deg,#0F3D91_0%,#1A6BFF_60%,#3B82F6_100%)]">
      {/* Blobs */}
      <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] bg-white/8 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-60px] w-[160px] h-[160px] bg-[#00C896]/12 rounded-full blur-[50px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-white/6 rounded-full blur-[40px] pointer-events-none" />

      <StatusBar />

      {/* Logo Zone */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col items-center mt-[15%]"
      >
        <div className="w-20 h-20 rounded-[22px] bg-white/18 border-[1.5px] border-white/35 backdrop-blur-[12px] flex items-center justify-center shadow-lg transform rotate-[-5deg]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </div>
        <h1 className="text-[28px] font-bold text-white mt-5 tracking-[-0.5px]">Seller</h1>
        <p className="text-[14px] text-white/70 mt-1">Votre espace commercial</p>
      </motion.div>

      {/* Login Card */}
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.4 }}
        className="absolute bottom-0 w-full bg-white/94 backdrop-blur-[24px] border border-white/60 rounded-t-[28px] px-6 pt-8 pb-[100px] shadow-[0_-8px_40px_rgba(15,61,145,0.15)]"
      >
        <h2 className="text-[22px] font-bold text-[var(--text-1)]">Connexion</h2>
        <p className="text-[14px] text-[var(--text-2)] mb-7">Connectez-vous à votre compte</p>

        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-[var(--text-2)] mb-1.5 ml-1">Login</label>
            <div className="flex items-center h-[52px] bg-white border-[1.5px] border-[var(--border)] rounded-[var(--radius-input)] focus-within:border-[var(--primary)] focus-within:ring-4 focus-within:ring-[rgba(26,107,255,0.12)] transition-all">
              <div className="w-[44px] flex items-center justify-center border-r border-[var(--border)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <input type="text" placeholder="Entrer votre login" className="flex-1 px-4 text-[14px] outline-none placeholder-[#C0C5D0]" />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[var(--text-2)] mb-1.5 ml-1">Mot de Passe</label>
            <div className="flex items-center h-[52px] bg-white border-[1.5px] border-[var(--border)] rounded-[var(--radius-input)] focus-within:border-[var(--primary)] focus-within:ring-4 focus-within:ring-[rgba(26,107,255,0.12)] transition-all overflow-hidden">
              <div className="w-[44px] flex items-center justify-center border-r border-[var(--border)] shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <input type={showPassword ? "text" : "password"} defaultValue="password123" className="flex-1 px-4 text-[14px] outline-none placeholder-[#C0C5D0]" />
              <button onClick={() => setShowPassword(!showPassword)} className="px-4 text-[#9CA3AF] hover:text-[var(--primary)] transition-colors active:scale-90">
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <motion.button 
          whileHover={{ brightness: 1.08, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-[54px] bg-[linear-gradient(135deg,#1A6BFF_0%,#0F3D91_100%)] rounded-[var(--radius-btn)] text-white font-bold text-[16px] mt-8 shadow-[0_8px_24px_rgba(26,107,255,0.38)] transition-all"
        >
          Se connecter
        </motion.button>

        <p className="text-[11px] text-[var(--text-2)] text-center mt-8 font-medium">v1.24.0</p>
      </motion.div>
    </div>
  );
};

// --- SCREEN 5: ACCUEIL (CATALOGUE) ---
const CategoryPill = ({ label, active }: { label: string, active?: boolean }) => (
  <button className={`px-4 py-2 rounded-[16px] text-[13px] font-bold transition-all shrink-0 ${active ? 'bg-[var(--primary)] text-white shadow-md' : 'bg-white border border-[var(--border)] text-[var(--text-2)]'}`}>
    {label}
  </button>
);

const ProductCard = ({ name, price, brand, image }: { name: string, price: string, brand: string, image: string }) => (
  <motion.div variants={itemVariants} className="bg-white border border-[var(--border)] rounded-[20px] p-3 shadow-sm flex flex-col gap-2 group">
    <div className="relative aspect-square rounded-[14px] overflow-hidden bg-gray-50">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
      <div className="absolute top-2 right-2 flex flex-col gap-1.5 translate-x-12 group-hover:translate-x-0 transition-transform">
        <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </button>
      </div>
    </div>
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-wider">{brand}</span>
      <h4 className="text-[14px] font-bold text-[var(--text-1)] line-clamp-1">{name}</h4>
      <div className="flex justify-between items-center mt-1">
        <span className="text-[15px] font-extrabold text-[var(--text-1)]">{price}</span>
        <motion.button whileTap={{ scale: 0.9 }} className="w-8 h-8 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export const ScreenAccueil = () => (
  <div className="h-full relative text-[var(--text-1)] flex flex-col">
    <StatusBar />
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex-1 overflow-y-auto no-scrollbar scroll-smooth overscroll-y-contain pb-32">
      <SearchBar />

      <div className="px-5">
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-4">
          <h2 className="text-[22px] font-extrabold tracking-tight">Catalogue</h2>
          <div className="relative">
             <button className="w-9 h-9 rounded-full bg-white border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
             </button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-2.5 overflow-x-auto pb-4 -mx-5 px-5">
          <CategoryPill label="Tout" active />
          <CategoryPill label="Boissons" />
          <CategoryPill label="Snacks" />
          <CategoryPill label="Laitage" />
          <CategoryPill label="Entretien" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 mt-2">
          <ProductCard brand="Coca-Cola" name="Pack 6x25cl Verre" price="42.00 MAD" image="https://picsum.photos/seed/cola/400/300" />
          <ProductCard brand="Pringles" name="Original Hot 165g" price="28.50 MAD" image="https://picsum.photos/seed/chips/400/300" />
          <ProductCard brand="Valencia" name="Orange Pur Jus 1L" price="15.90 MAD" image="https://picsum.photos/seed/juice/400/300" />
          <ProductCard brand="Monster" name="Energy Ultra 50cl" price="22.00 MAD" image="https://picsum.photos/seed/energy/400/300" />
        </div>

        <motion.div variants={itemVariants} className="mt-8 mb-4">
          <h3 className="text-[17px] font-bold mb-3">Nouveautés</h3>
          <div className="bg-[linear-gradient(135deg,#7C3AED_0,#4F46E5_100%)] rounded-[20px] p-5 text-white flex gap-4 items-center">
            <div className="flex-1">
              <span className="text-[11px] font-bold opacity-75 uppercase tracking-widest">Promotion flash</span>
              <p className="text-[16px] font-bold leading-tight mt-1">Pack Découverte Jus d'Anvers</p>
              <button className="mt-3 bg-white text-[#4F46E5] px-4 py-1.5 rounded-full text-[12px] font-bold shadow-lg">Voir l'offre</button>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>

    <FloatingBottomNav activeTab="Accueil" />
  </div>
);

// --- SEARCH BAR COMPONENT ---
const SearchBar = () => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="mx-5 mt-3 flex gap-2.5 items-center"
  >
    <div className="flex-1 flex items-center h-11 bg-white border border-[#E8ECF4] rounded-[18px] px-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input 
        type="text" 
        placeholder="Rechercher code produit..." 
        className="ml-2.5 text-[14px] outline-none placeholder-[#C0C5D0] w-full font-medium" 
      />
    </div>
    <motion.button 
      whileTap={{ scale: 0.92 }} 
      className="w-10 h-10 bg-[#1A6BFF] rounded-[14px] flex items-center justify-center text-white shadow-[0_4px_14px_rgba(26,107,255,0.35)] transition-all shrink-0"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.56-7.43H5.12"/></svg>
    </motion.button>
  </motion.div>
);

// --- SCREEN 2: PROFIL ---
export const ScreenProfile = () => {
  return (
    <div className="h-full relative text-[#1A1D23] flex flex-col overflow-y-auto no-scrollbar scroll-smooth overscroll-y-contain bg-[#F8FAFF] font-sans pb-10">
      <StatusBar dark={false} />
      
      <div className="flex-1 flex flex-col">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-5 mt-6 mb-2 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
             <motion.button 
               whileTap={{ scale: 0.9 }}
               className="w-10 h-10 rounded-full bg-white border border-[#E8ECF4] flex items-center justify-center text-[#1A1D23] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
             >
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
             </motion.button>
             <h2 className="text-[24px] font-[900] text-[#1A1D23] tracking-[-0.8px]">Mon Profil</h2>
          </div>
          
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-[16px] bg-white border border-[#E8ECF4] flex items-center justify-center text-[#6B7280] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></svg>
          </motion.button>
        </motion.div>

        {/* Identity Header (Hero Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mx-5 mt-3.5 h-[162px] rounded-[22px] bg-[linear-gradient(135deg,#1A6BFF_0%,#0F3D91_100%)] p-[24px_20px_22px] shadow-[0_20px_56px_rgba(26,107,255,0.20)] overflow-hidden relative"
        >
          {/* Decorative Blobs */}
          <div className="absolute top-[-40px] right-[-30px] w-[160px] h-[160px] bg-white/8 rounded-full blur-[40px] pointer-events-none" />
          <div className="absolute bottom-[-20px] left-[-20px] w-[120px] h-[120px] bg-[#00C896]/12 rounded-full blur-[35px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex items-center gap-4">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-[76px] h-[76px] rounded-full border-[2.5px] border-white/40 p-[3px] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white/22 backdrop-blur-[8px] flex items-center justify-center">
                  <span className="text-[22px] font-[800] text-white">OA</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-[22px] h-[22px] bg-[#00C896] border-2 border-[#0F3D91] rounded-full flex items-center justify-center shadow-lg">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h3 className="text-[18px] font-[800] text-white tracking-[-0.3px]">OMAR ALAOUI</h3>
              <div className="inline-flex bg-white/18 border border-white/35 rounded-full px-3 py-1 mt-2.5 leading-none">
                <span className="text-[11px] font-bold text-white">VDR</span>
              </div>
              <div className="flex items-center gap-1.5 mt-3.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" opacity="0.7"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-[12px] text-white/70 font-bold">ep sidi othmane</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.15 }}
           className="mx-5 mt-6 mb-4"
        >
          <div className="text-[11px] font-black text-[#9CA3AF] uppercase tracking-[1.5px] mb-3 ml-1">Paramètres du compte</div>

          <div className="bg-white border border-[#E8ECF4] rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden">
            {[
              { label: 'Nom', icon: 'person', value: 'Alaoui', type: 'text' },
              { label: 'Prénom', icon: 'person', value: 'Omar', type: 'text' },
              { label: 'Adresse Email', icon: 'mail', value: 'omar.alaoui@marjane.ma', type: 'email' },
              { label: 'Numéro de Tél', icon: 'phone', value: '+212 6 12 34 56 78', type: 'phone' },
            ].map((row, idx, arr) => (
              <motion.button 
                key={row.label}
                whileHover={{ backgroundColor: '#F9FBFF' }}
                whileTap={{ scale: 0.995 }}
                className={`w-full flex items-center px-5 h-[68px] text-left group transition-all ${idx !== arr.length - 1 ? 'border-b border-[#F1F3F9]' : ''}`}
              >
                <div className="w-10 h-10 rounded-[14px] bg-[#F1F4FF] flex items-center justify-center shrink-0 group-hover:bg-[#E6EEFF] transition-colors">
                   {row.icon === 'person' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A6BFF" strokeWidth="2.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                   {row.icon === 'mail' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A6BFF" strokeWidth="2.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>}
                   {row.icon === 'phone' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A6BFF" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
                </div>
                <div className="flex-1 ml-4 overflow-hidden">
                  <div className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-0.5">{row.label}</div>
                  <div className="text-[14px] font-[700] text-[#1A1D23] truncate leading-tight">{row.value}</div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="3" className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><path d="m9 18 6-6-6-6"/></svg>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Logout Zone */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-5 mt-4"
        >
          <motion.button 
            whileTap={{ scale: 0.97 }}
            className="w-full h-[58px] bg-[#FFF1F1] border-2 border-[#FECACA]/40 rounded-[20px] flex items-center justify-center gap-3 active:bg-[#FFE8E8] transition-all group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4D4F" strokeWidth="3" className="group-hover:-translate-x-1 transition-transform"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            <span className="text-[16px] font-black text-[#FF4D4F] tracking-tight uppercase">Déconnexion</span>
          </motion.button>
          
          <div className="mt-8 flex flex-col items-center opacity-40">
            <span className="text-[10px] font-black text-[#9CA3AF] tracking-[2px] uppercase">Seller App • Version 1.24.0</span>
          </div>
        </motion.div>
      </div>

      <FloatingBottomNav activeTab="Profil" />
    </div>
  );
};

// --- SCREEN 1.5: CLIENTS ---
export const ScreenClients = () => {
  const [search, setSearch] = useState('');
  
  const allClients = [
    { id: '#cli-2026-001', name: 'Marjane Hay Riad', status: 'Actif', phone: '0612345678', email: 'contact@marjane.ma', agent: 'OMAR ALAOUI', activity: 'il y a 2h' },
    { id: '#cli-2026-002', name: 'Carrefour Ain Sebaa', status: 'Lead', phone: '0623456789', email: 'contact@carrefour.ma', agent: 'OMAR ALAOUI', activity: 'il y a 1j' },
    { id: '#cli-2026-003', name: 'Label Vie Maarif', status: 'Prospect', phone: '0634567890', email: 'contact@labelvie.ma', agent: 'OMAR ALAOUI', activity: 'il y a 3j' },
    { id: '#cli-2026-004', name: 'Atacadão Salé', status: 'Actif', phone: '0645678901', email: 'contact@atacadao.ma', agent: 'OMAR ALAOUI', activity: 'il y a 5j' },
    { id: '#cli-2026-005', name: 'BIM Hay Mohammadi', status: 'Inactif', phone: '0656789012', email: 'contact@bim.ma', agent: 'OMAR ALAOUI', activity: 'il y a 1sem' },
    { id: '#cli-2026-006', name: 'Marjane Casa Anfa', status: 'Lead', phone: '0667890123', email: 'contact@marjaneanfa.ma', agent: 'OMAR ALAOUI', activity: 'il y a 2j' },
  ];

  const filteredClients = allClients.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.phone.includes(search) ||
    c.id.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Actif': return 'bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0]';
      case 'Lead': return 'bg-[#FFFBEB] text-[#92400E] border-[#FCD34D]';
      case 'Prospect': return 'bg-[#EEF2FF] text-[#3730A3] border-[#C7D2FE]';
      case 'Inactif': return 'bg-[#FFF1F1] text-[#991B1B] border-[#FECACA]';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getInitials = (name: string) => {
    const words = name.split(' ');
    let res = words[0][0];
    if (words.length > 1) res += words[1][0];
    return res.toUpperCase();
  };

  return (
    <div className="h-full relative text-[#1A1D23] flex flex-col bg-[#F5F7FF] font-sans overflow-hidden">
      <StatusBar dark={false} />

      <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth overscroll-y-contain p-4 pb-32">
        {/* Search Bar */}
        <div className="mb-4 h-11 bg-white border border-[#E8ECF4] rounded-[18px] px-4 flex items-center shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input 
            type="text" 
            placeholder="Rechercher un client..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2.5 text-[14px] outline-none placeholder-[#6B7280] w-full font-medium" 
          />
        </div>

        {/* Client List */}
        <div className="flex flex-col gap-2.5">
          <AnimatePresence mode="popLayout">
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <motion.div
                  layout
                  key={client.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white border border-[#E8ECF4] rounded-[16px] p-[14px_16px] shadow-[0_2px_12px_rgba(0,0,0,0.07)] flex items-start gap-3 transition-colors active:bg-[#E6EEFF]/40 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-[#E6EEFF] flex items-center justify-center text-[#1A6BFF] text-[13px] font-bold shrink-0">
                    {getInitials(client.name)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-bold text-[#1A1D23] truncate">{client.name}</div>
                    <div className="text-[12px] text-[#6B7280] font-medium leading-none mt-0.5">{client.id}</div>
                    
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1 text-[11px] text-[#6B7280]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <span>{client.phone}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-[#6B7280]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span>{client.activity}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mt-1.5">
                      <div className="w-5 h-5 rounded-full bg-[#E6EEFF] flex items-center justify-center text-[#1A6BFF] text-[8px] font-bold border border-white">
                        {getInitials(client.agent)}
                      </div>
                      <span className="text-[11px] text-[#6B7280] font-medium">{client.agent}</span>
                    </div>
                  </div>

                  <div className={`px-2.5 py-1 rounded-full text-[11px] font-bold border shrink-0 ${getStatusStyles(client.status)}`}>
                    {client.status}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="py-20 flex flex-col items-center justify-center text-center px-10">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
                <div className="mt-4 text-[14px] font-medium text-[#6B7280]">Aucun client trouvé</div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <FloatingBottomNav activeTab="Clients" dark={false} />
    </div>
  );
};


// --- SCREEN 3: SCANNER ---
export const ScreenScanner = () => {
  const [scanningMode, setScanningMode] = useState<'choice' | 'camera' | 'hardware'>('choice');
  const bufferRef = useRef<string>('');
  const [isReady, setIsReady] = useState(false);
  const [lastScanned, setLastScanned] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scanningMode !== 'hardware') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Hardware scanners typically act as a keyboard and end with "Enter"
      if (e.key === 'Enter') {
        if (bufferRef.current.length > 0) {
          const code = bufferRef.current;
          console.log("Scanned Code:", code);
          setLastScanned(code);
          bufferRef.current = '';
          
          // Tiny vibrator-like visual pulse
          setIsReady(false);
          setTimeout(() => setIsReady(true), 1000);
        }
      } else if (e.key.length === 1) {
        bufferRef.current += e.key;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    setIsReady(true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      bufferRef.current = '';
    };
  }, [scanningMode]);

  if (scanningMode === 'hardware') {
    return (
      <div className="h-full relative text-[#1A1D23] flex flex-col overflow-y-auto bg-[#0A2E6E] no-scrollbar">
        <div className="flex-1 flex flex-col items-center justify-center px-10 text-center">
          <motion.button 
            onClick={() => setScanningMode('choice')}
            className="absolute top-12 left-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md z-50"
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
          </motion.button>

          <motion.div
            animate={isReady ? { scale: [1, 1.05, 1], opacity: 1 } : { scale: 0.9, opacity: 0.5 }}
            transition={{ repeat: isReady ? Infinity : 0, duration: 2 }}
            className="w-32 h-32 rounded-3xl bg-white/10 border-2 border-white/30 flex items-center justify-center mb-8 backdrop-blur-xl"
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6v12" strokeWidth="2" />
              <path d="M8 6v12" strokeWidth="5" />
              <path d="M13 6v12" strokeWidth="2" />
              <path d="M17 6v12" strokeWidth="5" />
              <path d="M20 6v12" strokeWidth="2" />
              <path d="M4 20h16" strokeWidth="1" opacity="0.6" />
            </svg>
          </motion.div>

          <h2 className="text-[24px] font-bold text-white tracking-tight">Prêt à scanner</h2>
          <p className="text-white/60 text-[15px] mt-2 mb-10 max-w-[240px]">
            Utilisez votre lecteur Bluetooth ou USB pour scanner le code-barres du produit.
          </p>

          <AnimatePresence mode="wait">
            {lastScanned && (
              <motion.div
                key={lastScanned}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/10 border border-white/20 p-5 rounded-2xl w-full backdrop-blur-md"
              >
                <div className="text-white/40 text-[12px] font-bold uppercase tracking-wider">Dernier article lu</div>
                <div className="text-white text-[20px] font-mono mt-1 font-bold">{lastScanned}</div>
                <div className="mt-4 flex items-center justify-center gap-2 text-[#00C896] bg-[#00C896]/10 py-2 rounded-lg border border-[#00C896]/30">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
                   <span className="text-[13px] font-bold">Produit identifié</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 text-white/30 text-[13px] animate-pulse">
            En attente du signal...
          </div>
        </div>
        <FloatingBottomNav activeTab="Scanner" dark={true} />
      </div>
    );
  }

  return (
    <div className="h-full relative overflow-hidden bg-[#F5F7FF]">
      {/* Scrollable Content (CustomScrollView equivalent) */}
      <div 
        ref={scrollContainerRef}
        className="h-full overflow-y-auto no-scrollbar scroll-smooth overscroll-y-contain flex flex-col"
      >
        <StatusBar />
        
        <div className="flex-1 flex flex-col">
          <SearchBar />

          {/* Page Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-5 mt-7 mb-2"
          >
            <h2 className="text-[22px] font-[800] text-[#1A1D23] tracking-[-0.4px]">Scanner un produit</h2>
            <p className="text-[14px] text-[#6B7280] font-medium mt-1">Choisissez votre méthode</p>
          </motion.div>

          {/* Card 1: Camera */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
            whileHover={{ y: -3, shadow: '0 20px 56px rgba(26,107,255,0.32)' }}
            whileTap={{ scale: 0.97, filter: 'brightness(0.92)' }}
            className="mx-5 h-[160px] rounded-[22px] bg-[linear-gradient(135deg,#1A6BFF_0%,#4D90FF_100%)] shadow-[0_8px_32px_rgba(26,107,255,0.28)] overflow-hidden relative text-left transition-all group shrink-0"
          >
            {/* Decorative Circles */}
            <div className="absolute top-[-30px] right-[-30px] w-[130px] h-[130px] bg-white/8 rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20px] left-[20px] w-[80px] h-[80px] bg-white/6 rounded-full pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 p-[24px_22px] h-full flex items-center gap-[18px]">
              {/* Icon Zone */}
              <div className="w-[72px] h-[72px] rounded-[18px] bg-white/18 border-[1.5px] border-white/32 backdrop-blur-[8px] flex items-center justify-center shrink-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="13" x="3" y="6" rx="2"/>
                <path d="M7 6V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2"/>
                <circle cx="12" cy="13" r="3"/>
                <path d="M19 9h.01"/>
              </svg>
              </div>

              {/* Text Zone */}
              <div className="flex-1">
                <h3 className="text-[17px] font-bold text-white leading-[1.2]">Scanner avec la caméra</h3>
                <p className="text-[13px] text-white/72 mt-[5px] font-medium">Utilisez l'appareil photo</p>
                
                <div className="inline-flex items-center gap-[6px] bg-white/20 border border-white/30 rounded-full px-3 py-1.5 mt-3 transition-colors group-hover:bg-white/30">
                  <span className="text-[12px] font-bold text-white">Ouvrir</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </motion.button>

          {/* Card 2: Barcode Reader */}
          <motion.button
            onClick={() => setScanningMode('hardware')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease: "easeOut" }}
            whileHover={{ y: -3, shadow: '0 20px 56px rgba(26,107,255,0.32)' }}
            whileTap={{ scale: 0.97, filter: 'brightness(0.92)' }}
            className="mx-5 mt-4 h-[160px] rounded-[22px] bg-[linear-gradient(135deg,#0A2E6E_0%,#1A6BFF_100%)] shadow-[0_8px_32px_rgba(15,61,145,0.30)] overflow-hidden relative text-left transition-all group shrink-0"
          >
            {/* Decorative Circles (Mirrored) */}
            <div className="absolute top-[-25px] left-[-25px] w-[110px] h-[110px] bg-white/7 rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20px] right-[10px] w-[90px] h-[90px] bg-white/5 rounded-full pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 p-[24px_22px] h-full flex items-center gap-[18px]">
              {/* Icon Zone */}
              <div className="w-[72px] h-[72px] rounded-[18px] bg-white/15 border-[1.5px] border-white/32 backdrop-blur-[8px] flex items-center justify-center shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 6v12" strokeWidth="2" />
                  <path d="M8 6v12" strokeWidth="5" />
                  <path d="M13 6v12" strokeWidth="2" />
                  <path d="M17 6v12" strokeWidth="5" />
                  <path d="M20 6v12" strokeWidth="2" />
                  <path d="M4 20h16" strokeWidth="1" opacity="0.6" />
                </svg>
              </div>

              {/* Text Zone */}
              <div className="flex-1">
                <h3 className="text-[17px] font-bold text-white leading-[1.2]">Scanner avec le lecteur <br/> code-barres</h3>
                <p className="text-[13px] text-white/72 mt-[5px] font-medium">Lecteur Bluetooth ou USB</p>
                
                <div className="inline-flex items-center gap-[6px] bg-white/20 border border-white/30 rounded-full px-3 py-1.5 mt-3 transition-colors group-hover:bg-white/30">
                  <span className="text-[12px] font-bold text-white">Activer</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </motion.button>

          {/* Empty State Hint */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.24 }}
            className="mx-5 mt-6 flex items-center gap-[10px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <p className="text-[13px] text-[#9CA3AF] font-medium">
              Besoin d'aide ? Consultez le <span className="text-[#1A6BFF] underline underline-offset-2">guide de scan</span>
            </p>
          </motion.div>

          {/* Scan History Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.32 }}
            className="mx-5 mt-10 flex-1 flex flex-col min-h-0"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[15px] font-extrabold text-[#1A1D23]">Derniers scans</h3>
              <button className="text-[12px] font-bold text-[#1A6BFF] p-1">Effacer</button>
            </div>
            
            <div className="space-y-3 pb-32">
              {[
                { name: 'Coca-Cola Zero 33cl', code: '5449000131805', time: '14:20', brand: 'Coca-Cola' },
                { name: 'Pringles BBQ 175g', code: '5053990156948', time: '12:45', brand: 'Pringles' },
                { name: 'Valencia Orange 1L', code: '6111112223334', time: 'Hier', brand: 'Valencia' }
              ].map((scan, idx) => (
                <motion.div 
                  key={scan.code}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.05) }}
                  className="flex items-center p-3.5 bg-white border border-[#E8ECF4] rounded-[18px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#1A6BFF]/30 transition-all cursor-pointer group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F0F4FF] flex items-center justify-center text-[#1A6BFF] shrink-0 transition-transform group-hover:scale-110">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"/><path d="M4 12h16"/></svg>
                  </div>
                  <div className="ml-3.5 flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-[#1A6BFF] uppercase tracking-wider mb-0.5">{scan.brand}</span>
                      <span className="text-[11px] text-[#9CA3AF] font-bold">{scan.time}</span>
                    </div>
                    <div className="text-[14px] font-[700] text-[#1A1D23] truncate group-hover:text-[#1A6BFF] transition-colors">{scan.name}</div>
                    <div className="text-[11px] text-[#6B7280] font-mono mt-0.5 opacity-60">#{scan.code}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <FloatingBottomNav activeTab="Scanner" dark={false} />
    </div>
  );
};

// --- SCREEN 4: VENTES ---
const SaleCard = ({ client, amount, date, status, statusColor }: { client: string, amount: string, date: string, status: string, statusColor: string }) => {
  const getStatusStyle = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'green': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'purple': return 'bg-purple-50 text-purple-600 border-purple-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };
  return (
    <motion.div 
      variants={itemVariants}
      whileTap={{ scale: 0.98 }}
      className="bg-white border border-[var(--border)] rounded-[var(--radius-card)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--primary)] transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[14px] font-bold group-hover:text-[var(--primary)] transition-colors">{client}</span>
        <span className="text-[14px] font-extrabold text-[var(--primary)]">{amount}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[12px] text-[var(--text-2)] font-medium">{date}</span>
        <div className={`text-[11px] font-bold px-2.5 py-1 rounded-[var(--radius-pill)] border ${getStatusStyle(statusColor)}`}>
          {status}
        </div>
      </div>
    </motion.div>
  );
};

export const ScreenVentes = () => {
  const [showFilter, setShowFilter] = useState(false);

  const statuses = [
    { label: 'Toutes les ventes', dot: '#6B7280', bg: 'bg-[#F9FAFB]', border: 'border-[#D1D5DB]', text: 'text-[#374151]' },
    { label: 'Annulé', dot: '#FF4D4F', bg: 'bg-[#FFF1F1]', border: 'border-[#FECACA]', text: 'text-[#991B1B]' },
    { label: 'Draft', dot: '#F97316', bg: 'bg-[#FFF7ED]', border: 'border-[#FED7AA]', text: 'text-[#9A3412]' },
    { label: 'En Caisse', dot: '#1A6BFF', bg: 'bg-[var(--primary-light)]', border: 'border-[#93C5FD]', text: 'text-[#1D4ED8]', selected: true },
    { label: 'Réglé', dot: '#00C896', bg: 'bg-[#F0FDF4]', border: 'border-[#A7F3D0]', text: 'text-[#065F46]' },
    { label: 'Expiré', dot: '#F59E0B', bg: 'bg-[#FFFBEB]', border: 'border-[#FCD34D]', text: 'text-[#92400E]' },
    { label: 'En attente', dot: '#7C3AED', bg: 'bg-[#F5F3FF]', border: 'border-[#DDD6FE]', text: 'text-[#5B21B6]' },
    { label: 'Validé', dot: '#0D9488', bg: 'bg-[#F0FDFA]', border: 'border-[#99F6E4]', text: 'text-[#134E4A]' },
  ];

  return (
    <div className="h-full relative text-[var(--text-1)] flex flex-col">
      <StatusBar />
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex-1">
        <SearchBar />

        <div className="px-5">
          <motion.div variants={itemVariants} className="flex justify-between items-center mb-4">
            <h2 className="text-[22px] font-extrabold tracking-tight">Mes Ventes</h2>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowFilter(true)} 
              className="w-10 h-10 bg-white border border-[var(--border)] rounded-full flex items-center justify-center text-[var(--text-2)] shadow-[var(--shadow-sm)] transition-all hover:bg-gray-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="inline-flex items-center bg-[var(--primary-light)] border border-[#93C5FD] text-[#1D4ED8] text-[13px] font-bold rounded-[var(--radius-pill)] px-3 py-1.5 mb-5 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mr-2" />
            En Caisse
            <button className="ml-2.5 hover:opacity-75 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </motion.div>

          <div className="flex flex-col gap-2.5">
            <SaleCard client="Marjane Hay Riad" amount="12 450 MAD" date="15 Avr 2026" status="En Caisse" statusColor="blue" />
            <SaleCard client="Carrefour Ain Sebaa" amount="8 200 MAD" date="14 Avr 2026" status="Réglé" statusColor="green" />
            <SaleCard client="Label Vie Maarif" amount="3 750 MAD" date="13 Avr 2026" status="En attente" statusColor="purple" />
          </div>
        </div>
      </motion.div>

      <FloatingBottomNav activeTab="Ventes" />

      {/* Bottom Sheet Filter */}
      <AnimatePresence>
        {showFilter && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilter(false)}
              className="absolute inset-0 bg-[rgba(15,61,145,0.25)] z-[200] backdrop-blur-[2px]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 w-full bg-white rounded-t-[28px] shadow-[0_-12px_48px_rgba(0,0,0,0.15)] z-[250] px-5 pb-[120px]"
            >
              <div className="w-9 h-1 bg-[#D1D5DB] rounded-full mx-auto mt-3 mb-5" />
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-[18px] font-extrabold tracking-tight">Filtrer par statut</h3>
                <motion.button whileTap={{ scale: 0.9 }} onClick={() => setShowFilter(false)} className="w-8 h-8 bg-[#F3F4F6] rounded-full flex items-center justify-center text-[var(--text-2)] hover:bg-gray-200 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </motion.button>
              </div>
              <div className="h-[1px] bg-[var(--border)] mb-5" />
              
              <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[440px] px-0.5 pb-4">
                {statuses.map((s) => (
                  <motion.button 
                    key={s.label}
                    whileTap={{ scale: 0.98, brightness: 0.95 }}
                    className={`flex items-center w-full h-[52px] border-[1.5px] ${s.border} ${s.bg} rounded-[var(--radius-pill)] px-4 gap-3 transition-all relative ${s.selected ? 'border-[2px] shadow-[0_0_0_3px_rgba(26,107,255,0.15)]' : 'hover:brightness-[0.98]'}`}
                  >
                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.dot }} />
                    <span className={`text-[14px] font-bold flex-1 text-left ${s.text}`}>{s.label}</span>
                    {s.selected && (
                      <div className={s.text}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
