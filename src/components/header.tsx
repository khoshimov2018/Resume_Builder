'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/theme-switcher';

interface HeaderProps {
  onLoginClick?: () => void;
  onGetStartedClick?: () => void;
}

// Elegant Logo Component
export function Logo({ className, size = 'default', iconOnly = false }: { className?: string; size?: 'default' | 'large'; iconOnly?: boolean }) {
  const iconSize = size === 'large' ? 16 : 12;
  const containerSize = size === 'large' ? 'w-14 h-14' : 'w-10 h-10';
  const textSize = size === 'large' ? 'text-3xl' : 'text-2xl';
  
  return (
    <div className={`flex items-center ${iconOnly ? '' : 'gap-3'} ${className}`}>
      {/* Elegant Logo Icon */}
      <div className="relative group">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
        
        {/* Middle glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-2xl blur-sm opacity-30"></div>
        
        {/* Main icon container */}
        <div className={`relative ${containerSize} rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-500/40 group-hover:shadow-purple-500/60 transition-all`}>
          {/* Elegant Logo SVG - Document with Sparkle/Magic */}
          <svg
            width={iconSize * 2}
            height={iconSize * 2}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            {/* Document base */}
            <path
              d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="rgba(255,255,255,0.1)"
            />
            {/* Fold corner */}
            <path
              d="M14 2V8H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Text lines */}
            <path
              d="M8 12H16"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M8 15H13"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Sparkle/Magic effect - AI element */}
            <circle cx="17" cy="5" r="1.5" fill="currentColor" opacity="0.9">
              <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
            </circle>
            <path
              d="M17 3L17 7M15 5L19 5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.7"
            >
              <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      </div>
      
      {/* Logo Text */}
      {!iconOnly && (
        <span className={`${textSize} font-semibold tracking-tight`}>
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-50 dark:to-gray-100 bg-clip-text text-transparent transition-all duration-300">
            Resume
          </span>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent transition-all duration-300">
            Craft
          </span>
        </span>
      )}
    </div>
  );
}

export function Header({ onLoginClick, onGetStartedClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-indigo-100/50 dark:border-gray-800/30 bg-white/90 dark:bg-gray-950/70 backdrop-blur-2xl transition-colors duration-300 shadow-sm shadow-indigo-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              FAQ
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              onClick={onLoginClick}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/30 font-medium transition-colors duration-300"
            >
              Log in
            </Button>
            <Button
              onClick={onGetStartedClick}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25 font-medium px-6 transition-all duration-300"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
