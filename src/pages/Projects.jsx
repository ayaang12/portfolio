const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectPlate from '../components/portfolio/ProjectPlate';

const projects = [
  {
    title: 'PAN-IV',
    description: 'A medical device used to detect early signs of bacterial infections in peripheral IV lines, central venous lines, and urinary catheters. Uses polyaniline, temperature sensors, and a pulse oximeter to collect data (body temp, pulse, oxygen level, pH) for each patient. Uses a circuit board and web app to analyze data through a proprietary algorithm. Sends alerts.',
    problem: 'Line and catheter infections can escalate before staff have a clear early signal that something is wrong.',
    challenge: 'The hardest part was connecting sensor readings, hardware constraints, and alert logic into one dependable workflow.',
    image: '/paniv.png',
    specs: [
      { key: 'LANGUAGE', value: 'TypeScript, C++' },
      { key: 'NJ HOSA', value: '5th Place' },
    ],
  },
  {
    title: 'ISOLYTICS',
    description: 'A web and mobile application designed to streamline physical fitness. Includes health and progress tracking, as well as meal and lift logging. Features a custom-trained AI assistant that provides personalized workout and nutrition recommendations based on user data and goals.',
    problem: 'Fitness progress often gets split across separate trackers, notes, and apps, making patterns hard to see.',
    challenge: 'I focused on making the AI guidance feel useful and personal without overwhelming the user with too much data.',
    image: '/isolytics.png',
    specs: [
      { key: 'LANGUAGE', value: 'React/Vite, TypeScript' },
  
      { key: 'Competition', value: 'Congressional App Challenge' },
    ],
  },
  {
    title: 'PLAYLYTICS-FRONTEND',
    description: 'The frontend web design for a Spotify playlist randomizer and viewer. Users can connect their Spotify account and play a random playlist from their catalog. They can also view each of their playlists in a visually appealing way, with stats about each playlist and its songs. The app is built with React and Vite, and uses the Spotify API to fetch user data and playlists.',
    problem: 'Large Spotify libraries can become stale because users rarely rediscover older playlists or compare them easily.',
    challenge: 'The challenge was turning Spotify account data into a fast, playful interface that still felt organized and readable.',
    image: '/playlytics.png',
    specs: [
      { key: 'LANGUAGE', value: 'React/Vite, TypeScript, Java' },
      { key: 'TEAM', value: 'Two Members' },
    ],
  },
  {
    title: 'TRUTHLENS AI',
    description: 'A Python app that uses a custom trained machine learning model to analyze news headlines and determine its truthfulness. The model is trained on a large dataset of true and false statements, and uses natural language processing techniques to evaluate the input text. The app provides a truth score and highlights specific parts of the text that contributed to the score.',
    problem: 'News headlines can be misleading, and readers often need a quick way to question claims before sharing them.',
    challenge: 'I had to balance model training, text preprocessing, and explainable output so the result felt transparent.',
    image: '/truthlensai.png',
    specs: [
      { key: 'LANGUAGE', value: 'Python, ML' },
      { key: 'LIBRARIES/DATASET', value: 'Pytorch, Numpy, Kaggle' },
    
    ],
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      {/* Header */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto w-full pt-16 md:pt-20 pb-8 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">
            // OUTSTANDING_WORKS
          </p>
          <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            SELECTED <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          <p className="font-mono text-xs text-muted-foreground mt-3">
            SCROLL_HORIZONTAL → TO NAVIGATE PROJECTS
          </p>
        </motion.div>
      </div>

      {/* Scroll Progress */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto w-full mb-6">
        <div className="h-[2px] bg-border relative">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${scrollProgress * 100}%`, transitionTimingFunction: 'steps(20, end)' }}
          />
        </div>
        <div className="flex justify-between font-mono text-[10px] text-muted-foreground mt-1">
          <span>01</span>
          <span>04</span>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <motion.div
        className="flex-1 min-h-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.3 }}
      >
        <div
          ref={scrollRef}
          className="project-scroll overflow-x-auto overflow-y-hidden h-full pb-8"
        >
          <div className="flex gap-8 md:gap-12 px-6 md:px-12 h-[calc(100vh-22rem)] min-h-[400px]">
            {projects.map((project, i) => (
              <ProjectPlate key={i} index={i} {...project} />
            ))}
            {/* End spacer */}
            <div className="flex-shrink-0 w-12" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
