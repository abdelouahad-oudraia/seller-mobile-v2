import React, { useEffect } from 'react';
import { PhoneFrame } from './components/Layout';
import { ScreenConnexion, ScreenProfile, ScreenScanner, ScreenVentes, ScreenAccueil, ScreenSplash, ScreenClients } from './components/Screens';

export default function App() {
  // Ensure we scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-16 flex flex-col items-center gap-[48px]">
      <div className="text-center mb-8 animate-fade-up">
        <h1 className="text-4xl font-extrabold text-[#1A1D23] mb-2 text-transparent bg-clip-text bg-[linear-gradient(135deg,#1A6BFF_0%,#00C896_100%)]">Seller App Design</h1>
        <p className="text-lg text-gray-600">Production-ready B2B Mobile UI Kit</p>
      </div>

      <PhoneFrame index={0}>
        <ScreenSplash />
      </PhoneFrame>

      <PhoneFrame index={1}>
        <ScreenConnexion />
      </PhoneFrame>

      <PhoneFrame index={2}>
        <ScreenAccueil />
      </PhoneFrame>

      <PhoneFrame index={3}>
        <ScreenClients />
      </PhoneFrame>

      <PhoneFrame index={4}>
        <ScreenScanner />
      </PhoneFrame>

      <PhoneFrame index={5}>
        <ScreenVentes />
      </PhoneFrame>

      <PhoneFrame index={6}>
        <ScreenProfile />
      </PhoneFrame>

      <footer className="mt-12 mb-8 text-gray-400 text-sm animate-fade-up">
        © 2026 Seller Inc. Built for High-Performance Field Sales.
      </footer>
    </div>
  );
}
