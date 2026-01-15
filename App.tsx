import React from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { Stats } from './components/Sections/Stats';
import { Services } from './components/Sections/Services';
import { Strengths } from './components/Sections/Strengths';
import { Flow } from './components/Sections/Flow';
import { Company } from './components/Sections/Company';
import { News } from './components/Sections/News';
import { CallToAction } from './components/Sections/CallToAction';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Header />
      
      <main className="flex-grow relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Strengths />
        <Flow />
        <Company />
        <News />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default App;