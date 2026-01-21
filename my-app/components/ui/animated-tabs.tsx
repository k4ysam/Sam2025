"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
id: string;
label: string;
content: React.ReactNode;
}

interface AnimatedTabsProps {
tabs?: Tab[];
defaultTab?: string;
className?: string;
}

const defaultTabs: Tab[] = [
{
  id: "tab1",
  label: "Stealth",
  content: (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Stealth"
        className="w-full h-60 object-cover mt-0 !m-0 border border-white/20"
      />

      <div className="flex flex-col gap-y-3">
        {/* <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0 font-mono tracking-wide">
          Stealth
        </h2> */}
        <p className="text-sm text-white/70 mt-0 font-mono">
          Designing and building a mobile-first social productivity app that gamifies task completion through photo-based
          check-ins, streaks, and friend leaderboards
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            React Native
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Supabase
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            TypeScript
          </span>
        </div>
      </div>
    </div>
  ),
},
{
  id: "tab2",
  label: "PromptDuels",
  content: (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="PromptDuels"
        className="w-full h-60 object-cover mt-0 !m-0 border border-white/20"
      />
      <div className="flex flex-col gap-y-3">
        {/* <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0 font-mono tracking-wide">
          PromptDuels
        </h2> */}
        <p className="text-sm text-white/70 mt-0 font-mono">
          Built a real-time 1v1 AI coding-challenge web app with matchmaking, ranked ELO system, and live code evaluation,
          enabling competitive prompt-based duels with analytics and replayable challenge history.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Python
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            MongoDB
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Flask
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            React
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Docker
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            NodeJS
          </span>
        </div>
      </div>
    </div>
  ),
},
{
  id: "tab3",
  label: "Lecture Summariser",
  content: (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1522428938647-2baa7c899f2f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Lecture Transcript Summariser"
        className="w-full h-60 object-cover mt-0 !m-0 border border-white/20"
      />
      <div className="flex flex-col gap-y-3">
        {/* <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0 font-mono tracking-wide">
          Lecture Transcript Summariser
        </h2> */}
        <p className="text-sm text-white/70 mt-0 font-mono">
          Built an NLP tool to generate concise summaries from lecture transcripts using transformer models 
          like BART and semantic analysis with Weaviate Cloud
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Python
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            spaCy
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Gensim
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            BART
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Weaviate
          </span>
        </div>
      </div>
    </div>
  ),
},
{
  id: "tab4",
  label: "McGill Food Tracker",
  content: (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="McGill Food Tracker"
        className="w-full h-60 object-cover mt-0 !m-0 border border-white/20"
      />
      <div className="flex flex-col gap-y-3">
        {/* <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0 font-mono tracking-wide">
          McGill Food Tracker
        </h2> */}
        <p className="text-sm text-white/70 mt-0 font-mono">
          Developed a full-stack web application with Spring Boot and React, integrating web scraping and a 
          PostgreSQL database of 1,000+ cafeteria menu items
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Java
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Maven
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            PostgreSQL
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Spring Boot
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            React
          </span>
        </div>
      </div>
    </div>
  ),
},
{
  id: "tab5",
  label: "Stock Price Predictor",
  content: (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Stock Price Prediction Tool"
        className="w-full h-60 object-cover mt-0 !m-0 border border-white/20"
      />
      <div className="flex flex-col gap-y-3">
        {/* <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0 font-mono tracking-wide">
          Stock Price Prediction Tool
        </h2> */}
        <p className="text-sm text-white/70 mt-0 font-mono">
          Built a machine learning tool to predict stock prices and trends. Showcased to attendees at the MAIS202 AI Fair
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Python
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            SciKit Learn
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            TensorFlow
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Keras
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 border border-white/20 font-mono">
            Flask
          </span>
        </div>
      </div>
    </div>
  ),
},
];

const AnimatedTabs = ({
tabs = defaultTabs,
defaultTab,
className,
}: AnimatedTabsProps) => {
const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);
const [currentPage, setCurrentPage] = useState(0);
const tabsPerPage = 3;
const totalPages = Math.ceil(tabs.length / tabsPerPage);

if (!tabs?.length) return null;

const visibleTabs = tabs.slice(
  currentPage * tabsPerPage,
  (currentPage + 1) * tabsPerPage
);

const goToNextPage = () => {
  if (currentPage < totalPages - 1) {
    setCurrentPage(currentPage + 1);
  }
};

const goToPrevPage = () => {
  if (currentPage > 0) {
    setCurrentPage(currentPage - 1);
  }
};

return (
  <div className={cn("w-full max-w-lg flex flex-col gap-y-1", className)}>
    <div className="flex items-center gap-2 bg-black/40 border border-white/20 backdrop-blur-sm p-1">
      <button
        onClick={goToPrevPage}
        disabled={currentPage === 0}
        className={cn(
          "p-1.5 transition-all",
          currentPage === 0
            ? "text-white/20 cursor-not-allowed"
            : "text-white/60 hover:text-white hover:bg-white/10"
        )}
        aria-label="Previous page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <div className="flex gap-2 flex-wrap flex-1 justify-center">
        {visibleTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium text-white/80 outline-none transition-colors font-mono"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white/10 border border-white/30 backdrop-blur-sm"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages - 1}
        className={cn(
          "p-1.5 transition-all",
          currentPage === totalPages - 1
            ? "text-white/20 cursor-not-allowed"
            : "text-white/60 hover:text-white hover:bg-white/10"
        )}
        aria-label="Next page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    <div className="p-4 bg-black/40 border border-white/20 text-white backdrop-blur-sm min-h-60 h-full">
      {tabs.map(
        (tab) =>
          activeTab === tab.id && (
            <motion.div
              key={tab.id}
              initial={{
                opacity: 0,
                scale: 0.95,
                x: -10,
                filter: "blur(10px)",
              }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
              transition={{
                duration: 0.5,
                ease: "circInOut",
                type: "spring",
              }}
            >
              {tab.content}
            </motion.div>
          )
      )}
    </div>
  </div>
);
};

export { AnimatedTabs };
